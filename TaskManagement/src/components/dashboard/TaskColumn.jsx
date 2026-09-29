import TaskCard from "./TaskCard";

const columnStyles = {
  todo: {
    dot: "bg-slate-400",
    title: "To do",
  },

  progress: {
    dot: "bg-indigo-500",
    title: "In progress",
  },

  review: {
    dot: "bg-amber-500",
    title: "In review",
  },

  done: {
    dot: "bg-emerald-500",
    title: "Done",
  },
};

const TaskColumn = ({ status, tasks }) => {

  const config = columnStyles[status];

  return (
    <div className="min-w-0">

      <div className="mb-3 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span
            className={`
              h-2.5
              w-2.5
              rounded-full
              ${config.dot}
            `}
          />

          <h2 className="text-sm font-semibold  ">
            {config.title}
          </h2>

        </div>

        <span className="text-xs text-slate-500">
          {tasks.length}
        </span>

      </div>

      <div className="space-y-3">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </div>
  );
};

export default TaskColumn;