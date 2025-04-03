describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Navigation Test', function () {
  it('Ensures user can navigate slides using navigation buttons', function () {
    // Krok 1: Otwórz stronę z galerią
    cy.visit('http://localhost:3000');

    // Krok 2: Kliknij przycisk "następny" i sprawdź, czy slajd się zmienia
    cy.get('.swiper-slide-active').invoke('text').then((firstSlideText) => {
      cy.get('.swiper-button-next').click();
      cy.wait(1500); // Dłuższe oczekiwanie na animację

      cy.get('.swiper-slide-active').invoke('text').should((newSlideText) => {
        expect(newSlideText.trim()).not.to.eq(firstSlideText.trim()); // Porównanie bez zbędnych spacji
      });
    });

    // Krok 3: Kliknij przycisk "poprzedni" i sprawdź, czy wrócił do poprzedniego slajdu
    cy.get('.swiper-slide-active').invoke('text').then((secondSlideText) => {
      cy.get('.swiper-button-prev').click();
      cy.wait(1500); // Dłuższe oczekiwanie na animację

      cy.get('.swiper-slide-active').invoke('text').should((previousSlideText) => {
        expect(previousSlideText.trim()).not.to.eq(secondSlideText.trim()); // Sprawdzenie, czy zmiana zaszła
      });
    });
  });
});

