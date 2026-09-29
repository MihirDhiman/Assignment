import {
  CalendarDays,
} from "lucide-react";


const priorityStyles = {
  high: "bg-rose-500/10 text-rose-500",
  medium: "bg-amber-500/10 text-amber-500",
  low: "bg-emerald-500/10 text-emerald-500",
};


const avatarStyles = {
  A: "bg-teal-500",
  D: "bg-pink-500",
  M: "bg-indigo-500",
  K: "bg-orange-500",
  R: "bg-cyan-500",
};


const formatDate = (date) => {
  if (!date) {
    return "No date";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
    }
  );
};


const TaskCard = ({
  task,
}) => {

  return (
    <div
      className="
        group
        cursor-pointer
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-indigo-500/30
        hover:bg-[var(--card-hover)]
      "
    >

      <div className="flex items-center justify-between">

        <span
          className={`
            rounded-md
            px-2
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wide
            ${priorityStyles[task.priority]}
          `}
        >
          {task.priority}
        </span>

      </div>


      <h3
        className="
          mt-3
          text-sm
          font-semibold
          leading-5
        "
      >
        {task.title}
      </h3>


      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        {task.label}
      </p>


      <div
        className="
          mt-5
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            items-center
            gap-1.5
            text-xs
            text-[var(--text-secondary)]
          "
        >

          <CalendarDays size={14} />

          <span>
            {formatDate(task.dueDate)}
          </span>

        </div>


        <div
          className={`
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-xs
            font-semibold
            text-white
            ${avatarStyles[task.assignee] || "bg-slate-500"}
          `}
        >
          {task.assignee}
        </div>

      </div>

    </div>
  );
};


export default TaskCard;