import {
    addNewBooksToUser,
    changeLaptop,
    moveUser,
    moveUserToOtherHouse,
    nameHairStyle, removeBook, updateBook, updateCompany, updateCompany2,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
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

test('remove js book', () => {

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
    const newUser = removeBook(user, 'js')
    /*    user = movedUser*/

    expect(user).not.toBe((newUser))
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('react')

})

test('updateCompany', () => {

    let user: UserWithLaptopType & WithCompanyType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minks',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {
                id: 1,
                title: 'Ipam'
            },
            {
                id: 2,
                title: 'It-Inc'
            }
        ]
    }

    const userCopy = updateCompany(user, 1, 'Epam')


    expect(user).not.toBe((userCopy))
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam',)
})

test('updateCompany 2', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Ipam'}, {id: 2, title: 'It-Inc'}],
        'Artem': [{id: 2, title: 'It-Inc'}]
    }

    const copy = updateCompany2(companies, 'Dimych', 1, 'Epam')


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')
})