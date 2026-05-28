import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onToggleTask }) => {
    return (
        <>
            {tasks.map((task) => {
                return <TaskItem key={task.taskText} {...task} onToggleTask={onToggleTask}/>
            }
            )}
        </>
    );
}