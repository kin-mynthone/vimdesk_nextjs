import create from "zustand";

const emailStore = create((set) => ({
  active_status: false,

  set_active_status: (value) => set((state) => ({ active_status: value })),
}));
export default emailStore;
