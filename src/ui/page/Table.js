import shoes from "../../utils/size/sources/kind_shoes.json"
import clothes from "../../utils/size/sources/kind_clothes.json"

function getSize(kind, country) {
    const Data = [shoes, clothes]
    const idx = kind === "Shoes" ? 0 : 1
    let result = []

    Object.keys(Data[idx].data).forEach((key) => {
        if (Data[idx].data[key].name === country) {
            Data[idx].data[key].data.forEach((v) => {
                result.push(v.name)
            })
        }
    })

    return result
}

export default function Table(props) {
    const rank = props.rank
    const temp = props.kind.split("|")
    const kind = temp[0].replace(" ", "")
    const country1 = temp[1].replace(" ", "")
    const country2 = props.kindList

    const country1Result = getSize(kind, country1)
    const country2Result = getSize(kind, country2)


    return (<table className={"Table"}>
            <thead>
            </thead>
            <tbody>
            <tr>
                <th>{country1}</th>
                {country1Result.map((value, i) => <td key={i}>{value}</td>)}
            </tr>
            <tr>
                <th>{country2}</th>
                {country2Result.map((value, i) => <td key={i}>{value}</td>)}
            </tr>
            </tbody>
        </table>
    )
}