import shoes from "../datas/kind_shoes.json"

export function queryKindByName(keyword) {
    let results = []
    Object.keys(shoes.data).forEach(key => {
        shoes.data[key].data.forEach(data => {
            if (keyword === data.name) {
                results.push({
                    kind : "shoes",
                    region : key,
                    rank : data.rank,
                    name : data.name
                });
            }
        })
    })
    return results;
}