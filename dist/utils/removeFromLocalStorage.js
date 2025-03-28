"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromLocalStorage = void 0;
const removeFromLocalStorage = (itemToRemove) => {
    const updatedItems = items
        .map((item) => {
        if (item.id === itemToRemove.id) {
            if (item.count > 1) {
                return Object.assign(Object.assign({}, item), { count: item.count - 1 });
            }
            return null;
        }
        return item;
    })
        .filter((item) => item !== null);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);
};
exports.removeFromLocalStorage = removeFromLocalStorage;
