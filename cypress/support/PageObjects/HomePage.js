class HomePage {
    getSearchButton() {
        return cy.get('.site-header__search-toggle > .icon')

    }

    getSearchTextBox() {
        return cy.get('[name=q]')

    }

    getCatalogLinkSite() {
        return cy.get('ul#SiteNav li:nth-child(2) > a > span')

    }

}
export default HomePage