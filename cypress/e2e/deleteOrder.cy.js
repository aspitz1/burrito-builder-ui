import existingOrders from "../fixtures/existingOrders.json";

describe('submit order spec', () => {
  it('Should be able to delete an order', () => {
    cy.intercept("http://localhost:3001/api/v1/orders", existingOrders)
      .intercept("DELETE", "http://localhost:3001/api/v1/orders/2", {
        statsCode: 204
      })
      .visit("http://localhost:3000/?name=&sofritas=")
      .get("#2")
      .children("button")
      .click()
      .get("#2")
      .should('not.exist')
      .get('section')
      .contains("Pat")
  });

});