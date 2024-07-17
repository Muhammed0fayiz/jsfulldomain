// Target object
const target = {
    message: "Hello, world!"
};

// Handler object with 'get' trap
const handler = {
    get: function(target, prop, receiver) {
        console.log(`Getting property '${prop}'`);
        return prop in target ? target[prop] : `Property '${prop}' does not exist.`;
    }
};

// Creating a proxy
const proxy = new Proxy(target, handler);

// Accessing properties through the proxy
console.log(proxy.message); // Output: Getting property 'message'
                            //         Hello, world!
console.log(proxy.other);   // Output: Getting property 'other'
                            //         Property 'other' does not exist.
