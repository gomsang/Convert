import "./QueryResultListItem.css"

export default function QueryResultListItem(props){
    return (<div id={"queryResultListItem"}>
        <h1>{props.result.name}</h1>
        <h2>{props.result.kind + " | " + props.result.region}</h2>
    </div>);
}