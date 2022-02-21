import Router from "next/router";
import create from "zustand";
import MonthsList from "../../constants/data/month-list";

const remindersStore = create((set) => ({
  selected_month_date: "",
  selected_month_index: 0,
  selected_month: "none",
  selected_year: "none",
  event_title: "",
  event_desc: "",

  active_calendar_view: "month",
  set_event_title: (value) => set((state) => ({ event_title: value })),
  set_event_desc: (value) => set((state) => ({ event_desc: value })),

  set_selected_year: (value) => set((state) => ({ selected_year: value })),

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
