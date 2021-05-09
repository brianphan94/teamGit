import React, {useState, useEffect} from 'react';
import NasaResults from './NasaResults';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = '7xAWzkjCCFHcghBOlvkimEL6oxuzyF9qJaNNKGht';

const Nasa = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [results, setResults] = useState([]);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };
    
    const fetchResults = () => {
        let url = `${baseURL}?lon=${long}&lat=${lat}&api_key=${key}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchResults(); 
     }, [])

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter Latitude</span>
                    <input type="float" name="setLat" onSubmit={(e) => setLat(e.target.value)} />
                    <br />
                    <span>Enter Longitude</span>
                    <input type="float" name="setLong" onSubmit={(e) => setLong(e.target.value)} />
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