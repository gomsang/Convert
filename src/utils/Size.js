import shoes from "../datas/kind_shoes.json";
import clothes from "../datas/kind_clothes.json";
import clothes_wm from "../datas/kind_clothes_women.json";
import bed from "../datas/kind_bed.json";

export default function queryKindByName(inputData) {
    let result = []
    const kinds = [clothes, clothes_wm, shoes, bed];

    for (let i = 0; i < kinds.length; i++) {
        Object.keys(kinds[i].data).forEach((key) => {
            kinds[i].data[key].data.forEach(data => {
                if (inputData !== "" && (data.name.indexOf(inputData) === 0)) {
                    result.push({
                        kind: kinds[i].name,
                        region: kinds[i].data[key].name,
                        rank: data.rank,
                        name: data.name
                    })
                }
            })
        })
    }
    return result
}