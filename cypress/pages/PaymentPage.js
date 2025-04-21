class PaymentPage {
  elements = {
    nameOnCard: () => cy.get('[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('[data-qa="card-number"]'),
    cvc: () => cy.get('[data-qa="cvc"]'),
    expiryMonth: () => cy.get('[data-qa="expiry-month"]'),
    expiryYear: () => cy.get('[data-qa="expiry-year"]'),
    payButton: () => cy.get('[data-qa="pay-button"]'),
    congratMessage: () => cy.contains('Congratulations! Your order has been confirmed!'),
    orderPlacedMessage: () => cy.contains('Order Placed!'),
  };

  fillCardDetails(card) {
    this.elements.nameOnCard().type(card.name);
    this.elements.cardNumber().type(card.cardNumber);
    this.elements.cvc().type(card.cvc);
    this.elements.expiryMonth().type(card.month);
    this.elements.expiryYear().type(card.year);
  }

  submitPayment() {
    this.elements.payButton().click();
  }
}

export default new PaymentPage();
