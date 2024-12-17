export default function TabsMenu({children, onSelect, isSelectt}){
    return (
        <li>
            <button className={isSelectt ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}