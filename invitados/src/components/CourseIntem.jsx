export const CourseItem = ({id,title,hours,isCompleted}) => {
    
    
    
    return (<>
    
        <p><strong>Titulo:</strong>{title} - {hours} horas [{isCompleted?"COMPLETADO":"NO COMPLETADO"}]</p>
    
    </>);
}