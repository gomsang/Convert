import shoes from "./sources/kind_shoes.json";
import clothes from "./sources/kind_clothes.json";

// 해당 배열에 데이터 셋 파일이 들어와 있어야 탐색 가능
const kindArray = [shoes, clothes];
const kinds = new Map()
kindArray.forEach(kind => {
    kinds.set(kind.id, kind)
})

/**
 * @typedef {Object} SizeQueryResult
 * @property {string} kind - kind ID (ex: shoes, clothes..)
 * @property {string} region - Name of region to which the size belongs
 * @property {string} rank -
 * @property {string} name -
 */

/**
 * Returns all sizes where the keyword prefix matches name
 * @param {string} keyword
 * @returns {SizeQueryResult[]}
 */
export function querySizeByName(keyword) {
    let result = []

    for (let i = 0; i < kindArray.length; i++) {
        // 각 kinds 를 순회하도록 한다.
        let kind = kindArray[i]
        Object.keys(kind.data).forEach((key) => {
            kind.data[key].data.forEach(data => {
                if (keyword !== "" && (data.name.indexOf(keyword) === 0)) {
                    result.push({
                        kind: kind.id,
                        region: kind.data[key].name,
                        rank: data.rank,
                        name: data.name
                    })
                }
            })
        })
    }
    return result
}

/**
 * Returns all regions within that kind.
 * @param {string} kindId - kind id
 * @returns {string[]|undefined}
 */
export function getRegionsInKind(kindId) {
    if (kinds.has(kindId)){
        let regions = Object.keys(kinds.get(kindId).data)
        regions.sort((a, b) => a.localeCompare(b))
        return regions;
    }
    return undefined;
}

export function getSizeName(kindName, sizeType, rank){
    return kinds.get(kindName).data[sizeType].data[rank];
}