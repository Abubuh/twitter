const User = require("../../app/models/User")

describe("Prueba de jest", () =>{
    test("Creacion de User", () =>{
    const user = new User(1, 'Cristian hdz', 'Cris', 'Bio', 'dateCreated', 'lastUpdated')
    expect(user.id).toBe(1)
    expect(user.username).toBe('Cristian hdz')
})
})