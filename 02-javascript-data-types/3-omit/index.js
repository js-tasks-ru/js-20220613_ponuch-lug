/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export function omit (obj, ...fields) {

    const resultObject = {};
    for (const[key, value] of Object.entries(obj)) {
        if (!fields.includes(key)) {
            resultObject[key] = value;
        }
    }
    // fields.forEach(item => {
    //     if (!Object.hasOwn(obj, item)) {
    //         resultObject[item] = obj[item];
    //     }
    // });
    
    return resultObject;
};

const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};


console.log(omit(obj, 'foo', 'bar'));