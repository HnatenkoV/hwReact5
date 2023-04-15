import '../css/style.css'
import {useNavigate} from "react-router-dom";

const HeroCard = (props) => {
    const navigate = useNavigate()
    const showInfo = (index) => {
        navigate(`hero/${index}`)
        console.log(index)
    }

    return (
        <div className="hero-card" onClick={() => showInfo(props.hero.id)}>
            <div className="hero-id">{props.hero.id}</div>
            <div className="hero-name">{props.hero.name}</div>
        </div>
    )
}


export default HeroCard