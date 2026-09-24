# Checkout Test Plan

## Application Overview

SauceDemo checkout flow from a cart containing Sauce Labs Backpack. The plan covers customer information validation, checkout overview accuracy, and successful order completion. Each scenario assumes a fresh browser context and uses the existing add-product-to-cart seed flow to establish the cart precondition.

## Test Scenarios

### 1. Checkout Functionality

**Seed:** `tests/add-product-to-cart.spec.ts`

#### 1.1. Complete checkout with valid customer information

**File:** `tests/checkout/complete-checkout.spec.ts`

**Steps:**
  1. Start from a fresh browser context and add Sauce Labs Backpack to the cart using the existing product-to-cart setup.
    - expect: The cart contains exactly one Sauce Labs Backpack.
  2. Open the cart and click Checkout.
    - expect: The Checkout: Your Information page is displayed.
    - expect: First Name, Last Name, and Zip/Postal Code fields are visible.
    - expect: The Continue button is enabled.
  3. Enter `Test` in First Name, `Customer` in Last Name, and `12345` in Zip/Postal Code, then click Continue.
    - expect: The Checkout: Overview page is displayed.
    - expect: The selected product is listed with quantity 1.
    - expect: Payment Information shows SauceCard #31337.
    - expect: Shipping Information shows Free Pony Express Delivery!.
    - expect: The item total, tax, and total are displayed.
  4. Click Finish.
    - expect: The Checkout: Complete! page is displayed.
    - expect: The message `Thank you for your order!` is visible.
    - expect: The dispatch confirmation text is visible.
    - expect: The Back Home button is available.

#### 1.2. Validate required checkout information

**File:** `tests/checkout/checkout-information-validation.spec.ts`

**Steps:**
  1. Start from a fresh browser context and add Sauce Labs Backpack to the cart using the existing product-to-cart setup.
    - expect: The cart contains exactly one Sauce Labs Backpack.
  2. Open the cart, click Checkout, and leave First Name, Last Name, and Zip/Postal Code empty.
    - expect: The Checkout: Your Information page is displayed.
    - expect: All three customer information fields are empty.
  3. Click Continue without entering any customer information.
    - expect: The user remains on the Checkout: Your Information page.
    - expect: The validation message `Error: First Name is required` is displayed.
    - expect: The checkout does not proceed to the overview page.
  4. Enter a valid first name only and click Continue.
    - expect: The validation message `Error: Last Name is required` is displayed.
    - expect: The checkout does not proceed to the overview page.
  5. Enter a valid last name while leaving Zip/Postal Code empty and click Continue.
    - expect: The validation message `Error: Postal Code is required` is displayed.
    - expect: The checkout does not proceed to the overview page.

#### 1.3. Verify checkout overview totals and selected item

**File:** `tests/checkout/checkout-overview.spec.ts`

**Steps:**
  1. Start from a fresh browser context and add Sauce Labs Backpack to the cart using the existing product-to-cart setup.
    - expect: The cart contains exactly one Sauce Labs Backpack.
  2. Open the cart, click Checkout, enter `Test`, `Customer`, and `12345`, then click Continue.
    - expect: The Checkout: Overview page is displayed.
    - expect: Sauce Labs Backpack is listed with quantity 1.
    - expect: Payment Information shows SauceCard #31337.
    - expect: Shipping Information shows Free Pony Express Delivery!.
  3. Review the displayed price summary.
    - expect: Item total is `$29.99`.
    - expect: Tax is `$2.40`.
    - expect: Total is `$32.39`.
    - expect: The displayed total equals the item total plus tax.
  4. Click Cancel.
    - expect: The user returns to the cart or the previous checkout context according to the application's cancel behavior.
    - expect: The order is not completed.
