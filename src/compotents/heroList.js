import HeroCard from "./heroCard";
import EpisodeCard from "./episodeCard";



const HeroList = (props) => {
    return (
        <div className= "hero-list">
            <div>
            {props.heroList?.results ? props.heroList.results.map((hero, index) => (
                <HeroCard hero={hero} key={`hero-card-${index}`}>{hero.name}</HeroCard>)) :
                props.EpisodeList?.results && props.EpisodeList.results.map((location, index) => (
                <EpisodeCard location={location} key={`location-card-${index}`}>{location.name}</EpisodeCard>))
            }
            </div>
        </div>


    )
}


export default HeroList