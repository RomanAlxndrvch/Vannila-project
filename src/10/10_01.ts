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
    /*  const newBooks = user.books.map((el, index) => {
          return el === oldBook ? [...user.books, user.books[index] = newBook] : [...user.books]
      })
  */
    const index = user.books.find(el => el === oldBook)

    return {
        ...user,
        books: [...user.books]
    }
}

