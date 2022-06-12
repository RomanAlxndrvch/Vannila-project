import React from "react";

export const User = () => {

    const deleteUser = () => {
        console.log('User should be deleted')
    }

    const saveUser = () => {
        console.log('Save user')
    }

    const inputHandler = () => {
        console.log('onBlur')
    }

    return (
        <div>
            Dymich
            <input type="text" onBlur={inputHandler}/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}
