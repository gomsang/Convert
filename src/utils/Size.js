import shoes from "../datas/kind_shoes.json";
import clothes from "../datas/kind_clothes.json";
import clothes_wm from "../datas/kind_clothes_women.json";
import bed from "../datas/kind_bed.json";

export default function queryKindByName(inputData) {
    console.log("queryKindByName", inputData);
    let result = []
    const choose = [clothes, clothes_wm, shoes, bed];

    //모든 json파일 탐색
    for (let i = 0; i < choose.length; i++) {
        Object.keys(choose[i].data).forEach((key) => {
            choose[i].data[key].data.forEach(data => {
                if (inputData !== "" && (data.name.indexOf(inputData) === 0)) {
                    result.push({
                        kind: choose[i].name,
                        region: choose[i].data[key].name,
                        rank: data.rank,
                        name: data.name
                    })
                }
            })
        })
    }
    return result
}