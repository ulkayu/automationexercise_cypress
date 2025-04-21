import { ProductsPage, ViewCartPage, CheckoutPage } from '../pages';

export function addProductToCartAndVerify(product) {
  ProductsPage.visitProductsPage();
  ProductsPage.searchItem(product.shortName);
  ProductsPage.verifyProductDisplayed(product.name, product.price);
  ProductsPage.clickAddToCart(product.shortName);
  ProductsPage.confirmProductAddedAndGoToCart();
  ViewCartPage.showingShoppingCartPage();
  ViewCartPage.elements.productTotal().should('contain', product.price);
  ViewCartPage.verifyItemInCart(product.name, product.price, product.price, 1);
}

export function extractNumberFromText(text) {
  return parseInt(text.replace(/[^\d]/g, ''));
}

export function verifyTotalMatchesSumOfProductPrices(productA, productB) {
  cy.wrap(null).then(() => {
    return CheckoutPage.getTotalAmountText().then((totalText) => {
      const total = extractNumberFromText(totalText);

      return CheckoutPage.getPriceForProduct(productA.name).then((priceAText) => {
        const valueA = extractNumberFromText(priceAText);

        return CheckoutPage.getPriceForProduct(productB.name).then((priceBText) => {
          const valueB = extractNumberFromText(priceBText);

          expect(total).to.equal(valueA + valueB);
        });
      });
    });
  });
}