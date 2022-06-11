import {addSkill, doesStudentLiveInUkraine, makeActive, StudentType} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Petya',
        isActive: false,
        country: 'Ukraine',
        technologies: [{id: 1, title: 'JS'}, {id: 2, title: 'CSS'}, {id: 3, title: 'HTML'}]
    }
})

test('new skill should be added', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'React')

    expect(student.technologies[3].title).toBe('React')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should made active', () => {
    makeActive(student, true)

    expect(student.isActive).toBe(true)
})

test('Doest student live in Ukraine', () => {
    const res1 = doesStudentLiveInUkraine(student, 'Ukraine')
    const res2 = doesStudentLiveInUkraine(student, 'Belarus')

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})