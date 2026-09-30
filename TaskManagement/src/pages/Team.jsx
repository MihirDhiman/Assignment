import { useState } from "react";
import { Plus } from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import TeamModal from "../components/team/TeamModal";

const initialTeamMembers = [
  {
    name: "Jin ",
    role: "Product Lead",
    workload: "6/8 tasks",
    status: "Available",
    accent: "bg-indigo-500",
  },
  {
    name: "Hela",
    role: "Frontend Developer",
    workload: "5/8 tasks",
    status: "Reviewing",
    accent: "bg-teal-500",
  },
  {
    name: "Cheeks ",
    role: "QA Engineer",
    workload: "3/6 tasks",
    status: "Testing",
    accent: "bg-orange-500",
  },
];

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [showTeamModal, setShowTeamModal] = useState(false);

  const handleAddTeamMember = (newMember) => {
    setTeamMembers((members) => [...members, newMember]);
    setShowTeamModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Team overview
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Track your team availability and current workload.
          </p>
        </div>

        <button
          onClick={() => setShowTeamModal(true)}
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
          Add new team
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard title="Active team" value={teamMembers.length} />
        <StatCard title="On track" value={3} type="blue" />
        <StatCard title="Blocked" value={1} type="red" />
        <StatCard title="Sprint health" value="92%" type="green" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id ?? member.name}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${member.accent} text-sm font-semibold text-white`}
              >
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <h2 className="font-semibold text-[var(--text-primary)]">{member.name}</h2>
                <p className="text-sm text-[var(--text-secondary)]">{member.role}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-[var(--background)] p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--text-secondary)]">Workload</span>
                <span className="font-medium text-[var(--text-primary)]">{member.workload}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-2 rounded-full bg-indigo-500"
                  style={{
                    width:
                      member.workload.includes("3/6")
                        ? "50%"
                        : member.workload.includes("5/8")
                          ? "62%"
                          : "75%",
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[var(--text-secondary)]">Status</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showTeamModal && (
        <TeamModal
          onClose={() => setShowTeamModal(false)}
          onAdd={handleAddTeamMember}
        />
      )}
    </div>
  );
};

export default Team;
