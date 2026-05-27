export const TaskItem = ({ taskText, isCompleted, onToggleTask }) => {

    function toggleTaskChild(text){
        onToggleTask(text);
    }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={()=>toggleTaskChild(taskText)}
        className="checkbox"
      />

      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {taskText}
      </span>
    </div>
  );
};
