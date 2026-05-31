import { useState } from "react";

export const BookForm = ({ onAddBooking }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        title: "",
        format: "",
        isPrestado: false,
        genre: "",
        isLeido: false
    })

    function addBooking(e) {
        e.preventDefault();

        onAddBooking(form);
        setForm({
            id: 0,
            title: "",
            format: "",
            isPrestado: false,
            genre: "",
            isLeido: false
        })
    }

    function handleChange(event) {
        const { name, checked, type, value } = event.target;
        setForm(prev => ({ ...prev, [name]: type == "checkbox" ? checked : value }))
    }

    return (<>
        <div className="container mt-4">

            <h2 className="mb-4">Añadir Libro</h2>

            <form onSubmit={addBooking} >

                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">
                        Título
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">

                    <label className="form-label d-block">
                        Formato
                    </label>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="fisico"
                            name="format"
                            value="fisico"
                            onChange={handleChange}
                            checked={form.format == "fisico"}

                        />
                        <label
                            className="form-check-label"
                            htmlFor="fisico"
                        >
                            Físico
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="format"
                            id="digital"
                            value="digital"
                            onChange={handleChange}
                            checked={form.format == "digital"}

                        />
                        <label
                            className="form-check-label"
                            htmlFor="digital"
                        >
                            Digital
                        </label>
                    </div>

                </div>

                <div className="mb-3">

                    <label className="form-label d-block">
                        Opciones
                    </label>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="prestado"
                            name="isPrestado"
                            onChange={handleChange}
                            checked={form.isPrestado}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="prestado"
                        >
                            Prestado
                        </label>
                    </div>

                </div>

                <div className="mb-3">
                    <label
                        htmlFor="genero"
                        className="form-label"
                    >
                        Género
                    </label>

                    <select
                        id="genero"
                        className="form-select"
                        name="genre"
                        onChange={handleChange}
                    >
                        <option value="novela">Novela</option>
                        <option value="ciencia_ficcion">Ciencia Ficción</option>
                        <option value="terror">Terror</option>
                        <option value="fantasia"> Fantasía</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Añadir libro
                </button>

            </form>

        </div>
    </>);
}