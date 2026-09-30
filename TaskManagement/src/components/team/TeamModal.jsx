import { useState } from "react";
import { Plus, X } from "lucide-react";

const inputClassName = `
  h-11
  w-full
  rounded-xl
  border
  border-[var(--border)]
  bg-[var(--input)]
  px-4
  text-sm
  outline-none
  focus:border-indigo-500
`;

const TeamModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    status: "Available",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const role = formData.role.trim();
    if (!name || !role) return;

    onAdd({
      ...formData,
      id: Date.now(),
      name,
      role,
      workload: "0/0 tasks",
      accent: "bg-indigo-500",
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl animate-in">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold">Add new team member</h2>
            <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
              Add a member to your team
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-[var(--text-secondary)] transition hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <div>
            <label htmlFor="member-name" className="mb-2 block text-sm font-medium">
              Team member name
            </label>
            <input
              id="member-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              autoFocus
              required
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="member-role" className="mb-2 block text-sm font-medium">
              Role
            </label>
            <input
              id="member-role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Product Designer"
              required
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="member-status" className="mb-2 block text-sm font-medium">
              Status
            </label>
            <select
              id="member-status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="Available">Available</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              <Plus size={17} />
              Add team member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamModal;
