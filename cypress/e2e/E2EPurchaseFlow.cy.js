import { ViewCartPage, CheckoutPage, PaymentPage } from '../pages';
import { addProductToCartAndVerify, verifyTotalMatchesSumOfProductPrices } from '../support/helpers';

beforeEach(function () {
  cy.loginAs('user');

  cy.fixture('products').then(({ frozenTop, pandaShirt }) => {
    this.frozenTopProduct = frozenTop;
    this.pandaShirtProduct = pandaShirt;
  });

  cy.fixture('cardData').then((data) => {
    this.card = data.validCard;
  });
});

it('success purchase flow', function () {

  //add products to cart and verify
  addProductToCartAndVerify(this.frozenTopProduct);
  addProductToCartAndVerify(this.pandaShirtProduct);
  ViewCartPage.elements.proceedToCheckout().click();

  //verify items in cart
  CheckoutPage.verifyItemInCart(this.frozenTopProduct.name, this.frozenTopProduct.price, this.frozenTopProduct.price, 1);
  CheckoutPage.verifyItemInCart(this.pandaShirtProduct.name, this.pandaShirtProduct.price, this.pandaShirtProduct.price, 1);

  //verify total amount of items in cart
  verifyTotalMatchesSumOfProductPrices(this.frozenTopProduct, this.pandaShirtProduct);

  CheckoutPage.elements.placeOrderButton().click();

  //fill card details and submit payment
  PaymentPage.fillCardDetails(this.card);
  PaymentPage.submitPayment();

  //verify success message
  PaymentPage.elements.congratMessage().should('be.visible');
  PaymentPage.elements.orderPlacedMessage().should('be.visible');
});

