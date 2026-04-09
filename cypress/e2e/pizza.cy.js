describe('Teknolojik Yemekler - Tam Akış Testi', () => {
  
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  describe('Giriş Sayfası Kontrolleri', () => {
    it('Ana sayfadaki "ACIKTIM" butonu sipariş sayfasına yönlendiriyor mu?', () => {
      cy.get('button').contains(/ACIKTIM/i).click();
      cy.url().should('include', '/siparis');
    });

    it('Promosyon kartlarındaki "SİPARİŞ VER" butonları sipariş sayfasına yönlendiriyor mu?', () => {
      
      cy.get('button').contains(/SİPARİŞ VER/i).first().click();
      cy.url().should('include', '/siparis');
    });
  });

  describe('Sipariş Sayfası ve Form Validasyonları', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:5173/siparis');
    });

    it('İsim/Not inputuna metin girilebiliyor mu?', () => {
      
      cy.get('textarea[name="not"]')
        .type('Nur Akdag - Sipariş Notu Testi')
        .should('have.value', 'Nur Akdag - Sipariş Notu Testi');
    });

        
    it('Birden fazla malzeme seçilebiliyor mu?', () => {
    
    cy.get('input[type="checkbox"]').should('exist');
    
    
    cy.contains('Pepperoni').click();
    cy.contains('Sosis').click();
    cy.contains('Mısır').click();
    cy.contains('Sucuk').click();

    cy.get('input[type="checkbox"]:checked').should('have.length', 4);
    });

    
    it('Form tam ve doğru doldurulduğunda sipariş başarıyla veriliyor mu?', () => {
    cy.get('input[name="size"]').first().check({ force: true });
    cy.get('select[name="hamur"]').select('İnce');
    
    
    cy.contains('Pepperoni').click();
    cy.contains('Sosis').click();
    cy.contains('Mısır').click();
    cy.contains('Sucuk').click();

    cy.get('textarea[name="not"]').type('Acılı olsun');
    cy.get('button').contains(/SİPARİŞ VER/i).should('not.be.disabled').click();
    cy.url().should('include', '/basarili');
    });


  });
});