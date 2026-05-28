import { use, useState } from "react";

export const ProfileForm = ({ onUpdateProfile }) => {

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

    function updateProfile(e) {
        e.preventDefault();
        onUpdateProfile(form);
        setForm({
            name: "",
            bio: "",
            themeColor: "",
            showBadges: false,
        });
    }


    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />

            <form onSubmit={updateProfile} className="p-4 border rounded shadow-sm">

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="name" placeholder="Ingresa tu nombre" onChange={handleChange} value={form.name} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Biografía</label>
                    <textarea className="form-control" rows="3" name="bio" placeholder="Escribe tu biografía" onChange={handleChange} value={form.bio} ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Color de Tema</label>
                    <input type="color" className="form-control form-control-color" name="themeColor" value={form.themeColor ? form.themeColor : "#3D7BCE"} onChange={handleChange} />
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="showBadges"
                        name="showBadges"
                        onChange={handleChange}
                        checked={form.showBadges}
                    />
                    <label className="form-check-label" htmlFor="showBadges">
                        Mostrar Medallas
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Guardar</button>
            </form>
        </>
    );
}