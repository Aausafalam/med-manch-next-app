"use client";

import { createContext, useContext } from "react";
import { useHiringCreateJob } from "../hooks/hiring";

const HiringContext = createContext(null);

export const HiringProvider = ({ children, initialData = { hiringList: [] } }) => {
    const hiringCreateJobState = useHiringCreateJob();

    return (
        <HiringContext.Provider
            value={{
                ...hiringCreateJobState,
            }}
        >
            {children}
        </HiringContext.Provider>
    );
};

export const useHiring = () => {
    const context = useContext(HiringContext);
    if (context === null) {
        throw new Error("useHiring must be used within a HiringProvider");
    }
    return context;
};
