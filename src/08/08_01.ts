const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232323': {id: 3232323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
const user = {id: 100500, name: 'Igor'}

// Find user
console.log(users[1]) // here we can find user with his key. Key is same as ID. Ez way. 1 in console log taking from users obj keys

// Add user
users[user.id] = user

// Delete user
delete users[user.id]

//Update user
users[user.id].name = 'Viktor'


//-------------------------------------------------------------------------------------
export let ussersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232323, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
// Find user
console.log(ussersArray.find(e => e.id === 1)) // here we need loop over  whole array and find right user. Hard way

// Add user
ussersArray.push(user) //Mutable way
const usersCopy = [...ussersArray, user] //Immutable way

// Delete user
ussersArray = ussersArray.filter((el) => el.id !== user.id)

//Update user (Not for this lecture)