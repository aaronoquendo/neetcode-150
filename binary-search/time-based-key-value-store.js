class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        this.store.get(key).push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.store.get(key) || [];

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (values[middle].timestamp <= timestamp) {
                result = values[middle].value;
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    }
}
