const User = require("../../app/models/User")

describe("Prueba de jest", () =>{
    test("Requerimiento 1: Creacion de User", () =>{
    const user = new User(1, 'Cristian hdz', 'Cris', 'Bio', 'dateCreated', 'lastUpdated')
    expect(user.id).toBe(1)
    expect(user.username).toBe('Cristian hdz')
    })
    test("Requerimiento 2: Fechas en atributos de User", () =>{
        const user = new User(1, 'Cristian hdz', 'Cris', 'Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test("Requerimiento 3: Prueba de getters", () =>{
        const user = new User(1, 'Cristian Hdz', 'Cris', 'Bio')
        expect(user.getId).toBe(1)
        expect(user.getUsername).toBe('Cristian Hdz')
        expect(user.getName).toBe('Cris')
        expect(user.getBio).toBe('Bio')
    })
})