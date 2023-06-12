import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")

    return (
        <div className="fp">
            {loading ? "loading..." :
                <>
                    {
                        data.length &&
                            data.map(item=>( <div key={item._id} className="fpItems">
                            <img
                                className="fpImg"
                                src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201904271152588623-f6793eb46ce011e99cf30242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                                alt="rooms" />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from {item.cheapestPrice}</span>
                            {item.rating && <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>))
                    }

                </>
            }
        </div>
    )
}

export default FeaturedProperties
