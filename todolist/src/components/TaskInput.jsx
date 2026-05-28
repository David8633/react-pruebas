import { useState } from "react";

export const TaskInput = ({onAddTask}) => {

    const [inputValue,setInputValue] = useState("");

    function handleChange(event){
        setInputValue(event.target.value);
    }

    function addTaskChild(e){
        e.preventDefault();
        if(inputValue!="" && inputValue.length>3){
            onAddTask({taskText:inputValue,
                        isCompleted: false,
                        onToggleComplete: false
            });
        }
        setInputValue("");
    }

    return (
    <>
        <form onSubmit={addTaskChild}>
            <input type="text" className="input" onChange={handleChange} value={inputValue}/>
            <button className="btn btn-primary">add list</button>
        </form>
    </>
    );

}