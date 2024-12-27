export default function Tabs({buttons, children, ButtonsContainer}){
    //const ButtonsContainer = buttonsContainer;
    return( 
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    )
}