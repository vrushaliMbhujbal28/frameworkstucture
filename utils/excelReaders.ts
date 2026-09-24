import * as path from 'path';
import * as XLSX from 'xlsx';   
export class ExcelReader {

    static read<T>(fileName: string, sheetName: string): T {
       let filePath = path.join(process.cwd(),'testdata',fileName);
       let workbook = XLSX.readFile(filePath);
       let worksheet = workbook.Sheets[sheetName];
            
       if (!worksheet) {
          throw new Error(`Sheet "${sheetName}" not found in file "${fileName}".`);
       }    

       let jsonData = XLSX.utils.sheet_to_json(worksheet, { defval:'',raw:false });
       return jsonData as unknown as T;
    }  

    static getRowByTestCaseId<T>(sheetName:string,testCaseId: string,fileName:string='SauceDemoTestData.xlsx'): T | undefined {

      let rows=this.read<T[]>(fileName, sheetName)
        return rows.find((row: any) => {
           return String(row.TestCaseID??'').trim() === testCaseId;
    })
      if(!rows){
        throw new Error(`Row with TestCaseId "${testCaseId}" not found in sheet "${sheetName}".`);
      }  
   }

   static getCellValue<T>(sheetName:string,testCaseId:string,columnName:string,fileName:string='SauceDemoTestData.xlsx'): string{
      let rows:any=this.getRowByTestCaseId<T>(sheetName,testCaseId,fileName)
      return String(rows?.[columnName]??'').trim();
   }
   }

   
