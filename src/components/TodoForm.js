import React, { useState } from "react";
import '../TodoForm.css'

function TodoForm(props) {

    const [text, setText] = useState('')

    function handleChange(e) {
        let inputValue = e.target.value
        setText(inputValue)
    }


    function addItem(e) {
        e.preventDefault()
        if (text) {
            props.onAddItem(text)
            setText('')
        }
    }


    return (
        <form>
            <input onChange={handleChange} value={text} type='text'></input>
            <button className="button" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm
  