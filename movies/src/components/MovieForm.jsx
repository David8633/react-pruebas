import { useState } from "react";

export const MovieForm = ({ onAddMovie }) => {

    const [form, setForm] = useState({
        id:Date.now() ,
        title: "",
        director: "",
        year: "",
        genre: "",
        isRecomend: false,
        points: 0
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }


    function addMovie(e) {
        e.preventDefault();
        onAddMovie(form);
        setForm({
            title: "",
            director: "",
            year: "",
            genre: "",
            isRecomend: false,
            points: 0
        })
    }

    return (<div className="container mt-4">

        <form onSubmit={addMovie}>

            <div className="card shadow-sm">
                <div className="card-body">

                    <div className="mb-3">
                        <label className="form-label">Título de la película</label>
                        <input type="text" required className="form-control" onChange={handleChange} name="title" placeholder="Ej: Inception" value={form.title} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Director</label>
                        <input type="text" required className="form-control" onChange={handleChange} name="director" placeholder="Ej: Christopher Nolan" value={form.director} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Año</label>
                        <input type="number" required className="form-control" onChange={handleChange} name="year" placeholder="Ej: 2010" value={form.year} />
                    </div>

                    <div className="mb-3">
                        <label required className="form-label">Género</label>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={handleChange} name="genre" value="accion" checked={form.genre == "accion"} />
                            <label className="form-check-label">Acción</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={handleChange} name="genre" value="comedia" checked={form.genre == "comedia"} />
                            <label className="form-check-label">Comedia</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={handleChange} name="genre" value="terror" checked={form.genre == "terror"} />
                            <label className="form-check-label">Terror</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={handleChange} name="genre" value="drama" checked={form.genre == "drama"} />
                            <label className="form-check-label">Drama</label>
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input  className="form-check-input" type="checkbox" onChange={handleChange} name="isRecomend" id="recomendada" checked={form.isRecomend} />
                        <label className="form-check-label" htmlFor="recomendada">Recomendada</label>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label" >Puntuación</label>
                        <select required className="form-select" value={form.points} onChange={handleChange} name="points">
                            <option value="">Selecciona...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button>
                        add movie
                    </button>

                </div>
            </div>
        </form>
    </div>
    );

}