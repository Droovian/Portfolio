import React from 'react';
import Work from "../src/components/Work";
import mapImage from '../src/assets/map.png';
import indexImage from '../src/assets/index.png';
import swiftForecastImage from '../src/assets/swiftforecast.png';
import bloggerImage from '../src/assets/blogger.png';

const projects = () => {

    const proj = [
        {
            id: 1,
            title: "Property Rental",
            description: "A PHP, MySQL site with AUTH, Listings, Bookings, Payment & Customer Reviews. (Not yet public)",
            images: [mapImage, indexImage, mapImage],
            gitLink: 'https://github.com/Droovian/Renter',
        },
        {
            id: 2,
            title: "Swift-Forecast",
            description: "Real Time Weather site built with Axios, TailwindCSS. Learned state with this Project.",
            images: [swiftForecastImage, /* Update with actual image paths */, /* Update with actual image paths */],
            gitLink: 'https://github.com/Droovian/Swift-Forecast',
        },
        {
            id: 3,
            title: "Blogger",
            description: "Add, delete and modify blog data with this project I've named Blogger built with JSON-Server.",
            images: [bloggerImage, /* Update with actual image paths */, /* Update with actual image paths */],
            gitLink: 'https://github.com/Droovian/Blogger',
        }
    ];

    return ( 
        <div>
            <Work projects={proj}/>
        </div>
    );
}

export default projects;
