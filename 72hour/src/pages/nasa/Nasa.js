import React, {useState} from 'react';
import NasaResults from './NasaResults';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = '7xAWzkjCCFHcghBOlvkimEL6oxuzyF9qJaNNKGht';

const Nasa = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [date, setDate] = useState([]);
    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };
    
    const fetchResults = (e) => {
        let url = `${baseURL}?lon=${long}&lat=${lat}&date=${date}&api_key=${key}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Vary': 'Origin'
            },

        })
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.log(err));
    };

    if (results.msg === "No imagery for specified date.") return <h1>No Image found</h1>

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter Latitude (-90-90): </span>
                    <input type="number" name="setLat" onChange={(e) => setLat(e.target.value)} />
                    <br />
                    <span>Enter Longitude (-180-180): </span>
                    <input type="number" name="setLong" onChange={(e) => setLong(e.target.value)} />
                    <br />
                    <span>Enter Date (YYYY-MM-DD): </span>
                    <input type="date" name="setDate" onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <button className="submit">Submit</button>
                </form>
                {
                   results.length > 0 ? <NasaResults results={results} /> : null
                }
            </div>
        </div>
    )
}

export default Nasa;