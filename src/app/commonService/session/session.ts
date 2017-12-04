import * as _ from 'underscore';

let json = {};
export const session = {
    get: function (key: string) {
        if (!_.has(json, key)) {
            const valueStr = sessionStorage.getItem(key) || localStorage.getItem(key);
            if (valueStr) {
                json[key] = JSON.parse(valueStr);
            }
        }
        return json[key];
    },
    put: function (key: string, value: any, isPersistence = false) {
        if (_.isNull(value) || _.isUndefined(value) || _.isNaN(value)) {
            this.remove(key);
            return;
        }
        json[key] = value;
        const valueStr = JSON.stringify(value);
        if (isPersistence) {
            localStorage.setItem(key, valueStr);
        } else {
            sessionStorage.setItem(key, valueStr);
        }
    },
    clear: function (isAlsoClearPersisitent) {
        json = {};
        sessionStorage.clear();
        if (isAlsoClearPersisitent) {
            localStorage.clear();
        }
    },
    remove: function (key) {
        delete json[key];
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
    },
    pop: function (key) {
        const val = this.get(key);
        this.remove(key);
        return val;
    }
}
