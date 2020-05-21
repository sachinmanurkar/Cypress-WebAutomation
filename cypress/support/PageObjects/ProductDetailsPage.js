class ProductDetailsPage {

    getAddToCartButton() {
        return cy.get('.product-form__item > .btn')
    }
    getAddedToCartPopUpMessage() {
        return cy.get('#CartPopupHeading')
    }
    getClosePopupButton() {
        return cy.get('.cart-popup__close')
    }
    getSizeList() {
        return cy.get('#SingleOptionSelector-1sizeList')
    }
    getViewCartButton() {
        return cy.get('.cart-popup__cta-link.btn.btn--secondary-accent')
    }

}
export default ProductDetailsPage