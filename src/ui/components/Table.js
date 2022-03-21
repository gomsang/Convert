import shoes from "../../utils/size/sources/kind_shoes.json"
import clothes from "../../utils/size/sources/kind_clothes.json"
import "./styles/Table.css"

export default function Table({value, final}) {
    const Data = (value.kind === "Shoes" ? shoes : clothes)
    console.log(final.rank)
    return (<div className={"TableContainer"}>
            <h1>{value.kind}</h1>
            <table className={"Table"} border={1}>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <th>{value.region.toString().substring(0, 2)}</th>
                    {Object.values(Data.data[value.regionKind].data).map((find, i) => <td key={i}
                                                          style={i === value.rank ? {backgroundColor: "papayawhip"} : {}}>{find.name}</td>)}
                </tr>
                <tr>
                    <th>{final.region.toString().substring(0, 2)}</th>
                    {Object.values(Data.data[final.regionKind].data).map((find, i) => <td key={i}
                                                          style={i === final.rank ? {backgroundColor: "papayawhip"} : {}}>{find.name}</td>)}
                </tr>
                </tbody>
            </table>
        </div>
    )
}