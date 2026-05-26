import { use, useState } from "react";

export const ProfileForm = () => {

    const [form, setForm] = useState({
        name: "",
        bio: "",
        themeColor: "",
        showBadges: false,
    })

    function handleChange(event) {
        const { name, value } = event.target;
        return setForm(prev => ({
            ...prev, [name]: value
        }));
    }

    function onUpdateProfile({updateProfile}){
        console.log(form);
        updateProfile(form);
    }


return (
    <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />

        <form  onSubmit={onUpdateProfile} className="p-4 border rounded shadow-sm">

            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="name" placeholder="Ingresa tu nombre" onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label className="form-label">Biografía</label>
                <textarea className="form-control" rows="3" name="bio" placeholder="Escribe tu biografía" onChange={handleChange}></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label">Color de Tema</label>
                <input type="color" className="form-control form-control-color" name="themeColor" value="#0d6efd" onChange={handleChange}/>
            </div>
            
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="showBadges" name="showBadges" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="showBadges">
                    Mostrar Medallas
                </label>
            </div>

            <button className="btn btn-primary w-100">Guardar</button>
        </form>
    </>
);
}