export const PetItem = ({ pet,onToggleButton }) => {

    const { id, namePet, type, raze, age, weigth, person, phone, isVacunated, dateVacuna, haveMicrohip, height, sexo, comments } = pet;

    function toggleButton(){
        onToggleButton(id);
    }

    return (<>


        <div className="card shadow-sm mb-3">
            <div className="card-body">

                <h5 className="card-title mb-3">Datos de la Mascota</h5>

                <p className="card-text"><strong>Nombre mascota:</strong> {namePet}</p>
                <p className="card-text"><strong>Especie:</strong> {type}</p>
                <p className="card-text"><strong>Raza:</strong> {raze}</p>
                <p className="card-text"><strong>Edad:</strong> {age} años</p>
                <p className="card-text"><strong>Peso:</strong> {weigth} kg</p>

                <hr />

                <h6 className="mt-3">Propietario</h6>
                <p className="card-text"><strong>Nombre:</strong> {person}</p>
                <p className="card-text"><strong>Teléfono:</strong> {phone}</p>

               
                {isVacunated?
                    <div>
                        <h6 className="mt-3">Salud</h6>
                        <p className="card-text"><strong>Vacunada</strong> SI</p>
                        <p className="card-text"><strong>Fecha última vacuna:</strong> {dateVacuna}</p>
                        <p className="card-text"><strong>Microchip:</strong>{haveMicrohip ? "SI TIENE MICROSHIP" : "NO TIENE"} </p>
                    </div>
                    :
                    <button onClick={toggleButton}>vacunar</button>
                }



                <hr />

                <h6 className="mt-3">Otros datos</h6>
                <p className="card-text"><strong>Tamaño:</strong> {height}</p>
                <p className="card-text"><strong>Sexo:</strong> {sexo}</p>
                <p className="card-text"><strong>Observaciones:</strong> {comments}</p>

            </div>
        </div >

    </>);
}