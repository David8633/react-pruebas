import './MovieItem.css';

export const MovieItem = ({ movieDetails, onToggleButton }) => {

    const { id, title, director, year, genre, points, isRecomend } = movieDetails;

    function toggleButton(){
        onToggleButton(id);
    }

    const classes = isRecomend? "recomend" : "";

    return (<div className={classes}>
        <li className="list-group-item d-flex justify-content-between align-items-center">

            <div>
                <h3 className="text-success text-decoration-line-through">
                    {title}
                </h3>

                <p className="mb-1">
                    <strong>Director:</strong> {director}
                </p>

                <p className="mb-1">
                    <strong>Año:</strong> {year}
                </p>

                <p className="mb-1">
                    <strong>Género:</strong> {genre}
                </p>

                {points >= 4 &&
                    <p className="mb-1">
                        <strong>Puntuación:</strong>
                        5 POINTS
                    </p>
                }

                {isRecomend&&
                    <span className="badge bg-success">
                        Recomendada!!
                    </span>
                }
            </div>

            <button className="btn btn-primary" onClick={toggleButton}>
                {isRecomend? "QUITAR RECOMENDACION" : "RECOMENDAR"}
            </button>

        </li>
    </div>);
}