import create from "zustand";

const addEstimateModalStore = create((set) => ({
  active_status: false,
  title: "",
  amount: "",
  client: "",
  sales_agent: "",
  deals_priority: "",
  deals_status: "",
  close_date: new Date(),
  archive_deal: false,
  active_calendar: false,
  active_client_select: false,

  set_active_status: (value) => set((state) => ({ active_status: value })),

  set_title: (value) => set((state) => ({ title: value.target.value })),

  set_amount: (value) => set((state) => ({ amount: value.target.value })),

  set_sales_agent: (value) =>
    set((state) => ({ sales_agent: value.target.value })),

  set_client: (value) => set((state) => ({ client: value.target.value })),

  set_deals_priority: (value) => set((state) => ({ deals_priority: value })),

  set_deals_status: (value) => set((state) => ({ deals_status: value })),

  set_close_date: (value) =>
    set((state) => ({ close_date: value, active_calendar: false })),

  set_archive_deal: (value) => set((state) => ({ archive_deal: value })),

  set_active_calendar: (value) => set((state) => ({ active_calendar: value })),

  set_active_client_select: (value) =>
    set((state) => ({ active_client_select: value })),

  clear_date: () =>
    set((state) => ({
      active_status: false,
      title: "",
      amount: "",
      client: "",
      sales_agent: "",
      deals_priority: "",
      deals_status: "",
      close_date: new Date(),
      archive_deal: false,
      active_calendar: false,
    })),
}));
export default addEstimateModalStore;
