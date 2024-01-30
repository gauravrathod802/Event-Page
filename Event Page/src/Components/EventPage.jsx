import './EventPage.css'
import IMG1 from './../assets/img1.jpg'
import IMG2 from './../assets/img2.jpg'
import IMG3 from './../assets/img3.jpg'
import IMG4 from './../assets/img4.jpg'

const EventPage = () => {
    return(
    <div className="container">
    <div className="item-container">
        <div className="img-container">
            <img src={IMG1} alt="" />
        </div>

        <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
                <p className="title">Arijit Singh Live</p>
                <div className="separator"></div>
                <p className="info">Pune - 2024</p>
                <p className="price">₹1299 Onwards</p>

                <div className="additional-info">
                    <p className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        Venue to be announced, Pune                    </p>
                    <p className="info">
                        <i className="far fa-calendar-alt"></i>
                        March 03 | Gates Open at 4PM
                    </p>

                    <p className="info description">
                    Arijit Singh is coming to PUNE this March 2024 and we’re already preparing to sing his all-time hits out loud. Our favorite melody king is back to charm us with an experience like never before.
<span>more...</span> 
                    </p>
                </div>
            </div>
            <button className="action">Book it</button>
        </div>
    </div>

    <div className="item-container">
        <div className="img-container">
            <img src={IMG2} alt="" />
        </div>

        <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
                <p className="title">Kisi Ko Batana Mat</p>
                <div className="separator"></div>
                <p className="info">Thane(W)</p>
                <p className="price">₹799 onwards</p>

                <div className="additional-info">
                    <p className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        Kashinath Ghanekar Natyagruha: Thane (W)                    </p>
                    <p className="info">
                        <i className="far fa-calendar-alt"></i>
                        Sun 04 Feb - Sun 31 Mar
                    </p>

                    <p className="info description">
                    After the great success of his previous show "Bas kar bassi", Anubhav Singh Bassi is coming back to perform live on stage.                    <span>more...</span>
                    </p>
                </div>
            </div>
            <button className="action">Book it</button>
        </div>
    </div>

    <div className="item-container">
        <div className="img-container">
        <img src={IMG3} alt="" />
        </div>

        <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
                <p className="title">Zomaland by Zomato Live</p>
                <div className="separator"></div>
                <p className="info">Mumbai</p>
                <p className="price">₹699 Onwards</p>

                <div className="additional-info">
                    <p className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        Jio World Garden, Mumbai, India</p>
                    <p className="info">
                        <i className="far fa-calendar-alt"></i>
                        February 10,11 | 12PM - 10PM IST</p>

                    <p className="info description">
                    Zomaland by Zomato Live is back for its grandest season yet! Packed with delicious delights, incredible entertainment and stunning attractions, get ready for your favourite carnival! <span>more...</span>
                    </p>
                </div>
            </div>
            <button className="action">Book it</button>
        </div>
    </div>

    <div className="item-container">
        <div className="img-container">
        <img src={IMG4} alt="" />
        </div>

        <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
                <p className="title">Darshan Raval India Tour</p>
                <div className="separator"></div>
                <p className="info">Delhi, India</p>
                <p className="price">₹499 Onwards</p>

                <div className="additional-info">
                    <p className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        Gymkhana Club, Delhi</p>
                    <p className="info">
                        <i className="far fa-calendar-alt"></i>
                        February 10 | Gates Open at 5PM                    </p>

                    <p className="info description">
                    Get ready for an unforgettable musical journey as Darshan Raval, the heartthrob of Indian music, embarks on his much-anticipated nationwide tour - This extraordinary concert series promises to be a celebration of love, emotions, and the magic of Darshan Raval's soulful voice. <span>more...</span>
                    </p>
                </div>
            </div>
            <button className="action">Book it</button>
        </div>
    </div>
</div>
    )
};

export default EventPage;



