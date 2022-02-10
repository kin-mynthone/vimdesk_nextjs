import Router from "next/router";
import create from "zustand";
const navigationBarStore = create((set) => ({
  active_tab_index: 0,
  active_sales_sub_tab_index: 0,
  set_active_sales_sub_tab_index: (value) =>
    set((state) => ({ active_sales_sub_tab_index: value })),
  set_active_tab_index: (value) =>
    set((state) => ({ active_tab_index: value })),
}));
export default navigationBarStore;
