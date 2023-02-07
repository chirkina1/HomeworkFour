describe('Parametrized tests', () => {

    const paramTest = ({testData, expectedResult}) =>
          function () {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('nb-card-header:contains("Material Dark")').click();
            cy.get('a.ng-tns-c141-9').click();
            cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
            cy.get('.form-inline > [placeholder="Email"]').type(`${testData}`);
            cy.get('.form-inline > [placeholder="Email"]').should("contain.value", `${expectedResult}`)

            cy.get('a.ng-tns-c141-9').click();
            cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
            cy.get('#exampleInputEmail1').type(`${testData}`);
            cy.get('#exampleInputEmail1').should("contain.value", `${expectedResult}`)


          }
     
    it(`search data`, paramTest({testData: 1, expectedResult: 1}))

    it(`search data`, paramTest({testData: 2, expectedResult: 2}))
      

    
    })
    
    
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
             
            }
       
      
      })
    
    
      describe('Parametrized tests', () => {
    
        const paramTest = ({testData, expectedResult}) =>
              function () {
                cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                cy.get('nb-card-header:contains("Material Dark")').click();
                cy.get('a.ng-tns-c141-9').click();
                cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
                cy.get('#exampleInputPassword1').type(`${testData}`);
                cy.get('#exampleInputPassword1').should("contain.value", `${expectedResult}`)
              }
         
        it('search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}))
        
        })
    
    
    
      describe('Parametrized tests', () => {
    
          const paramTest = ({testData, expectedResult}) =>
                function () {
                  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                  cy.get('nb-card-header:contains("Material Dark")').click();
                  cy.get('a.ng-tns-c141-9').click();
                  cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
                  cy.get('#inputFirstName').type(`${testData}`);
                  cy.get('#inputFirstName').should("contain.value", `${expectedResult}`)
                }
           
      it('search data', paramTest({testData: 'text', expectedResult: 'text'}))
          
          })
    
    
     describe('Parametrized tests', () => {
    
            const paramTest = ({testData, expectedResult}) =>
                  function () {
                    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                    cy.get('nb-card-header:contains("Material Dark")').click();
                    cy.get('a.ng-tns-c141-9').click();
                    cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
                    cy.get('#inputEmail').type(`${testData}`);
                    cy.get('#inputEmail').should("contain.value", `${expectedResult}`)
                  }
             
      it('search data', paramTest({testData: 'email', expectedResult: 'email'}))
    })
    
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
              cy.get('a.ng-tns-c141-9').click();
              cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
              cy.get('#inputEmail').type(`${testData}`);
              cy.get('#inputEmail').should("contain.value", `${expectedResult}`)
            }
       
    it('search data', paramTest({testData: 'email', expectedResult: 'email'}))
    })
    
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
              cy.get('a.ng-tns-c141-9').click();
              cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
              cy.get('#inputWebsite').type(`${testData}`);
              cy.get('#inputWebsite').should("contain.value", `${expectedResult}`)
            }
       
    it('search data', paramTest({testData: 'website', expectedResult: 'website'}))
    })
    
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
              cy.get('a.ng-tns-c141-9').click();
              cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
              cy.get('#inputLastName').type(`${testData}`);
              cy.get('#inputLastName').should("contain.value", `${expectedResult}`)
            }
       
    it('search data', paramTest({testData: 'lastName', expectedResult: 'lastName'}))
    })
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
              cy.get('a.ng-tns-c141-9').click();
              cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
              cy.get('#inputPassword2').type(`${testData}`);
              cy.get('#inputPassword2').should("contain.value", `${expectedResult}`)
            }
       
    it('search data', paramTest({testData: 'pass2', expectedResult: 'pass2'}))
    })
    
    describe('Parametrized tests', () => {
    
      const paramTest = ({testData, expectedResult}) =>
            function () {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('nb-card-header:contains("Material Dark")').click();
              cy.get('a.ng-tns-c141-9').click();
              cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
              cy.get('#inputEmail1').type(`${testData}`);
              cy.get('#inputEmail1').should("contain.value", `${expectedResult}`)
            }
       
    it('search data', paramTest({testData: 'email1', expectedResult: 'email1'}))
    })