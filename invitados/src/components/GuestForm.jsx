import { useState } from "react";

export const GuestForm = ({ onAddGuest }) => {

    const [name, setName] = useState("");


    function handleChange(event) {
        setName(event.target.value);
    }

    function addGuest(e) {
        e.preventDefault();
        if (name != "" && name.length > 2) {
            onAddGuest({id:Date.now(),name:name,isConfirmed:false});
            
        }else{
            alert("debe ser la longitud mayor a dos")
        }
        setName("");
    }

    return (<>
        <form onSubmit={addGuest}>
            <input type="text" placeholder="nombre del invitado" onChange={handleChange} value={name} />
            <button className="btn btn-success">add guest</button>
        </form>
    </>);
}