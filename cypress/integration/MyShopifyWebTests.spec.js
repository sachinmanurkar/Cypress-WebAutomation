/// <reference types="Cypress" />
import HomePage from '../support/pageObjects/HomePage'
import ProductDetailsPage from '../support/pageObjects/ProductDetailsPage'
import CartDetailsPage from '../support/pageObjects/CartDetailsPage'
import CatalogPage from '../support/pageObjects/CatalogPage'

describe('My Shopify Webtests', function () {
    beforeEach(function () {
         // "this" points at the test context object
        cy.fixture('myshopify').then(function (data) {
            // "this" is still the test context object
            this.data = data
            cy.visit('/')
            cy.login(this.data.password)

        })
    })
    
    const homePage = new HomePage()
    const productDetailspage = new ProductDetailsPage()
    const cartDetailsPage = new CartDetailsPage()
    const catalogPage = new CatalogPage()


    it('Search product add to cart and verify product is added', function () {

        homePage.getSearchButton().click()
        homePage.getSearchTextBox().type(this.data.productName)
        homePage.getSearchTextBox().type('{enter}')
        // this.user exists
        cy.selectProduct(this.data.productName)
        productDetailspage.getAddToCartButton().click()
        productDetailspage.getAddedToCartPopUpMessage().should('contain.text', 'Just added to your cart')

    })

    it('Add product from featured collection and assert', function () {

        homePage.getCatalogLinkSite().click()
        cy.selectDropDown(this.data.productCategory)
        catalogPage.getSortByCategoryDropDown().should('contain.text', this.data.productCategory)
        cy.selectProduct(this.data.productName)
        cy.addToCartAndVerify()
    })

    it('Add product to cart with multiple sizes and validate', function () {

        homePage.getSearchButton().click()
        homePage.getSearchTextBox().type(this.data.productName)
        homePage.getSearchTextBox().type('{enter}')
        cy.selectProduct(this.data.productToBeSelected)
        cy.selectSize('L')
        cy.addToCartAndVerify()
        cy.selectSize('M')
        cy.addToCartAndVerify()
        cy.selectSize('XL')
        cy.addToCartAndVerify()
    })

    it('Add product to cart remove and verify', function () {

        homePage.getSearchButton().click()
        homePage.getSearchTextBox().type(this.data.productName)
        homePage.getSearchTextBox().type('{enter}')
        cy.selectProduct(this.data.productToBeSelected)
        cy.addToCartAndVerify()
        productDetailspage.getViewCartButton().click()
        cartDetailsPage.getRemoveButton().click()
        cartDetailsPage.getCartMessage().should('contain.text', 'Your cart is currently empty.')

    })

})
