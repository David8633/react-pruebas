export const ReservationItem = ({booking,onToggleButton}) => {

    const {id,isConfirmed,name,numberPerson,hour,ubicacion, babyChair} = booking;


     function toggleButton(){
        onToggleButton(id)
    }

    return (<>

        <h1>{name}-{numberPerson} personas a las {hour} en {ubicacion}</h1>
        {
            babyChair&& <h3>NECESITRAR LA SILLA DE BB</h3>
        }
        <button onClick={toggleButton}>{isConfirmed? 'DENEGAR':'ACEPTAR'}</button>
    </>);
}