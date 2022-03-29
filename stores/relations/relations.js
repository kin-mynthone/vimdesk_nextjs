import create from "zustand";

const relations = create((set) => ({
  active_details: false,

  set_active_details: (value) => set((state) => ({ active_details: value })),
}));
export default relations;
