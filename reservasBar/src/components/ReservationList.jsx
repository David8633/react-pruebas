import { ReservationItem } from "./ReservationItem";

export const ReservationList = ({allBookings,onToggleButton}) => {
    
    
    return (<>
    
        {allBookings.map(booking => {
            return <ReservationItem key={booking.id} booking={booking} onToggleButton={onToggleButton} />})}

    </>);
}