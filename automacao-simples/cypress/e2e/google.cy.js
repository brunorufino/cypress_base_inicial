describe('Pesquisa no Google', () => {
  it('Deve pesquisar por um nome no Google', () => {
    // Visitar a página inicial do Google
    cy.visit('https://www.google.com');
    cy.screenshot('google-1-visita-pagina-inicial');
    // Localizar o campo de pesquisa e digitar o nome
    cy.get('.a4bIc').type('42 POLEGADAS');
    cy.screenshot('google-2-digita-na-tela');
    // Clicar no botão de pesquisa
    cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click();
    cy.get('#search').should('be.visible');
    cy.screenshot('google-3-apos-pesquisa-na-tela');
  });
});