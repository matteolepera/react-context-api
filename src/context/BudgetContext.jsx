import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);


    const contextValue = {
        budgetMode,
        toggleBudgetMode
    }

    function toggleBudgetMode() {
        return setBudgetMode(!budgetMode);
    }

    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    )
}
function useBudgetMode() {
    const value = useContext(BudgetContext);
    return value;
}

export { BudgetProvider, useBudgetMode };