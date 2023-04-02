import HeroCard from "./heroCard";
import LocationCard from "./locationCard";



const HeroList = (props) => {
    return (
        <div className= "hero-list">
            <div>
            {props.heroList?.results ? props.heroList.results.map((hero, index) => (
                <HeroCard hero={hero} key={`hero-card-${index}`}>{hero.name}</HeroCard>)) :
                props.heroList?.results && props.heroList.results.map((location, index) => (
                <LocationCard location={location} key={`location-card-${index}`}>{location.name}</LocationCard>))
            }
            </div>
        </div>


    )
}


export default HeroList