import readModuleFile from "../../readFile";

readModuleFile('src/day1/input.txt', function (err: any, input: JSON) {
    const data = input?.toString().split("\n")
    console.log(data) 
});