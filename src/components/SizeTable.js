import "./SizeTable.css"
import kinds from "../datas/kind_shoes.json";

function SizeTable() {

    return <div id={"contents"}>
        <table>
            <thead>
            <tr>
                {
                    Object.keys(kinds.data).map(kind => {
                        return <th>{kind}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {[...Array(kinds.ranks).keys()].map(key => {
                    return <tr>
                        {
                            Object.keys(kinds.data).map(kind => {
                                return <td>{kinds.data[kind].data[key].name}</td>
                            })
                        }
                    </tr>
                }
            )}
            </tbody>
        </table>
    </div>
}

export default SizeTable;