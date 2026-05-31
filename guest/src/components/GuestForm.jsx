import { useState } from "react"

export const GuestForm = ({ onAddGuest }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        isConfirmed: false
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setForm(prev => ({ ...prev, [name]: type == "checkbox" ? checked : value }))
    }

    function addGuest(e) {
        e.preventDefault();
        if (form.name != "" || form.name.length > 2) {
            onAddGuest(form);
            setForm({
                id: 0,
                name: "",
                isConfirmed: false
            })
        }
    }

    return (<>
        <section className="add-guest">
            <h2>Añadir Invitado</h2>

            <form onSubmit={addGuest} className="guest-form">
                <input type="text" placeholder="Nombre del invitado" name="name" value={form.name} onChange={handleChange} />
                <label>
                    <input type="checkbox" name="isConfirmed" checked={form.isConfirmed} onChange={handleChange} />
                    Confirmado
                </label>
                <button >Añadir</button>
            </form>
        </section>


    </>)

}