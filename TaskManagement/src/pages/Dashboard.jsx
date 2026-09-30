import {
  useMemo,
  useState,
} from "react";

import {
  Menu,
  Plus,
  Search,
  X,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";

import StatCard from "../components/dashboard/StatCard";

import TaskBoard from "../components/dashboard/TaskBoard";

import TaskModal from "../components/dashboard/TaskModal";

import Team from "./Team";

import {
  tasks as initialTasks,
} from "../data/task";


const Dashboard = ({
  darkMode,
  setDarkMode,
  activePage: controlledActivePage,
  onNavigate,
}) => {

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);


  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");


  const [
    priority,
    setPriority,
  ] = useState("all");


  const [
    tasks,
    setTasks,
  ] = useState(initialTasks);


  const [
    showTaskModal,
    setShowTaskModal,
  ] = useState(false);

  const [internalActivePage, setInternalActivePage] = useState("overview");

  const activePage = controlledActivePage ?? internalActivePage;
  const setActivePage = onNavigate ?? setInternalActivePage;

  const filteredTasks = useMemo(() => {
  const searchValue = search.toLowerCase().trim();

  return tasks.filter((task) => {
    const title = task.title?.toLowerCase() || "";
    const label = task.label?.toLowerCase() || "";
    const project = task.project?.toLowerCase() || "";

    const matchesSearch =
      title.includes(searchValue) ||
      label.includes(searchValue) ||
      project.includes(searchValue);

    const matchesPriority =
      priority === "all" ||
      task.priority === priority;

    return matchesSearch && matchesPriority;
  });
}, [tasks, search, priority]);


  const totalTasks =
    tasks.length;


  const inProgressTasks =
    tasks.filter(
      (task) =>
        task.status === "progress"
    ).length;


  const highPriorityTasks =
    tasks.filter(
      (task) =>
        task.priority === "high" &&
        task.status !== "done"
    ).length;


  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "done"
    ).length;


  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks /
            totalTasks) *
            100
        );


  const handleAddTask =
    (newTask) => {

      setTasks(
        (currentTasks) => [
          ...currentTasks,

          {
            ...newTask,
            id: Date.now(),
          },
        ]
      );


      setShowTaskModal(false);
    };


  return (
    <div
      className="
        min-h-screen
        bg-[var(--background)]
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >

      <div className="flex min-h-screen">

        <Sidebar
          open={sidebarOpen}
          onClose={() =>
            setSidebarOpen(false)
          }
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activePage={activePage}
          onNavigate={setActivePage}
        />


        {sidebarOpen && (

          <div
            className="
              fixed
              inset-0
              z-40
              bg-black/60
              lg:hidden
            "
            onClick={() =>
              setSidebarOpen(false)
            }
          />

        )}


        <main className="min-w-0 flex-1">

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--border)]
              p-4
              lg:hidden
            "
          >

            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="
                rounded-lg
                p-2
                text-[var(--text-secondary)]
                hover:bg-black/5
                dark:hover:bg-white/5
              "
            >
              <Menu size={22} />
            </button>


            <span className="font-semibold">
              Task Management System
            </span>


            <button
              onClick={() =>
                setShowTaskModal(true)
              }
              className="
                rounded-lg
                bg-indigo-600
                p-2
                text-white
              "
            >
              <Plus size={18} />
            </button>

          </div>


          <div
  className="
    mx-auto
    max-w-[1600px]
    p-4
    sm:p-6
    lg:p-8
  "
>
  {activePage === "overview" && (
    <>
      <div
        className="
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Good morning, Mihir
          </h1>

          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {totalTasks - completedTasks} tasks still open this week.
          </p>
        </div>

        <button
          onClick={() => setShowTaskModal(true)}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-indigo-500
          "
        >
          <Plus size={17} />
          New task
        </button>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          title="Total tasks"
          value={totalTasks}
        />

        <StatCard
          title="In progress"
          value={inProgressTasks}
          type="blue"
        />

        <StatCard
          title="High priority open"
          value={highPriorityTasks}
          type="red"
        />

        <StatCard
          title="Completed"
          value={`${completionPercentage}%`}
          type="green"
        />
      </div>

      <div
        className="
          mt-6
          flex
          flex-col
          gap-3
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        <div className="flex w-full gap-2 xl:max-w-xl">

  <div className="relative flex-1">

    <Search
      size={18}
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-[var(--text-secondary)]
      "
    />

    <input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          setSearch(searchInput);
        }
      }}
      placeholder="Search tasks, projects or departments..."
      className="
        h-11
        w-full
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--input)]
        pl-11
        pr-11
        text-sm
        text-[var(--text-primary)]
        outline-none
        placeholder:text-[var(--text-secondary)]
        focus:border-indigo-500
      "
    />

    {searchInput && (
      <button
        type="button"
        onClick={() => {
          setSearchInput("");
          setSearch("");
        }}
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          rounded-md
          p-1
          text-[var(--text-secondary)]
          transition
          hover:bg-black/5
          hover:text-[var(--text-primary)]
          dark:hover:bg-white/10
        "
        aria-label="Clear search"
      >
        <X size={17} />
      </button>
    )}

  </div>

  <button
    type="button"
    onClick={() => setSearch(searchInput)}
    className="
      flex
      h-11
      items-center
      gap-2
      rounded-xl
      bg-indigo-600
      px-4
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-indigo-500
    "
  >
    <Search size={17} />
    Search
  </button>

</div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            ["all", "All"],
            ["high", "High"],
            ["medium", "Medium"],
            ["low", "Low"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPriority(value)}
              className={`
                whitespace-nowrap
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                transition

                ${
                  priority === value
                    ? "bg-indigo-600 text-white"
                    : "border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <TaskBoard tasks={filteredTasks} />
      </div>
    </>
  )}

  {activePage === "team" && (
    <Team />
  )}

</div>

        </main>

      </div>


      {showTaskModal && (

        <TaskModal
          onClose={() =>
            setShowTaskModal(
              false
            )
          }
          onAdd={
            handleAddTask
          }
        />

      )}

    </div>
  );
};


export default Dashboard;