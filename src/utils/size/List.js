import shoes from "./sources/kind_shoes.json";
import clothes from "./sources/kind_clothes.json";


export default function queryNameByList(value) {
    let result = [];
    const Data = (value.kind === "Shoes" ? shoes : clothes)
    Object.keys(Data.data).forEach(key => {
        if (key !== value.regionKind) {
            result.push({
                kind: value.kind,
                name: Data.data[key].data[value.rank].name,
                rank: value.rank,
                region: Data.data[key].name,
                regionKind: key
            })
        }
    })
    return result
}