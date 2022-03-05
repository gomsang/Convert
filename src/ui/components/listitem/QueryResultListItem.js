import "./QueryResultListItem.css"

export default function QueryResultListItem({result}) {
    return <div id={"queryResultListItem"}>
        <button>
            <div>
                <p id={"sizeName"}><b>{result.name}</b></p>
                <p id={"sizeInfo"}>{result.kind + " | " + result.region}</p>
            </div>
        </button>
    </div>
}