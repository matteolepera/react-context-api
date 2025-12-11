import { createContext, useContext } from "react";

const BudgetContext = createContextContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);
    const contextValue = {
        budgetMode,
    }
    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    )
}

export { BudgetContext };