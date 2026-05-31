export const TripList = ({trips,onToggleButton}) => {
    
    return(<>
        {trips.map(trip => <TripItem  trips={trips}  onToggleButton={onToggleButton}/>)}
    </>);
}