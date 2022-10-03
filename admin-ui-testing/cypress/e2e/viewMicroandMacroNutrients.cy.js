import testdata from "../fixtures/testdata.json";

describe('clickEpandMoretoViewMicroandMacroNutrients', () => {

    beforeEach(function () {
        cy.login(testdata);
    });

    it('clickEpandMoretoViewMicroandMacroNutrients', function () {
        cy.viewMicroMacroNutrientsList()

    });

    it('Validate successful Logout', function () {
        cy.logout()
    })
})
