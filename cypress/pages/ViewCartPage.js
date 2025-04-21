class ViewCartPage {
  elements = {
    cartTableRowByProductName: (name) =>
      cy.get('#cart_info_table tbody tr').contains(name).parents('tr'),
    productPrice: () => cy.get('.cart_price'),
    productQuantity: () => cy.get('.cart_quantity button.disabled'),
    productTotal: () => cy.get('.cart_total_price'),
    proceedToCheckout: () => cy.contains('Proceed To Checkout')
  };

  verifyItemInCart(name, price, totalPrice, quantity) {
    this.elements.cartTableRowByProductName(name).within(() => {
      this.elements.productPrice().should('contain', price);
      this.elements.productQuantity().should('have.text', quantity);
      this.elements.productTotal().should('contain', totalPrice);
    });
  }

  showingShoppingCartPage() {
    cy.get('.breadcrumbs')
    .should('be.visible')
    .and('contain', 'Shopping Cart');
  }
}

export default new ViewCartPage();
