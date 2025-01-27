"use client";

import { createContext, useContext } from "react";
import { useProfessionalCreate } from "../hooks/professional";

const ProfessionalContext = createContext(null);

export const ProfessionalProvider = ({ children, initialData = { professionalList: [] } }) => {
    const professionalCreateState = useProfessionalCreate();

    return (
        <ProfessionalContext.Provider
            value={{
                ...professionalCreateState,
            }}
        >
            {children}
        </ProfessionalContext.Provider>
    );
};

export const useProfessional = () => {
    const context = useContext(ProfessionalContext);
    if (context === null) {
        throw new Error("useProfessional must be used within a ProfessionalProvider");
    }
    return context;
};
