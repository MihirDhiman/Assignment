const StatCard = ({
  title,
  value,
  type = "default",
}) => {

  const colors = {
    default: "text-[var(--text-primary)]",
    blue: "text-indigo-500",
    red: "text-rose-500",
    green: "text-emerald-500",
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-5
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-indigo-500/30
      "
    >

      <p className="text-sm text-[var(--text-secondary)]">
        {title}
      </p>

      <h2
        className={`
          mt-2
          text-3xl
          font-bold
          ${colors[type]}
        `}
      >
        {value}
      </h2>

    </div>
  );
};

export default StatCard;