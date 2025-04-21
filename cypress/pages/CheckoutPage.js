class CheckoutPage {
  elements = {
    cartTableRowByProductName: (name) =>
      cy.get('#cart_info tbody tr').contains(name).parents('tr'),
    productTotal: () => cy.get('.cart_total_price'),
    productPrice: () => cy.get('.cart_price'),
    productQuantity: () => cy.get('.cart_quantity button.disabled'),
    productTotal: () => cy.get('.cart_total_price'),
    placeOrderButton: () => cy.contains('Place Order'),
  };

  showingCheckOutPage() {
    cy.get('.breadcrumbs')
      .should('be.visible')
      .and('contain', 'Checkout');
  }

  getTotalAmountText() {
    return cy.contains('Total Amount')
      .parents('tr')
      .find('.cart_total_price')
      .invoke('text');
  }

  verifyItemInCart(name, price, totalPrice, quantity) {
    this.elements.cartTableRowByProductName(name).within(() => {
      this.elements.productPrice().should('contain', price);
      this.elements.productQuantity().should('have.text', quantity);
      this.elements.productTotal().should('contain', totalPrice);
    });
  }

  getPriceForProduct(productName) {
    return cy.contains('tr', productName)
      .find('.cart_price')
      .invoke('text');
  }

}


export default new CheckoutPage();