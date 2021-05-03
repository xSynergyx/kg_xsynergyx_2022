console.log('Hello World');

var nums = process.argv.slice(2);
console.log(nums);

let numHash = new Map([
    ["0", "Zero"],
    ["1", "One"],
    ["2", "Two"],
    ["3", "Three"],
    ["4", "Four"],
    ["5", "Five"],
    ["6", "Six"],
    ["7", "Seven"],
    ["8", "Eight"],
    ["9", "Nine"]
]);

console.log(numHash.get("2"));