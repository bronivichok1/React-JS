import logo from './logo.jpg'
export default function Header(){
    const dataTime = new Date()

    return(
    <header> 
        <img src={logo} alt="FreeBot"   />
        <span>Время сейчас: {dataTime.toLocaleTimeString()}</span>
    </header>
    )
}