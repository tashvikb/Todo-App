import React from 'react';

function ToDoList(props){

    function delete_task(){
        
    }

    return(
        <li>
            <button onClick={() => {
                props.onSelect(props.id);
            }}>X</button>
            {props.text}
        </li>
    );
}

export default ToDoList;