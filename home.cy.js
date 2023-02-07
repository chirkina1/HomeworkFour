describe('Parametrized tests', () => {

    const paramTest = ({testData, expectedResult}) =>
          function () {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('nb-card-header:contains("Material Dark")').click();
            cy.get('a.ng-tns-c141-9').click();
            cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
            cy.get('.form-inline > [placeholder="Email"]').type(`${testData}`);
            cy.get('.form-inline > [placeholder="Email"]').should("contain.value", `${expectedResult}`)


            cy.get('#exampleInputEmail1').type(`${testData}`);
            cy.get('#exampleInputEmail1').should("contain.value", `${expectedResult}`)


            cy.get('#exampleInputPassword1').type(`${testData}`);
            cy.get('#exampleInputPassword1').should("contain.value", `${expectedResult}`)

    
            cy.get('#inputFirstName').type(`${testData}`);
            cy.get('#inputFirstName').should("contain.value", `${expectedResult}`)

           
            cy.get('#inputEmail').type(`${testData}`);
            cy.get('#inputEmail').should("contain.value", `${expectedResult}`)

        
            cy.get('#inputEmail').type(`${testData}`);
            cy.get('#inputEmail').should("contain.value", `${expectedResult}`)

           
            cy.get('#inputWebsite').type(`${testData}`);
            cy.get('#inputWebsite').should("contain.value", `${expectedResult}`)

           
            cy.get('#inputLastName').type(`${testData}`);
            cy.get('#inputLastName').should("contain.value", `${expectedResult}`)

        
            cy.get('#inputPassword2').type(`${testData}`);
            cy.get('#inputPassword2').should("contain.value", `${expectedResult}`)

        
            cy.get('#inputEmail1').type(`${testData}`);
            cy.get('#inputEmail1').should("contain.value", `${expectedResult}`)
          }
     

      

          it(`search data`, paramTest({testData: 1, expectedResult: 1}))

          it(`search data`, paramTest({testData: 2, expectedResult: 2}))

          it('search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}))

          it('search data', paramTest({testData: 'text', expectedResult: 'text'}))

          it('search data', paramTest({testData: 'email', expectedResult: 'email'}))

          it('search data', paramTest({testData: 'email', expectedResult: 'email'}))

          it('search data', paramTest({testData: 'lastName', expectedResult: 'lastName'}))

          it('search data', paramTest({testData: 'pass2', expectedResult: 'pass2'}))

          it('search data', paramTest({testData: 'email1', expectedResult: 'email1'}))




    })
    
    
    
