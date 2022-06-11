export const sum = (a: number, b: number) => {
    return a + b;
}
export type TechnologiesType = {
    id: number,
    title: string
}

export type StudentType = {
    id: number,
    name: string,
    isActive: boolean
    country: string
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: 'Petya',
    isActive: false,
    country: 'Ukraine',
    technologies: [{id: 1, title: 'JS'}, {id: 2, title: 'CSS'}, {id: 3, title: 'HTML'}]
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeActive = (stud: StudentType, isActive: boolean) => {
    stud.isActive = isActive
}

export const doesStudentLiveInUkraine = (st: StudentType, country: string) => {
    return st.country === country
}