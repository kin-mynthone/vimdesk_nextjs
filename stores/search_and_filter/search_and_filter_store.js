import create from "zustand";

const SearchAndFilterStore = create((set) => ({
  search_input: "",
  number_of_filters: 0,

  set_search_input: (value) =>
    set((state) => ({ search_input: value.target.value })),
  set_number_of_filters: (value) =>
    set((state) => ({ number_of_filterssearch_input: value.target.value })),
}));
export default SearchAndFilterStore;
