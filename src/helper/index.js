/**
* Deep merge objeect
*
* @returns {object}
*/
export var deepMerge = (target, source) => {
    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }

    Object.assign(target || {}, source);

    return target;
};
