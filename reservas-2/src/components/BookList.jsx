import { BookItem } from "./BookItem";

export const BookList = ({bookings,onToggleButton}) => {
    return(<>
        {bookings.map(booking => {
           return <BookItem bookings={booking} key={booking.id} onToggleButton={onToggleButton} />
        })}
    
    </>);
}