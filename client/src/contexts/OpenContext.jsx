import { createContext, useContext, useState } from "react";

const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(null);
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = () => useContext(OpenContext); // Use OpenContext, not OpenProvider
