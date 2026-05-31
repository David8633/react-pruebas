import { PetItem } from "./PetItem";

export const PetList = ({pets,onToggleButton}) => {
    return (<>
        {
            pets.map(pet => {
                return <PetItem key={pet.id} pet={pet} onToggleButton={onToggleButton}/>
            })
        }
    </>);
}