console.log('Hello World');

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

var nums = process.argv.slice(2);
console.log(nums);

for (index in nums) {
    for (var letter = 0; letter < nums[index].length; letter++){
        process.stdout.write(numHash.get(nums[index][letter]));
    }

    // Making sure there is no trailing comma
    if (nums.length-1 > index){
        process.stdout.write(", ");
    }
}