/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export function pick (obj, ...fields)  {
    const resultObject = {};
    fields.forEach(item => {
        if (Object.hasOwn(obj, item)) {
            resultObject[item] = obj[item];
        }
    });
    
    return resultObject;
};

const obj = {foo: 'foo', bar: 'bar'};


console.log(pick(obj, 'foo'));
