class ProductsPage {
  elements = {
    searchInput: () => cy.get('input[id="search_product"]'),
    searchButton: () => cy.get('button[id="submit_search"]')
  }

  visitProductsPage() {
    cy.visit('/products');
  }

  searchItem(itemName) {
    this.elements.searchInput().type(itemName);
    this.elements.searchButton().click();
  }

  verifyProductDisplayed(productName, productPrice) {
    cy.get('.productinfo')
      .contains('p', productName)
      .should('exist')
      .parents('.productinfo')
      .within(() => {
        cy.get('h2').should('contain', productPrice);
      });
  }

  confirmProductAddedAndGoToCart() {
    cy.get('.modal-body')
      .should('be.visible')
      .within(() => {
        cy.contains('Your product has been added to cart.').should('be.visible');
        cy.contains('a', 'View Cart').click();
      });
  }

  clickAddToCart(productName) {
    cy.contains('.productinfo', productName)
      .find('.btn')
      .click({ force: true });
  }

}

export default new ProductsPage();
