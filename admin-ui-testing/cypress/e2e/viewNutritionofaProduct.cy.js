import testdata from "../fixtures/testdata.json";

describe('clickEpandMoretoViewNutritionofaProduct', () => {

    beforeEach(function () {
        cy.login(testdata);
    });

    it('clickEpandMoretoViewNutritionofaProduct', function () {
        cy.nutritionofaProduct()

    });

    it('Validate successful Logout', function () {
        cy.logout()
    })

    
})