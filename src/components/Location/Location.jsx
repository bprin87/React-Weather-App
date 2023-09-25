import './Location.css'
import { useState } from 'react'


function Location() {

    const [data, setData] = useState({})

    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`


    // returns data from open weather api
    const findLocation = (event) => {
        if (event.key === 'Enter') {
            fetch(url).then((response) => response.json())
            .then((data) => setData(data)); 
            setLocation('') // clears input
        }     
    } 


    return (

        <section className='location-container'>
            <div className='location'>
                <h1 className='location-title'>Find your forecast</h1>
                <div className='search-bar-container'>
                    <input className='search-bar' type='text' value={location} onChange={event => setLocation(event.target.value)} onKeyDown={findLocation} placeholder='Find your desired location'></input>
                </div>
                <div className='location-data-container'>
                    <div className='location-name'>
                        <p>{data.name}</p>
                        <p>{data.sys ? <p>{data.sys.country}</p> : null}</p>
                    </div>
                    <div className='location-temp'>
                        {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
                    </div>
                    <div className='location-weather'>
                        {data.weather ? <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img> : null}
                        {data.weather ? <h2>{data.weather[0].description}</h2> : null}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Location