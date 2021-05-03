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

// Removing the first two command line args (node and script path)
var nums = process.argv.slice(2);

for (index in nums) {
    for (var digit = 0; digit < nums[index].length; digit++){
        process.stdout.write(numHash.get(nums[index][digit]));
    }

    // Making sure there is no trailing comma
    if (nums.length-1 > index){
        process.stdout.write(",");
    }
}