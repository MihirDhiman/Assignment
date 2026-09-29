import TaskColumn from "./TaskColumn";

const columns = [
  "todo",
  "progress",
  "review",
  "done",
];

const TaskBoard = ({ tasks }) => {

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4

        lg:grid-cols-2
        xl:grid-cols-4
      "
    >

      {columns.map((status) => {

        const columnTasks = tasks.filter(
          (task) => task.status === status
        );

        return (
          <TaskColumn
            key={status}
            status={status}
            tasks={columnTasks}
          />
        );
      })}

    </div>
  );
};

export default TaskBoard;