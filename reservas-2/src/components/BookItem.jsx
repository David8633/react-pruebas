import './BookItem.css'

export const BookItem = ({bookings,onToggleButton}) => {
    
    const {id,title,format,genre,isPrestado,isLeido} = bookings;
    
    const clases = isLeido ? "leido" : "";

    function toggleButton(){
        onToggleButton(id)
    }

    return (<>
    
    <div className={clases}>

    <div className="card-body">

        <h5 className="card-title">
            {title}
        </h5>

        <p className="card-text">
            <strong>Formato:</strong> {format}
        </p>

        <p className="card-text">
            <strong>Género:</strong> {genre}
        </p>

        
        {isPrestado&&
        <p className="card-text">
            <strong>Prestado:</strong> SI ES PRESTADO
        </p>
        }

        <button onClick={toggleButton} className="btn btn-success">
            {isLeido?"NO LEIDO":"LEIDO"}
        </button>

    </div>

</div>
    
    </>);
}