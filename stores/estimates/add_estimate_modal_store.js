import create from "zustand";

const addEstimateModalStore = create((set) => ({
  active_status: false,

  company: "",
  contact: "",
  reference: "",
  notes: "",
  due_date: new Date(),
  active_calendar: false,

  title: "",
  quantity: "",
  description: "",
  unit_price: "",
  tax_table: "",
  total_table: "",

  subtotal: "",
  tax: "",
  total: "",

  set_active_status: (value) => set((state) => ({ active_status: value })),

  set_notes: (value) => set((state) => ({ notes: value.target.value })),

  set_company: (value) => set((state) => ({ company: value.target.value })),

  set_reference: (value) => set((state) => ({ reference: value.target.value })),

  set_contact: (value) => set((state) => ({ contact: value.target.value })),

  set_due_date: (value) =>
    set((state) => ({ due_date: value, active_calendar: false })),

  set_active_calendar: (value) => set((state) => ({ active_calendar: value })),

  set_active_contact_select: (value) =>
    set((state) => ({ active_contact_select: value })),

  //---------------------------

  set_title: (value) => set((state) => ({ title: value.target.value })),
  set_quantity: (value) => set((state) => ({ quantity: value.target.value })),
  set_description: (value) =>
    set((state) => ({ description: value.target.value })),
  set_unit_price: (value) =>
    set((state) => ({ unit_price: value.target.value })),
  set_tax_table: (value) => set((state) => ({ tax_table: value.target.value })),
  set_total_table: (value) =>
    set((state) => ({ total_table: value.target.value })),

  set_subtotal: (value) => set((state) => ({ subtotal: value.target.value })),
  set_tax: (value) => set((state) => ({ tax: value.target.value })),
  set_total: (value) => set((state) => ({ total: value.target.value })),

  clear_date: () =>
    set((state) => ({
      active_status: false,
      title: "",
      company: "",
      contact: "",
      reference: "",
      due_date: new Date(),
      active_calendar: false,
    })),

  clear_date_table: () =>
    set((state) => ({
      title: "",
      quantity: "",
      description: "",
      unit_price: "",
      tax_table: "",
      total_table: "",
    })),
}));
export default addEstimateModalStore;
