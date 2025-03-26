describe('prueba simple cypress todo', () => {
  beforeEach(() =>{
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it("Muestra el nombre vacio", () => {
    cy.get('.new-todo').should('have.text', '')
  })

  it("Agrega un nuevo todo", () => {
    const newItem = 'Feed the cat'
    cy.get('.new-todo').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 1)
      .last()
      .should('have.text', newItem)
  })

  it("Marca un todo como completado", () => {
    agregatodo()
    cy.get('.toggle').check()
  })

  it("Desmarca un todo", () => {
    agregatodo()
    cy.get('.toggle').check()
    cy.get('.toggle').uncheck().should('not.be.checked')
  })
})

function agregatodo(){
  const newItem = 'Feed the cat'
  cy.get('.new-todo').type(`${newItem}{enter}`)
}