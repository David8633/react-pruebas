import { useState } from "react";

export const GuestForm = ({onAddGuest}) => {
    
    const [name,setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    function addGuest(e){
        e.preventDefault();
        if(name!="" && name.length>2){
            onAddGuest({id:Date.now(),name:name,isConfirmed: false});
        }
        setName("");
    }
    
    return (<>
    
        <form onSubmit={addGuest}>
            <input type="text" onChange={handleChange} value={name} />
            <button >Añadir</button>
        </form>

    </>);
}