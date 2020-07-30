import {enterTodo} from '../support/utils.js'

beforeEach(() => {
    cy.visit('localhost:8080')
    //cy.get('.todo-items-grid').clear()
})

describe('write todo', () => {
    it('write new todo', () => {
        cy.get('.todo-input')
            .type('dummy todo')
            .should('have.value', 'dummy todo')
    })
})

describe('adding todo', () => {
    it('adds todo to list with button', () => {
        cy.get('.todo-input')
            .type('first todo')
            .should('have.value', 'first todo')
        cy.get('.add-todo-image').click()
        cy.get('.todo-input').should('empty')
        cy.get('.todo-item-row')
            .should('have.length', 1)
    })

    it('adds todo to list with enter', () => {
        enterTodo('second item')
        cy.get('.todo-input')
            .type('{enter}')
        cy.get('.todo-input').should('empty')
        cy.get('.todo-item-row')
            .should('have.length', 2)
    })
})