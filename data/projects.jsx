import Work from "../src/components/Work";
const projects = () => {

    const proj = [
        {
            id: 1,
            title: "Property Rental",
            description: "A PHP, MySQL site with AUTH, Listings, Bookings, Payment & Customer Reviews.(Not yet public)",
            images: [
                "../src/assets/map.png",
                "../src/assets/index.png",
                "../src/assets/map.png"
            ],
            gitLink: 'https://github.com/Droovian/Renter',
        },
        {
            id: 2,
            title: "Swift-Forecast",
            description: "Real Time Weather site built with Axios, TailwindCSS. Learnt state with this Project.",
            images: [
                "../src/assets/swiftforecast.png",
                "url-to-image5",
                "url-to-image6"
            ],
            gitLink: 'https://github.com/Droovian/Swift-Forecast',
            
        },
        {
            id: 3,
            title: "Blogger",
            description: "Add, delete and modify blog data with this project I've named Blogger built with JSON-Server.",
            images: [
                "../src/assets/blogger.png",
                "url-to-image5",
                "url-to-image6"
            ],
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