/// <reference types="Cypress" />
import HomePage from '../../cypress/support/PageObjects/HomePage'
import ProductDetailsPage from '../../cypress/support/PageObjects/ProductDetailsPage'
import CartDetailsPage from '../../cypress/support/PageObjects/CartDetailsPage'
import CatalogPage from '../../cypress/support/PageObjects/CatalogPage'

describe('My Shopify Webtests', function () {

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
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
        cy.selectProduct(this.data.productName)
        productDetailspage.getAddToCartButton().click()
        productDetailspage.getAddedToCartPopUpMessage().should('contain.text', 'Just added to your cart')

    })

    it('Add product from featured collection and assert', function () {

        homePage.getCatalogLinkSite().click()
        cy.selectDropDown(this.data.productCategory)
        catalogPage.getSortByCategoryDropDown().should('contain.text', this.data.productCategory)
        cy.selectProduct(this.data.productName)
        cy.AddToCartAndVerify()
    })

    it('Add product to cart with multiple sizes and validate', function () {

        homePage.getSearchButton().click()
        homePage.getSearchTextBox().type(this.data.productName)
        homePage.getSearchTextBox().type('{enter}')
        cy.selectProduct(this.data.productToBeSelected)
        cy.SelectSize('L')
        cy.AddToCartAndVerify()
        cy.SelectSize('M')
        cy.AddToCartAndVerify()
        cy.SelectSize('XL')
        cy.AddToCartAndVerify()
    })

    it('Add product to cart remove and verify', function () {

        homePage.getSearchButton().click()
        homePage.getSearchTextBox().type(this.data.productName)
        homePage.getSearchTextBox().type('{enter}')
        cy.selectProduct(this.data.productToBeSelected)
        cy.AddToCartAndVerify()
        productDetailspage.getViewCartButton().click()
        cartDetailsPage.getRemoveButton().click()
        cartDetailsPage.getCartMessage().should('contain.text', 'Your cart is currently empty.')

    })

})
