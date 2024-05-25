describe('GMAIL', () => {
  it('Deve tentar efetuar login no gmail com e-mail inválido', () => {
    // Visitar a página inicial do Google
    cy.visit('https://accounts.google.com/');
    cy.screenshot('gmail-1-visita-pagina-inicial');
    // Localizar o campo de pesquisa e digitar o nome
    cy.get('#identifierId').type('?@@@@@@s');
    cy.screenshot('gmail-2-digita-na-tela');
    // Clicar no botão de pesquisa
    cy.get("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b VfPpkd-ksKsZd-mWPk3d-OWXEXe-Tv8l5d-lJfZMc VfPpkd-ksKsZd-mWPk3d'] div[class='VfPpkd-RLmnJb']").click();
   // cy.get('#search').should('be.visible');
    cy.screenshot('gmail-3-apos-pesquisa-na-tela');
  });
});