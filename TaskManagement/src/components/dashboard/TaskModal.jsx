import { useState } from "react";

import {
  X,
  Plus,
} from "lucide-react";

const TaskModal = ({
  onClose,
  onAdd,
}) => {

  const [formData, setFormData] = useState({
    title: "",
    label: "Operations",
    priority: "medium",
    status: "todo",
    dueDate: "",
    assignee: "M",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onAdd(formData);
  };


  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/60
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >

      <div
        className="
          w-full
          max-w-lg
          overflow-hidden
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          shadow-2xl
          animate-in
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            px-5
            py-4
          "
        >

          <div>

            <h2 className="text-lg font-semibold">
              Create new task
            </h2>

            <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
              Add a new task to your workspace
            </p>

          </div>


          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-[var(--text-secondary)]
              transition
              hover:bg-black/5
              hover:text-[var(--text-primary)]
              dark:hover:bg-white/5
            "
          >
            <X size={20} />
          </button>

        </div>


        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-5"
        >

          <div>

            <label className="mb-2 block text-sm font-medium">
              Task title
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Review customer feedback"
              autoFocus
              className="
                h-11
                w-full
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--input)]
                px-4
                text-sm
                outline-none
                transition
                focus:border-indigo-500
              "
            />

          </div>


          <div>

            <label className="mb-2 block text-sm font-medium">
              Department
            </label>

            <select
              name="label"
              value={formData.label}
              onChange={handleChange}
              className="
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
              "
            >

              <option value="Operations">
                Operations
              </option>

              <option value="Marketing">
                Marketing
              </option>

              <option value="Sales">
                Sales
              </option>

              <option value="Inventory">
                Inventory
              </option>

              <option value="Procurement">
                Procurement
              </option>

              <option value="Customer Service">
                Customer Service
              </option>

            </select>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="
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
                "
              >

                <option value="low">
                  Low
                </option>

                <option value="medium">
                  Medium
                </option>

                <option value="high">
                  High
                </option>

              </select>

            </div>


            <div>

              <label className="mb-2 block text-sm font-medium">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
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
                "
              >

                <option value="todo">
                  To do
                </option>

                <option value="progress">
                  In progress
                </option>

                <option value="review">
                  In review
                </option>

                <option value="done">
                  Done
                </option>

              </select>

            </div>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Due date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="
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
                "
              />

            </div>


            <div>

              <label className="mb-2 block text-sm font-medium">
                Assignee
              </label>

              <select
                name="assignee"
                value={formData.assignee}
                onChange={handleChange}
                className="
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
                "
              >

                <option value="M">
                  Mihir
                </option>

                <option value="A">
                  Aman
                </option>

                <option value="D">
                  Divya
                </option>

                <option value="K">
                  Karan
                </option>

                <option value="R">
                  Rahul
                </option>

              </select>

            </div>

          </div>


          <div
            className="
              flex
              flex-col-reverse
              gap-3
              border-t
              border-[var(--border)]
              pt-5
              sm:flex-row
              sm:justify-end
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-[var(--border)]
                px-5
                py-2.5
                text-sm
                font-medium
                text-[var(--text-secondary)]
                transition
                hover:bg-black/5
                hover:text-[var(--text-primary)]
                dark:hover:bg-white/5
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-indigo-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-indigo-500
              "
            >

              <Plus size={17} />

              Create task

            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default TaskModal;