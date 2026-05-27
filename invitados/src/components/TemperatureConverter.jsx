import { useState } from "react";

export const TemperatureConverter = () => {

    const [grados,setGrados] = useState(0.0);

    function handleChange(event){
        setGrados(event.target.value);
    }

    return (<>

        <input className="input" type="text" name="celcius" onChange={handleChange} value={grados}/>
    
        <p>Temperatura en Celsius : {grados | 0}</p>
        <p>TEmperatura en Fahrenheit : {((grados * 9)/5)+32}</p>

    </>);

}