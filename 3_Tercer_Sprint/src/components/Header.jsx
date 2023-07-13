import './Header.css'
import Todo from './Todo'


const Header = ({theme, setTheme}) =>{

    //Create the buttonClass var to change the web theme
    let buttonClass =  theme == "dark" ?"ThemeDarkButton"  :"ThemeLightButton"
    //This is equals to:
    //let var = 
    //If (theme == dark){
    // setTheme("ThemeDarkButton")
    //}else { 
    // setTheme("ThemeLightButton")
    //}
    //
    
    //Create a function to change themes onClick on a Button.
    function changeTheme(){
       setTheme(theme == "dark" ?"light" :"dark")  
       //equal to: setX(if(theme == "dark"){"light"}else{"dark"})
    }

    return(
        <> 
            <div  className={`Header ${theme}`}>
                <h1>TODO</h1>
                <button onClick={changeTheme} className={`ButtonTheme ${buttonClass}`}></button>
            </div>
        </>
    )
}

export default Header;