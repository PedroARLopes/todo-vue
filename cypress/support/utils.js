export const getTodoItems = () => cy.get('.todo-item-row')

export const enterTodo = (text = 'todo item') => {
    cy.get('.todo-input')
        .type(`${text}{enter}`)
}