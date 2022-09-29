import React from 'react'
import ReactDOM from 'react-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Card(props) {
    return (<>
        <div className='card'>
            <img src={props.item.imageUrl} alt="" className='card-img' />
            <div className='card-content'>
                <div className='card-location medium'>
                    <h5 className='card-country'><span className='location-img'><LocationOnIcon style={{ fontSize: 14 }} /></span> {props.item.location.toUpperCase()}</h5>
                    <a href={props.item.googleMapsUrl} target="_blank" className='card-mapurl'>View on Google Maps</a>
                </div>
                <h1 className='card-title'>{props.item.title}</h1>
                <h5 className='card-duration '> {props.item.startDate} - {props.item.endDate} </h5>
                <p className='card-description light'>{props.item.description}</p>
            </div>
        </div>
    </>
    )
}
