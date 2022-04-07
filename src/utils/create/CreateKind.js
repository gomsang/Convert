const {parse} = require("csv-parse")
const fs = require("fs")

const parser = parse({delimiter: ","}, function (err, data) {
    console.log(data)
    let convertedData = {
        id: data[0][0],
        name: data[1][0],
        rank_min: 0,
        rank_max: data.length - 2,
        data: []
    }

    for (let i = 1; i < data[0].length; i++) {
        let t = {
            id: data[0][i],
            name: data[1][i],
            data: []
        }
        for (let j = 2; j < data.length; j++) {
            t.data.push({
                rank: data[j][0],
                name: data[j][i]
            })
        }
        convertedData.data.push(t);
    }

    console.log(JSON.stringify(convertedData, null, 4))

    fs.writeFile('export.json', JSON.stringify(convertedData, null, 4), 'utf-8', (err) => {
        if (err)
            console.log(err)
    })
})

fs.createReadStream('./source_create.csv').pipe(parser)