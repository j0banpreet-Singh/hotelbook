import "./searchItem.css"
import { Link } from "react-router-dom"

const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img
                src={item.photos[0]}
                alt="hotel room"
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio apartment with Air conditioning</span>
                <span className="siFeature">
                    {item.desc}
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelSubtitle">
                    you can cancel later, so lock in this great place today!
                </span>
            </div>
            <div className="siDetails">
               {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">includes tax and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">see availibilty</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
