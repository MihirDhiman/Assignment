import {
  LayoutDashboard,
  Users,
  BarChart3,
  Sun,
  Moon,
  X,
} from "lucide-react";

const Sidebar = ({
  open,
  onClose,
  darkMode,
  setDarkMode,
  activePage,
  onNavigate,
}) => {
  return (
    <aside
      className={`
        fixed
        inset-y-0
        left-0
        z-50
        flex
        w-64
        flex-col
        border-r
        border-[var(--border)]
        bg-[var(--sidebar)]
        p-4
        transition-transform
        duration-300

        lg:static
        lg:translate-x-0

        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between px-2 py-3">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-indigo-600
              font-bold
              text-white
            "
          >
            TM
          </div>

          <span className="text-lg font-bold">
            Task Management System
          </span>

        </div>

        <button
          onClick={onClose}
          className="
            rounded-lg
            p-2
            text-[var(--text-secondary)]
            hover:bg-black/5
            lg:hidden
            dark:hover:bg-white/5
          "
        >
          <X size={18} />
        </button>

      </div>


      <nav className="mt-7 space-y-1">

        <NavItem
        icon={LayoutDashboard}
        label="Overview"
        active={activePage === "overview"}
        onClick={() => onNavigate("overview")}
        />

        <NavItem
          icon={Users}
          label="Team"
          active={activePage === "team"}
          onClick={() => onNavigate("team")}
        />

        <NavItem
          icon={BarChart3}
          label="Reports"
        />

      </nav>


      <div className="mt-8">

        <p className="px-3 text-xs font-medium text-[var(--text-secondary)]">
          Projects
        </p>

        <div className="mt-4 space-y-3">

          <Project
            color="bg-pink-400"
            name="Festive Campaign"
          />

          <Project
            color="bg-orange-400"
            name="Inventory Management"
          />

          <Project
            color="bg-indigo-400"
            name="Store Operations"
          />

          <Project
            color="bg-teal-400"
            name="Customer Experience"
          />

        </div>

      </div>


      <div className="mt-auto space-y-3">

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            px-3
            py-2.5
            text-sm
            text-[var(--text-secondary)]
            transition
            hover:text-[var(--text-primary)]
          "
        >

          <div className="flex items-center gap-3">

            {darkMode ? (
              <Moon size={17} />
            ) : (
              <Sun size={17} />
            )}

            <span>
              {darkMode
                ? "Dark mode"
                : "Light mode"}
            </span>

          </div>


          <div
            className={`
              relative
              h-5
              w-9
              rounded-full
              transition
              ${
                darkMode
                  ? "bg-indigo-600"
                  : "bg-slate-300"
              }
            `}
          >

            <div
              className={`
                absolute
                top-0.5
                h-4
                w-4
                rounded-full
                bg-white
                shadow-sm
                transition-transform
                ${
                  darkMode
                    ? "translate-x-4"
                    : "translate-x-0.5"
                }
              `}
            />

          </div>

        </button>


        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-[var(--card)]
            p-3
          "
        >

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-indigo-500
              text-sm
              font-semibold
              text-white
            "
          >
            M
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold">
              Mihir Dhiman
            </p>

            <p className="truncate text-xs text-[var(--text-secondary)]">
              Operations Manager
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
};


const NavItem = ({
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  return (
    <button
    onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        px-3
        py-2.5
        text-sm
        transition

        ${
          active
            ? "bg-indigo-500/10 text-indigo-500"
            : "text-[var(--text-secondary)] hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
        }
      `}
    >
      <Icon size={18} />

      {label}
    </button>
  );
};


const Project = ({
  color,
  name,
}) => {
  return (
    <div className="flex items-center gap-3 px-3">

      <span
        className={`
          h-2.5
          w-2.5
          shrink-0
          rounded-full
          ${color}
        `}
      />

      <span className="truncate text-sm text-[var(--text-secondary)]">
        {name}
      </span>

    </div>
  );
};


export default Sidebar;