const isObject = (obj) => {
    if (obj === null) {
        return false;
    }

    return typeof obj === 'object' && ['Array', 'Object'].includes(obj.constructor.name);
};

const isArray = Array.isArray;

const cs = (...classes) => {
    return classes
        .filter((c) => !!c)
        .map((c) => {
            if (isArray(c) && c.length === 2) {
                return c[1] ? c[0] : false;
            }
            if (isObject(c))
                return Object.keys(c)
                    .filter((k) => c[k])
                    .join(' ');
            return c;
        })
        .join(' ');
};

export default cs;
