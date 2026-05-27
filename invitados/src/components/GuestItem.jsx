export const GuestItem = ({id,name,isConfirmed,onToggleConfirmed}) => {

    function toggleConfirmedChild(){
        onToggleConfirmed(id)
    }

    return (<div>
        <span style={{ textDecoration: isConfirmed ? "line-through" : "none" }}>{name}</span>
        <button  onClick={toggleConfirmedChild}>{isConfirmed?"Desconfirmar":"Confimar"}</button>
    </div>);

}