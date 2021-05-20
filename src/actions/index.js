export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_IS_TOTAL = "MEMORY_IS_TOTAL";
export const MEMORY_APPLIED = "MEMORY_APPLIED";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memoryIsTotal = () => {
    return({type:MEMORY_IS_TOTAL});
}

export const memoryApplied = () => {
    return({type:MEMORY_APPLIED});
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR});
}
