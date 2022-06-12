import {ManType} from "./Desctucturing";

let props: ManType
beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'React'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('07-destructuring Objects', () => {


    /*    const age = man.age
        const lessons = man.lessons*/
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')


})

test('07-destructuring Arrays', () => {
    const [lesson1, lesson2] = props.lessons
    const [l1, , ls3] = props.lessons
    const [ls1, ...restLessens] = props.lessons

    expect(lesson1).toBe(props.lessons[0])
    expect(lesson2).toBe(props.lessons[1])
    expect(ls3).toBe(props.lessons[2])
    expect(restLessens.length).toBe(2)
    expect(restLessens[1]).toStrictEqual({title: '3', name: 'React'})
})
