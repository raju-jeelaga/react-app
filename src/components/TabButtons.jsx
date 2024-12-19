export default function TabButtons({children, isSelected, ...props}){
    return (
        <li>
            <button className={isSelected ? 'active' : ''}{...props}>{children}</button>
        </li>
    )
}