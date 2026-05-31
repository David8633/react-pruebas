import { useState } from "react";

export const ReservationForm = ({ onAddBookings }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        numberPerson: 0,
        ubicacion:"",
        babyChair: false,
        hour: "",
        isConfirmed: false
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function addBooking(e) {
        e.preventDefault();
        if (form.name != "" && form.numberPerson > 0) {
            onAddBookings(form);
            setForm({
                id: 0,
                name: "",
                numberPerson: 0,
                ubicacion:"",
                babyChair: false,
                hour: 0,
                isConfirmed: false
            })
        }
    }

    return (<>

        <form onSubmit={addBooking} className="container p-4 border rounded shadow-sm bg-light" style={{ maxWidth: '500px' }}>
            <h3 className="mb-4 text-center text-primary">Nueva Reserva</h3>

            {/* Campo: Nombre */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Nombre</label>
                <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Ej. Juan Pérez"
                    name="name"
                    id="name"
                    required
                    value={form.name}
                />
            </div>

            {/* Campo: Número de personas */}
            <div className="mb-3">
                <label htmlFor="numberPerson" className="form-label fw-bold">Número de personas</label>
                <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="Cantidad"
                    required
                    value={form.numberPerson}
                    name="numberPerson"
                    id="numberPerson"
                    min="1"
                />
            </div>

            {/* Campo: Ubicación (Radio Buttons) */}
            <div className="mb-3">
                <label className="form-label d-block fw-bold">Ubicación</label>

                <div className="form-check form-check-inline">
                    <input
                        onChange={handleChange}
                        type="radio"
                        className="form-check-input"
                        name="ubicacion" // Mismo nombre para ambos para que actúen como grupo
                        id="interior"
                        value="interior"
                        checked={form.ubicacion === 'interior'}
                    />
                    <label className="form-check-label" htmlFor="interior">Interior</label>
                </div>

                <div className="form-check form-check-inline">
                    <input
                        onChange={handleChange}
                        type="radio"
                        className="form-check-input"
                        name="ubicacion"
                        id="exterior"
                        value="exterior"
                        checked={form.ubicacion === 'exterior'}
                    />
                    <label className="form-check-label" htmlFor="exterior">Exterior</label>
                </div>
            </div>

            <input type="time" name="hour" id="hour" onChange={handleChange} value={form.hour} />

            {/* Campo: Silla de bebé (Checkbox) */}
            <div className="mb-4 form-check">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    className="form-check-input"
                    name="babyChair"
                    id="babychair"
                    checked={form.babyChair}
                />
                <label className="form-check-label fw-semibold" htmlFor="babychair">
                    ¿Necesita silla para bebé?
                </label>
            </div>

            {/* Botón de envío */}
            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                Confirmar Reserva
            </button>
        </form>

    </>);
}