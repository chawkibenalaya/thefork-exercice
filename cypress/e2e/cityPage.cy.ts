/// <reference types="cypress" />

describe('City Page', () => {
    it('affiche les restaurants de la ville', () => {
      cy.visit('/city/415144'); // ID réel ou mock
      cy.contains('Restaurants in');
      
      // Teste que plus d'une CityCard est affichée
      cy.get('[data-testid="city-card"]').should('have.length.greaterThan', 1);
      
      // Teste que plus d'une RestaurantCard est affichée
      cy.get('[data-testid="restaurant-card"]').should('have.length.greaterThan', 1);
    });
  
    it('affiche une page 404 si la ville n’existe pas', () => {
      cy.visit('/city/000', { failOnStatusCode: false });
      cy.contains('This page could not be found.').should('exist');
    });
  });
  