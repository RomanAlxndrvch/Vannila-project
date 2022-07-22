export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompanyType = {
    companies: Array<{ id: number, title: string }>
}


export function nameHairStyle(u: UserType, power: number) {
    const copy: UserType = {
        ...u,
        hair: u.hair / 2,
    }
    //copy.hair = copy.hair / power
    return copy
}

export const moveUser = (user: UserWithLaptopType, newCity: string): UserWithLaptopType => {
    return {
        ...user,
        address: {
            ...user.address,
            city: newCity
        }
    }

}

export const moveUserToOtherHouse = (user: UserWithLaptopType & UserWithBooksType, newHouse: number): UserWithLaptopType & UserWithBooksType => {
    return {
        ...user,
        address: {
            ...user.address,
            house: newHouse
        }
    }

}

export const changeLaptop = (user: UserWithLaptopType, newLaptop: string): UserWithLaptopType => {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: newLaptop
        }
    }

}

export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, books: Array<string>): UserWithLaptopType & UserWithBooksType => {
    return {
        ...user,
        books: [...user.books, ...books]
    }

}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    const newBooks = user.books.map((el) => el === oldBook ? newBook : el)
    return {
        ...user,
        books: [...newBooks]
    }
}

export const removeBook = (user: UserWithLaptopType & UserWithBooksType, removeBook: string,) => {
    const newBooks = user.books.filter((el) => el !== removeBook)
    return {
        ...user,
        books: [...newBooks]
    }
}

export const updateCompany = (user: UserWithLaptopType & WithCompanyType, id: number, updateCompany: string) => {
    const updatedCompany = user.companies.map(el => el.id === 1 ? {...el, title: updateCompany} : el)
    return {
        ...user,
        companies: [...updatedCompany]
    }
}

export const updateCompany2 = (companies: { [key: string]: Array<{ id: number, title: string }> },
                               userName: string,
                               companyId: number,
                               newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId ? {...el, title: newTitle} : el)


    return companyCopy
}