// import './Styles/EventPage.css'
// import IMG1 from './../assets/img1.jpg'
// import IMG2 from './../assets/img2.jpg'
// import IMG3 from './../assets/img3.jpg'
// import IMG4 from './../assets/img4.jpg'
// import { Link } from 'react-router-dom'


// const events = [
//     {
//         title: 'Arijit Singh Live',
//         location: 'Pune - 2024',
//         price: '₹1299 Onwards',
//         venue: 'Venue to be announced, Pune',
//         date: 'March 03 | Gates Open at 4PM',
//         description: 'Arijit Singh is coming to PUNE this March 2024 and we’re already preparing to sing his all-time hits out loud. Our favorite melody king is back to charm us with an experience like never before.',
//         image: IMG1,
//     },
//     {
//         title: 'Kisi Ko Batana Mat',
//         location: 'Thane(W)',
//         price: '₹799 onwards',
//         venue: 'Kashinath Ghanekar Natyagruha: Thane (W)',
//         date: ' Sun 04 Feb - Sun 31 Mar',
//         description: 'After the great success of his previous show "Bas kar bassi", Anubhav Singh Bassi is coming back to perform live on stage.',
//         image: IMG2,
//     },

//     {
//         title: 'Zomaland by Zomato Live',
//         location: 'Mumbai',
//         price: '₹699 Onwards',
//         venue: 'Jio World Garden, Mumbai, India',
//         date: 'February 10,11 | 12PM - 10PM IST',
//         description: 'Zomaland by Zomato Live is back for its grandest season yet! Packed with delicious delights, incredible entertainment and stunning attractions, get ready for your favourite carnival!',
//         image: IMG3,
//     },
//     {
//         title: 'Darshan Raval India Tour',
//         location: 'Delhi, India',
//         price: '₹499 Onwards',
//         venue: 'Gymkhana Club, Delhi',
//         date: 'February 10 | Gates Open at 5PM',
//         description: "Get ready for an unforgettable musical journey as Darshan Raval, the heartthrob of Indian music, embarks on his much-anticipated nationwide tour - This extraordinary concert series promises to be a celebration of love, emotions, and the magic of Darshan Raval's soulful voice.",
//         image: IMG4,
//     }

// ];

// const EventPage = () => {

//     return (
//         <div className="container">
//             {events.map((event, index) => (
//                 <div className="item-container" key={index}>
//                     <div className="img-container">
//                         <img src={event.image} alt="" />
//                     </div>
//                     <div className="body-container">
//                         <div className="overlay"></div>
//                         <div className="event-info">
//                             <p className="title">{event.title}</p>
//                             <div className="separator"></div>
//                             <p className="info">{event.location}</p>
//                             <p className="price">{event.price}</p>
//                             <div className="additional-info">
//                                 <p className="info">
//                                     <i className="fas fa-map-marker-alt"></i>
//                                     {event.venue}  </p>
//                                 <p className="info">
//                                     <i className="far fa-calendar-alt"></i>
//                                     {event.date}
//                                 </p>
//                                 <p className="info description">
//                                     {event.description}
//                                     <span>more...</span>
//                                 </p>
//                             </div>
//                         </div>
//                         <button className="action"><Link to={{
//                             pathname: '/registration',
//                             state: { event: { title: event.title, price: event.price } },
//                         }} style={{ color: 'white', textDecoration: 'none' }}>Book it</Link></button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// };

// export default EventPage;


import './Styles/EventPage.css'
import IMG1 from './../assets/img1.jpg'
import IMG2 from './../assets/img2.jpg'
import IMG3 from './../assets/img3.jpg'
import IMG4 from './../assets/img4.jpg'
import { Link } from 'react-router-dom'


const events = [
    {
        title: 'Arijit Singh Live',
        location: 'Pune - 2024',
        price: '₹1299 Onwards',
        venue: 'Venue to be announced, Pune',
        date: 'March 03 | Gates Open at 4PM',
        description: 'Arijit Singh is coming to PUNE this March 2024 and we’re already preparing to sing his all-time hits out loud. Our favorite melody king is back to charm us with an experience like never before.',
        image: IMG1,
    },
    {
        title: 'Kisi Ko Batana Mat',
        location: 'Thane(W)',
        price: '₹799 onwards',
        venue: 'Kashinath Ghanekar Natyagruha: Thane (W)',
        date: ' Sun 04 Feb - Sun 31 Mar',
        description: 'After the great success of his previous show "Bas kar bassi", Anubhav Singh Bassi is coming back to perform live on stage.',
        image: IMG2,
    },

    {
        title: 'Zomaland by Zomato Live',
        location: 'Mumbai',
        price: '₹699 Onwards',
        venue: 'Jio World Garden, Mumbai, India',
        date: 'February 10,11 | 12PM - 10PM IST',
        description: 'Zomaland by Zomato Live is back for its grandest season yet! Packed with delicious delights, incredible entertainment and stunning attractions, get ready for your favourite carnival!',
        image: IMG3,
    },
    {
        title: 'Darshan Raval India Tour',
        location: 'Delhi, India',
        price: '₹499 Onwards',
        venue: 'Gymkhana Club, Delhi',
        date: 'February 10 | Gates Open at 5PM',
        description: "Get ready for an unforgettable musical journey as Darshan Raval, the heartthrob of Indian music, embarks on his much-anticipated nationwide tour - This extraordinary concert series promises to be a celebration of love, emotions, and the magic of Darshan Raval's soulful voice.",
        image: IMG4,
    }

];

const EventPage = () => {

    return (
        <div className="container">
            {events.map((event, index) => (
                <div className="item-container" key={index}>
                    <div className="img-container">
                        <img src={event.image} alt="" />
                    </div>
                    <div className="body-container">
                        <div className="overlay"></div>
                        <div className="event-info">
                            <p className="title">{event.title}</p>
                            <div className="separator"></div>
                            <p className="info">{event.location}</p>
                            <p className="price">{event.price}</p>
                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {event.venue}  </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    {event.date}
                                </p>
                                <p className="info description">
                                    {event.description}
                                    <span>more...</span>
                                </p>
                            </div>
                        </div>
                        <button className="action"><Link to={{
                            pathname: '/registration',
                            state: { event: { title: event.title, price: event.price } },
                        }} style={{ color: 'white', textDecoration: 'none' }}>Book it</Link></button>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default EventPage;





