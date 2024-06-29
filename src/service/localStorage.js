export const useLocalStorage = (key) => {
    
    const setValue = (itemToAdd) => {
        try {
            const value = window.localStorage.getItem(key);
            if (value) {
                const array = JSON.parse(value);
                const updatedArray = [ itemToAdd, ...array,];
                window.localStorage.setItem(key, JSON.stringify(updatedArray));
            }else{
                
                window.localStorage.setItem(key, JSON.stringify([itemToAdd]));
            }
            

        } catch (error) {
            console.log(error);
        }
    };

    const getValue = () => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : undefined;
        } catch (error) {
            console.log(error);
        }
    };

    const removeValue = (itemToRemove) => {
        try {
            const value = window.localStorage.getItem(key);
            if (value) {
                const array = JSON.parse(value);
                const updatedArray = array.filter(item => item !== itemToRemove);
                window.localStorage.setItem(key, JSON.stringify(updatedArray));
            }
        } catch (error) {
            console.log(error);
        }
    };
    return {
        setValue,
        getValue,
        removeValue
    };
}