export const TripItem = ({trips,onToggleButton}) => {

    const {id,destination,country,checkin,chekout,people,dinero,}

    return (<>

        <div class="form-group">
            <label for="destino" class="form-label">Destino</label>
            <input id="destino" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="pais" class="form-label">País</label>
            <input id="pais" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="fechas" class="form-label">Fechas</label>
            <input id="fechas" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="viajeros" class="form-label">Viajeros</label>
            <input id="viajeros" class="form-input" type="number" />
        </div>

        <div class="form-group">
            <label for="presupuesto" class="form-label">Presupuesto</label>
            <input id="presupuesto" class="form-input" type="number" />
        </div>

        <div class="form-group">
            <label for="transporte" class="form-label">Transporte</label>
            <input id="transporte" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="alojamiento" class="form-label">Alojamiento</label>
            <input id="alojamiento" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="tipoViaje" class="form-label">Tipo de viaje</label>
            <input id="tipoViaje" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="seguro" class="form-label">¡Tiene seguro!</label>
            <input id="seguro" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="todoIncluido" class="form-label">¿Es todo incluido?</label>
            <input id="todoIncluido" class="form-input" type="text" />
        </div>

        <div class="form-group">
            <label for="observaciones" class="form-label">Observaciones</label>
            <textarea id="observaciones" class="form-textarea"></textarea>
        </div>


    </>);
}