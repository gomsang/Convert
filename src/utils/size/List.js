import shoes from "./sources/kind_shoes.json";
import clothes from "./sources/kind_clothes.json";

const Data = [shoes, clothes]

export default function queryNameByList(value) {
    let result = [];
    let key = (value.kind === "Shoes" ? 0 : 1)
    Object.values(Data[key].data).forEach(block => {
        if (block.name !== value.region) {
            result.push({
                kind: value.kind,
                name: block.data[value.rank],
                rank: value.rank,
                region: block.name
            })
        }
    })
    return result
}