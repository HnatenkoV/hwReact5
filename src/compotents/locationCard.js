import '../css/style.css'

const LocationCard = (props) => {
    return (
        <div className="hero-card">
            <div className="hero-id">{props.location.id}</div>
            <div className="hero-name">{props.location.name}</div>
        </div>
    )
}


export default LocationCard