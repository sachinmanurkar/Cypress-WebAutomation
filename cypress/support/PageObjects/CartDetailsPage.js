class CartDetailsPage {

    getPrice() {
        return cy.get('.cart__price.text-right')
    }
    getTotalPrice() {
        return cy.get('.cart__final-price')
    }
    getSubTotal() {
        return cy.get('.cart-subtotal__price')
    }
    getRemoveButton() {
        return cy.get('div#shopify-section-cart-template p > a')
    }
    getCartMessage() {
        return cy.get('.cart--empty-message')
    }
}
export default CartDetailsPage