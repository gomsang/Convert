import "./SizeTable.css"
import kinds from "../utils/size/sources/kind_clothes.json";

function SizeTable() {
    return <div id={"contents"}>
        <table>
            <thead>
            <tr>
                {
                    Object.values(kinds.data).map((kind, idx) => <th key={idx}>{kind.name}</th>)
                }
            </tr>
            </thead>
            <tbody>
            {[...Array(kinds.ranks).keys()].map((key,idx) =>
                <tr key={idx}>
                    {
                        Object.keys(kinds.data).map((kind, i) => <td key={i}>{kinds.data[kind].data[key].name}</td>)
                    }
                </tr>
            )}
            </tbody>
        </table>
    </div>
}

export default SizeTable;