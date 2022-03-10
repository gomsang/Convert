import shoes from "../../utils/size/sources/kind_shoes.json"
import clothes from "../../utils/size/sources/kind_clothes.json"
import "./Table.css"

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

    return (<div className={"TableContainer"}>
            <h1>{kind}</h1>
            <table className={"Table"} border={1}>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <th>{country1.toString().substring(0,2)}</th>
                    {country1Result.map((value, i) => <td key={i}
                                                          style={i.toString() === rank ? {backgroundColor: "papayawhip"} : {}}>{value}</td>)}
                </tr>
                <tr>
                    <th>{country2.toString().substring(0,2)}</th>
                    {country2Result.map((value, i) => <td key={i}
                                                          style={i.toString() === rank ? {backgroundColor: "papayawhip"} : {}}>{value}</td>)}
                </tr>
                </tbody>
            </table>
        </div>
    )
}