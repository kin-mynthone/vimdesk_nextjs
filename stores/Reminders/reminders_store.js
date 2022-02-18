import Router from "next/router";
import create from "zustand";
import MonthsList from "../../constants/data/month-list";

const remindersStore = create((set) => ({
  selected_month_date: "",
  selected_month_index: 0,
  selected_month: "none",
  active_calendar_view: "month",

  set_active_calendar_view: (value) =>
    set((state) => ({ active_calendar_view: value })),

  set_selected_month_date: (value) =>
    set((state) => ({ selected_month_date: value })),

  set_selected_month_index: (value) =>
    set((state) => ({
      selected_month_index: value,
      selected_month: MonthsList[value].title,
    })),
}));
export default remindersStore;
