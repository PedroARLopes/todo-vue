import {enterTodo} from '../support/utils.js'

beforeEach(() => {
    cy.visit('localhost:8080')
    localStorage.clear()
})

describe('write todo', () => {
    it('write new todo', () => {
        cy.get('.todo-input')
            .type('dummy todo')
            .should('have.value', 'dummy todo')
    })
})

describe('adding todo', () => {
    it('adds todo using button', () => {
        let todoText = 'todo added using button'
        cy.get('.todo-input')
            .type(todoText)
        cy.get('.add-todo-image')
            .click()
        cy.get('.todo-input')
            .should('empty')
        cy.get('.todo-item').should('be.visible')
        cy.get('.todo-item')
            .should('have.length', 1)
        cy.get('.todo-item')
            .contains(todoText)
    })

    it('adds todo using enter', () => {
        let todoText = 'todo added using enter'
        enterTodo(todoText)
        cy.get('.todo-input')
            .should('empty')
        cy.get('.todo-item').should('be.visible')
        cy.get('.todo-item')
            .should('have.length', 1)
        cy.get('.todo-item')
            .contains(todoText)
    })
})