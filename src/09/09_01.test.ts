import {cursorTo} from "readline";

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

function incriseAge(u: UserType) {
    u.age++
}

test('reference type  test', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    incriseAge(user)

    expect(user.age).toBe(33)
})

test('array reference test', () => {
    const users: Array<UserType> = [
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        }]
    const admins = users
    //admins.push({name: 'Bandugan', age: 10})


    expect(users[2]).toEqual({name: 'Bandugan', age: 10})
})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount
    adminsCount = 101

    expect(users[2]).toEqual({name: 'Bandugan', age: 10})
})

test('reference type test object', () => {

    const address = {
        title: 'Minsk City'
    }
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let addr = user.address
    const user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')
})

test('reference type test array', () => {

    const address = {
        title: 'Minsk City'
    }
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let addr = user.address
    const user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(user.name).toBe('Dmitry')
})

test('sort array methods', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)
    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}