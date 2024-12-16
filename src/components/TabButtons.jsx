export default function TabButtons({children, onSelect}){
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}