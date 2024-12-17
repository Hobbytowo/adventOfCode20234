import readModuleFile from "../../readFile";

const FILE_PATH = 'src/day1/input.txt'

readModuleFile('src/day1/sample.txt', function (err: any, input: JSON) {
    const data = input?.toString().split("\n")

    let leftArr: number[] = [];
    let rightArr: number[] = [];

    data.forEach(item => {
        if (item) {
            const [l, r] = item.split('   ')
            leftArr.push(parseInt(l))
            rightArr.push(parseInt(r))
        }
    })

    // part 1
    leftArr.sort((a, b) => a-b)
    rightArr.sort((a, b) => a-b)

    const result = leftArr.reduce((sum, currentLeft, index) => {
        return sum + Math.abs(rightArr[index] - currentLeft)
    }, 0)

    console.log({result})
    // e/o part 1

    // part 2
    let repeatsMap: {[key: number]: number} = {}

    for (let i = 0; i < rightArr.length; i++) {
        repeatsMap[rightArr[i]] = repeatsMap[rightArr[i]]
            ? repeatsMap[rightArr[i]] + 1
            : 1
    }

    const result2 = leftArr.reduce((sum, currentLeft) => {
        return sum + (currentLeft * (repeatsMap[currentLeft] || 0))
    }, 0)

    console.log({result2})
    // e/o part 2
});