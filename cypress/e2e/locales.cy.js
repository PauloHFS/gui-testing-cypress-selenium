describe('locales', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
    cy.visit('/admin/locales/');
  });
  it('check create flow', () => {
    // Click in create locale button
    cy.get('div.right:nth-child(1)').click();
    
    cy.get('#sylius_locale_code').select('bm_ML');

    cy.get('button.ui').click();

    // check if the new locale is in the table
    cy.get('td').should('contain', 'Bambara (Mali)');
  });
  it('check delete locale', () => {
    
    cy.get('.item:nth-child(1) > td > .ui > form > .ui').click()
 
    cy.get('.dimmable > .ui > #confirmation-modal > .actions > #confirmation-button').click()
 
  });
});
