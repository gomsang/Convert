import shoes from "./sources/kind_shoes.json";
import clothes from "./sources/kind_clothes.json";

const Data = [shoes, clothes]

const findRank = (v, k, i) => {
    let rankValue = -1
    Object.keys(Data[i].data).forEach((key) => {
        if (Data[i].data[key].name === k) {
            Object.keys(Data[i].data[key].data).forEach((rank) => {
                if (Data[i].data[key].data[rank].name === v) {
                    rankValue = rank
                }
            })
        }
    })
    return rankValue;
}

export default function queryNameByList(value, kind) {
    const find = (kind.replace(" ", "")).split("|")
    find[1] = find[1].replace(" ", "")
    let valueRank = 0
    let res = []
    let idx = (find[0] === "Shoes" ? 0 : 1)

    valueRank = findRank(value, find[1], idx)

    Object.keys(Data[idx].data).forEach((key) => {
        if (Data[idx].data[key].name !== find[1] && Data[idx].data[key].data[valueRank].name !== value) {
            res.push({Country: Data[idx].data[key].name, Value: Data[idx].data[key].data[valueRank].name})
        }
    })

    return res
}