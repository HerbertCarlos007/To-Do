import React from "react";
import Card from "./Card";

function List(props) {

    function deleteItem(item) {
        console.log(item)
    }

    return (
        <ul>
            {props.items.map(item => <li  key={item.id}>
                <Card className={item.done ? "done item" : "item"}>
                    {item.text}

                    <div>
                        <button onClick={() => { props.onDone(item) }}> <DoneImg   done={item.done}></DoneImg> </button>
                        <button onClick={() => { props.onItemDeleted(item) }}><img src="./assets/delete.png" alt="delete"></img></button>
                    </div>
                </Card>

            </li>)}
        </ul>

    );
}

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/on.png" alt="done"></img>)
    } else {
        return (<img src="./assets/off.png" alt="undone"></img>)
    }
}

export default List