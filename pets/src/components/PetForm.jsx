import { useState } from "react";

export const PetForm = ({ onAddPet }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        namePet: "",
        type: "",
        raze: "",
        age: 0,
        weigth: 0,
        person: "",
        phone: 0,
        isVacunated: false,
        dateVacuna: Date.now('dd-mm-YY'),
        height: 0,
        sexo: "",
        haveMicrochip: false,
        comments: ""
    })

    function handleChange(event) {
        const { name, type, value, checked } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: type == "checkbox" ? checked : value
        }));
    }


    function addPet(e) {
        e.preventDefault();
        if (form.age > 0) {
            onAddPet(form);
            setForm({
                id: Date.now(),
                namePet: "",
                type: "",
                raze: "",
                age: 0,
                weigth: 0,
                person: "",
                phone: 0,
                isVacunated: false,
                dateVacuna: Date.now('dd-mm-YY'),
                height: 0,
                sexo: "",
                haveMicrochip: false,
                comments: ""
            })
        }
    }

    return (<>

        <form onSubmit={addPet}>
            <div className="mb-3">
                <label htmlFor="nombreMascota" className="form-label">Nombre mascota</label>
                <input onChange={handleChange} type="text" required id="nombreMascota" name="namePet" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="especie" className="form-label">Especie</label>
                <input onChange={handleChange} type="text" required id="especie" name="type" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="raza" className="form-label">Raza</label>
                <input onChange={handleChange} type="text" required id="raza" name="raze" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input onChange={handleChange} type="numberequiredr" id="edad" name="age" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="peso" className="form-label">Peso</label>
                <input onChange={handleChange} type="numberequiredr" id="peso" name="weigth" className="form-control" step="0.01" />
            </div>

            <div className="mb-3">
                <label htmlFor="propietario" className="form-label">Nombre propietario</label>
                <input onChange={handleChange} type="text" required id="propietario" name="person" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono propietario</label>
                <input onChange={handleChange} type="tel" required id="telefono" name="phone" className="form-control" />
            </div>

            <div className="form-check">
                <input
                    type="checkbox"
                    irequiredd="vacunada"
                    className="form-check-input"
                    name="isVacunated"
                    onChange={handleChange}
                />
                <label htmlFor="vacunada" className="form-check-label">
                    ¿Está vacunada?
                </label>
            </div>
            {form.isVacunated &&
                <div className="mb-3">
                    <label htmlFor="fechaVacuna" className="form-label">Fecha última vacuna</label>
                    <input onChange={handleChange} type="date" required id="fechaVacuna" name="dateVacuna" className="form-control" />
                </div>
            }

            <div className="mb-3">
                <label htmlFor="tamano" className="form-labelrequired">Tamaño</label>
                <select required id="tamano" className="form-select" name="height">
                    <option value="">Selecciona tamaño</option>
                    <option value="pequeno">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
            </div>

            <div className="mb-3">
                <span className="form-label d-block">Sexo</span>

                <div className="form-check">
                    <input required onChange={handleChange} type="radio" id="sexoMacho" name="sexo" className="form-check-input" value="macho" />
                    <label htmlFor="sexoMacho" className="form-check-label">Macho</label>
                </div>

                <div className="form-check">
                    <input onChange={handleChange} type="radio" id="sexoHembra" name="sexo" className="form-check-input" value="hembra" />
                    <label required htmlFor="sexoHembra" className="form-check-label">Hembra</label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-check">
                    <input required  type="checkbox" id="microchip" name="haveMicrochip" className="form-check-input" onChange={handleChange}/>
                    <label htmlFor="microchip" className="form-check-label">Tiene microchip</label>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="observaciones" className="form-label">Observaciones</label>
                <textarea required onChange={handleChange} id="obserequiredrvaciones" name="comments" className="form-control" rows="3"></textarea>
            </div>
            <button>add</button>
        </form>

    </>);
}