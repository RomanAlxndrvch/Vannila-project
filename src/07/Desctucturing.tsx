import React, {useState} from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string, name?: string }>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string,
    man: ManType,
    food: Array<string>,
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    const [message, setMessage] = useState<string>('Hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <h2>{man.name}</h2>

            <hr/>
            <h2>{props.car.model}</h2>


        </div>
    )
}