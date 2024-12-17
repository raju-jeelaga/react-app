export default function Tabs({children, onSelect, isSelect}){
    return (
        <li>
            <button className={isSelect ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}