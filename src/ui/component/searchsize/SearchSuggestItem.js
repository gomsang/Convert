import "./SearchSuggestItem.css"

export default function SearchSuggestItem({suggest, focused}) {
    return <div className={focused ? "focusedSuggest" : "suggest"}><span
        className={"name"}>{suggest.name}</span><span>{suggest.kind} | {suggest.region}</span></div>
}