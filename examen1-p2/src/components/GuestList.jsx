import { GuestItem } from "./GuestItem";

export const GuestList = ({guests,onToggleButton}) => {
    return(<>
        {guests.map(person =>  {
            console.log(person);
            return <GuestItem key={person.id} person={person} onToggleButton={onToggleButton} /> 
        })}
    </>);
}