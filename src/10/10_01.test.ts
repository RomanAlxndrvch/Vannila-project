import {
    addNewBooksToUser,
    changeLaptop,
    moveUser,
    moveUserToOtherHouse,
    nameHairStyle, updateBook,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        }
    }
    const awesomeUser = nameHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)

})

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')
    /*    user = movedUser*/

    expect(user).not.toBe((movedUser))
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toStrictEqual(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade user laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const newUser = changeLaptop(user, 'macbook')
    /*    user = movedUser*/

    expect(user).not.toBe((newUser))
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(newUser.laptop.title).toBe('macbook')
    expect(user.laptop.title).toBe('ZenBook')
})


test('upgrade user laptop to macbook and books', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const newUser = moveUserToOtherHouse(user, 99)
    /*    user = movedUser*/

    expect(user).not.toBe((newUser))
    expect(user.address).not.toBe(newUser.address)
    expect(newUser.address.house).toBe(99)
    expect(user.books).toBe(newUser.books)
    expect(user.laptop).toBe(newUser.laptop)
})


test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const newUser = addNewBooksToUser(user, ['TS', 'rest API'])
    /*    user = movedUser*/

    expect(user).not.toBe((newUser))
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[4]).toBe('TS')
    expect(newUser.books[5]).toBe('rest API')
})


test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'js', 'html', 'react']
    }
    const newUser = updateBook(user, 'js', 'ts')
    /*    user = movedUser*/

    expect(user).not.toBe((newUser))
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[1]).toBe('ts')

})