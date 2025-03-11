// useStore.js

import { create } from "zustand";


const useStore = create((set) => ({
  language: 'en', // Valor inicial del idioma
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'en' ? 'es' : 'en',
    })),
}));

export default useStore;





