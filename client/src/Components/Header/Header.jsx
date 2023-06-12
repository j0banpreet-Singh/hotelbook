import "./header.css";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi, faCalendarDay, faPerson } from "@fortawesome/free-solid-svg-icons"
import 'react-date-range/dist/styles.css'; // main css file;
import 'react-date-range/dist/theme/default.css'; // theme css file;
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])

    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        room: 1
    })

    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [openDate, setOpenDate] = useState(false);

    //  destructing values from context API hook
    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate("/hotels", { state: { destination, dates, options } })
    }

    const handleOpenDate = () => {
        setOpenDate(!openDate);
    }

    const handleOpenOptions = () => {
        setOpenOptions(!openOptions);
    }

    const handleCount = (currentName, operation) => {
        setOptions(prev => {
            return {
                ...prev, [currentName]: operation === "i" ? options[currentName] + 1 : options[currentName] - 1
            }
        })
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listmode" : "headerContainer"} >
                <div className="headerList">
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>

                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                {type !== "list" &&
                    <><h1 className="headertitle">Planning for vacation we Got YOU....</h1>
                        <p className="headerDesc">Get upto 70% discount and unlock rewards on your first booking</p>
                        {!user && <button className="headerBtn">Sign In / Register</button>}


                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going"
                                    className="headerSearchInput"
                                    onBlur={e => setDestination(e.target.value)}
                                />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                                <span className="headerSearchText" onClick={handleOpenDate}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    minDate={new Date()}
                                    className="date"
                                />}
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span className="headerSearchText" onClick={handleOpenOptions}>{`${options.adults} adults . ${options.children} children . ${options.room} room`}</span>
                                {openOptions &&
                                    <div className="options">
                                        <div className="optionContainer">
                                            <div className="optionItems">
                                                <span className="optionText">Adult</span>
                                                <div className="optionCounter">
                                                    <button className="optionCounterButton"
                                                        disabled={options.adults <= 1}
                                                        onClick={() => handleCount("adults", "d")}>
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">{options.adults}</span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleCount("adults", "i")}>
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="optionItems">
                                                <span className="optionText">Children</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.children <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleCount("children", "d")}>
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">{options.children}</span>
                                                    <button
                                                        onClick={() => handleCount("children", "i")}
                                                        className="optionCounterButton">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="optionItems">
                                                <span className="optionText">room</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.room <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleCount("room", "d")}>
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">{options.room}</span>
                                                    <button
                                                        onClick={() => handleCount("room", "i")}
                                                        className="optionCounterButton">
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}
                            </div>
                            <div className="headerSeachItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>

                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header
