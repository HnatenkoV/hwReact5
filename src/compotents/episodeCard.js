import '../css/style.css'

const EpisodeCard = (props) => {
    return (
        <div className="episode-card">
            <div className="hero-id">{props.location.id}</div>
            <div className="hero-name">{props.location.name}</div>
        </div>
    )
}


export default EpisodeCard