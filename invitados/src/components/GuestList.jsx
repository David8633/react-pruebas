import { GuestItem } from "./GuestItem";

export const GuestList = ({onTotalPeople,onToggleConfirmed}) =>{
    
    return(<>
        {onTotalPeople.map(person => {
            return <GuestItem key={person.id} {...person} onToggleConfirmed={onToggleConfirmed}/>
        })}
    </>);
}