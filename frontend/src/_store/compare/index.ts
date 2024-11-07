import { CountryProps } from "@/types/countries";
import { create } from "zustand";

export const useCompareStore = create((set) => ({
  selectedCountries: [],
  countryOne: null,
  countryTwo: null,
  selectCountry: (country: CountryProps) =>
    set((state) => {
      if (
        state.selectedCountries.length < 2 &&
        !state.selectedCountries.includes(country)
      ) {
        const updatedCountries = [...state.selectedCountries, country];
        return {
          selectedCountries: updatedCountries,
          countryOne: updatedCountries[0],
          countryTwo: updatedCountries[1],
        };
      }
      alert("Two Countries already have been selected");
      return state;
    }),
    removeCountry: (country: CountryProps)=> set((state)=>{
        const updatedCountries = state.selectedCountries.filter(c => c !== country)
        console.log(updatedCountries)

         return {
           selectedCountries: updatedCountries,
           countryOne: updatedCountries[0] || null,
           countryTwo: updatedCountries[1] || null,
         };
    }),
  clearSelection: () => set({ selectedCountries: [], countryOne: null, countryTwo: null }),
}));
