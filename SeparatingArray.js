const arr = ["ranga", 5, "ramya", -8, 99, "ravi", "keerthi", 44, 48];

const onlyNumbers = arr.filter((number) => typeof number === "number");

const onlyStrings = arr.filter((word) => typeof word === "string");

console.log(onlyNumbers);

console.log(onlyStrings);
