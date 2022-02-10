const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      num: "01",
      title: "Randy Wilder",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      company: "meraki.io",
    },
    "task-2": {
      id: "task-2",
      num: "02",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      title: "Ann Crossley",
      company: "TIME 23",
    },
    "task-3": {
      id: "task-3",
      num: "03",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      title: "Jonathan Larry",
      company: "Red Core",
    },
    "task-4": {
      id: "task-4",
      num: "04",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      title: "Raymond Tyler",
      company: "Telstra",
    },
    "task-5": {
      id: "task-5",
      num: "05",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      title: "Paul William",
      company: "Techno Corp",
    },
    "task-6": {
      id: "task-6",
      num: "06",
      due_date: "Due date 29-05-2020",
      created_at: "Created At 01-05-2020",
      title: "Walter Scott",
      company: "OAO Epos",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Qualified to buy",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "On hold",
      taskIds: ["task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "Called on phone",
      taskIds: ["task-4"],
    },
    "column-4": {
      id: "column-4",
      title: "Meeting",
      taskIds: ["task-6"],
    },
    "column-5": {
      id: "column-5",
      title: "Negotiation",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};

export default initialData;
