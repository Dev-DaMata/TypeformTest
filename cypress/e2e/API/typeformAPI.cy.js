const API_URL = "https://api.typeform.com/"
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

describe('url request', () => {
  it('Teste de requisição de api 200 OK', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}me`,
      headers: { authorization }
    }).should(({ status, body }) => {
      const { alias, email, language } = body

      expect(status).to.eq(200)
      expect(alias).to.eq('Guilherme Cordeiro')
      expect(email).to.eq(Cypress.env('username'))
      expect(language).to.eq('en')
    })
  });

  it('Teste de requisição de api com o alias errado',()=>{
    cy.request({
      method: 'GET',
      url: `${API_URL}me`,
      headers: {authorization}
    }).should(({ status, body}) =>{
      const {alias, email, language} = body

      expect(status).to.eq(200)
      expect(alias).to.eq('alis errado')
      expect(email).to.eq(Cypress.env('username'))
      expect(language).to.eq('en')
    })
  })
});