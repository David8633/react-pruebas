import { MovieItem } from "./MovieItem";

export const MovieList = ({movies,onToggleButton}) => {
    return (<>
    {movies.map(movie => 
        <MovieItem key={movie.id} movieDetails={movie} onToggleButton={onToggleButton}/> 
    )}
    
    </>);
}