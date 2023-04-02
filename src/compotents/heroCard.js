import '../css/style.css'

const HeroCard = (props) => {
    return (
        <div className="hero-card">
            <div className="hero-id">{props.hero.id}</div>
            <div className="hero-name">{props.hero.name}</div>
        </div>
    )
}


export default HeroCard