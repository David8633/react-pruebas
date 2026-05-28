import './GuestItem.css'
export const GuestItem = ({person,onToggleButton}) => {
    const {id,name,isConfirmed} = person;
    function toggleButton(){
        onToggleButton(id);
    }
    const classes = isConfirmed?"confirmed":'';
    return (<div className={classes}>
    
        <span >{name}</span>
        <button onClick={toggleButton}>{isConfirmed? "Desonfirmar" : "Confirmar"}</button>

    </div>);
}