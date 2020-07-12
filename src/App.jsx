import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';


const App = () => {

    const [inputTask, setInputTask] = useState();
    const [items, setItems] = useState([]);

    function textarea(e) {
        setInputTask(e.target.value);
    }

    function addtask (){
        setItems((oldItems) => {
            return (
                [...oldItems, inputTask]
            );
        });
        setInputTask("");
    }

    function delete_task(id){
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });  
        })
    }

    return(<>
        <div className="container">
            <div className="todoapp">
                <div className="todohead"><p>Todo App</p></div>
                <div className="adding-area">
                    <input type="text" className="textarea" placeholder="Add Task" onChange={textarea} value={inputTask}/>  
                    <button className="add-btn" onClick={addtask} >+</button>
                </div>
                <div className="list">
                    <ol className="ol-list">
                        {
                            items.map((itemval, index) => {
                            return <ToDoList text={itemval} key={index} id={index} onSelect={delete_task}/>;
                        })
                        }
                    </ol>
                </div>
            </div>
        </div>
    </>);
}

export default App;