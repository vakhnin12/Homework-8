const company = {
    organization: null,
    sales: {
        online: {
            odessa: [
                {
                    name: 'Jane',
                    salary: 1000
                },
                {
                    name: 'Jane',
                    salary: 1000
                }
            ],
            kyev: [
                {
                    name: 'Jane',
                    salary: 1000
                },
                {
                    name: 'Jane',
                    salary: 1000
                }
            ]
        },
        offline: [
            {
                name: 'Jane',
                salary: 1000
            },
            {
                name: 'Jane',
                salary: 1000
            }
        ]
    },
    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
};

function Copy(obj) {
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
        const result = {};
        for (const key in obj) {
            const value = obj[key];
            const copiedObject = Copy(value);
            result[key] = copiedObject;
        }
        return result;
    } else if (Array.isArray(obj)) {
        const result = [];
        for (const value of obj) {
            const copiedArray = Copy(value);
            result.push(copiedArray);
        }
        return result;
    } else {
        return obj;
    }
}

const company2 = Copy(company);


console.log(company);
console.log(company2);

console.log(company.sales === company2.sales)


function sum(value) {
    let r = value;
    sum = function () {
        let arg = arguments[0] ? arguments[0] : 0;
        return r += arg;
    };
    return sum();
}
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
