import { CourseItem } from "./CourseIntem"

export const CourseList = (courses) => {
    
    

    return (<>
    
        {courses.map(course => {
            return <CourseItem key={course.id} {...course} />
        })}

    </>);
}