const ls = {

    read: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },

    write: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
export default ls;