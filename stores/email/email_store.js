import create from "zustand";

const emailStore = create((set) => ({
  active_status: false,
  receiver: "",
  subject: "",
  content: "",

  set_active_status: (value) => set((state) => ({ active_status: value })),
  set_receiver: (value) => set((state) => ({ receiver: value.target.value })),

  set_subject: (value) => set((state) => ({ subject: value.target.value })),

  set_content: (value) => set((state) => ({ content: value.target.value })),
}));
export default emailStore;
