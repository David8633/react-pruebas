import { use, useState } from "react";

export const TripForm = ({ onAddTrip }) => {

    const [form, setForm] = useState({
        destination: "",
        country: "",
        checkIn: "",
        checkOut: "",
        people: 1,
        dinero: 0,
        trip: "",
        lodging: "",
        category: "",
        comments: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }


    function addTrip(e) {
        e.preventDefault()
        onAddTrip(form);
        setForm({
            destination: "",
            country: "",
            checkIn: "",
            checkOut: "",
            people: 1,
            dinero: 0,
            trip: "",
            lodging: "",
            category: "",
            comments: ""
        })
    }

    return (<>
        <form onSubmit={addTrip} className="travel-form">

            <div className="form-group">
                <label htmlFor="destino" className="form-label">Destino</label>
                <input required onChange={handleChange} name="destination" type="text" id="destino" className="form-input" />
            </div>

            <div className="form-group">
                <label htmlFor="pais" className="form-label">País</label>
                <input required onChange={handleChange} name="country" type="text" id="pais" className="form-input" />
            </div>

            <div className="form-group">
                <label htmlFor="fechaSalida" className="form-label">Fecha salida</label>
                <input required onChange={handleChange} name="checkIn" type="date" id="fechaSalida" className="form-input" />
            </div>

            <div className="form-group">
                <label fohtmlFor="fechaRegreso" className="form-label">Fecha regreso</label>
                <input required onChange={handleChange} name="checkOut" type="date" id="fechaRegreso" className="form-input" />
            </div>

            <div className="form-group">
                <label for="viajeros" className="form-label">Número de viajeros</label>
                <input required onChange={handleChange} name="people" type="number" id="viajeros" className="form-input" />
            </div>

            <div className="form-group">
                <label htmlFor="presupuesto" className="form-label">Presupuesto</label>
                <input required onChange={handleChange} name="dinero" type="number" id="presupuesto" className="form-input" />
            </div>

            <div className="form-group">
                <label htmlFor="transporte" className="form-label">Transporte</label>
                <select id="transporte" required onChange={handleChange} value={form.trip} className="form-select">
                    <option value="avion">Avión</option>
                    <option value="tren">Tren</option>
                    <option value="barco">Barco</option>
                    <option value="coche">Coche</option>
                </select>
            </div>

            <div className="form-group">
                <label fohtmlFor="alojamiento" className="form-label">Alojamiento</label>
                <select id="alojamiento" required value={form.lodging} className="form-select">
                    <option value="hotel">Hotel</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="camping">Camping</option>
                </select>
            </div>

            <div className="form-group check-group">
                <label className="form-check">
                    <input name="isAllInclude" onChange={handleChange} type="checkbox" id="todoIncluido" className="form-checkbox" />
                    <span>Todo incluido</span>
                </label>

                <label className="form-check">
                    <input onChange={handleChange} type="checkbox" name="isSecurityTrip" id="seguroViaje" className="form-checkbox" />
                    <span>Seguro de viaje</span>
                </label>
            </div>

            <div className="form-group radio-group">
                <label className="form-radio">
                    <input type="radio" name="category" id="eco" checked={form.category == "economico"} value="economico" />
                    <span>Económico</span>
                </label>

                <label className="form-radio">
                    <input type="radio" name="category" id="normal" checked={form.category == "normal"} value="normal" />
                    <span>Normal</span>
                </label>

                <label className="form-radio">
                    <input type="radio" name="category" id="premium" checked={form.category == "premium"} value="premium" />
                    <span>Premium</span>
                </label>
            </div>

            <div className="form-group">
                <label for="observaciones" className="form-label">Observaciones</label>
                <textarea id="observaciones" name="comments" onChange={handleChange} className="form-textarea"></textarea>
            </div>

        </form>

    </>);
}