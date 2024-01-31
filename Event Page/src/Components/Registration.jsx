// import { useState } from 'react';
// import './Styles/Registration.css';
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         payment: '',

//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         // Add your logic to handle form submission, e.g., sending data to a server
//         console.log('Form submitted:', formData);
//     };

//     const navigate = useNavigate();

//     const handleBackClick = () => {
//         // Navigate back to the previous page
//         navigate(-1);
//     };



//     return (
//         <div className="registration-form">
//             <h2>Registration Form</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <label htmlFor="fullName">Full Name:</label>
//                 <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     required
//                 />

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                 />

//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     required
//                 />

//                 <button type="submit">Submit</button>
//             </form>
//             <button onClick={handleBackClick} className='back'>Back</button>

//         </div>
//     );
// };

// export default Registration;






import { useState } from 'react';
import './Styles/Registration.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        payment: '',

    });
    const navigate = useNavigate();
    const location = useLocation();

    
    const event = location.state?.event;



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission, e.g., sending data to a server
        console.log('Form submitted:', formData, 'Event details:', event);
      };


    const handleBackClick = () => {
        // Navigate back to the previous page
        navigate(-1);
    };



    return (
        <div className="registration-form">
            <h2>Registration Form</h2>


            {event && (
        <div>
          <p>Selected Event:</p>
          <p>Title: {event.title}</p>
          <p>Price: {event.price}</p>
        </div>
      )}


            <form onSubmit={handleFormSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="payment">Payment:</label>
        <input
          type="text"
          id="payment"
          name="payment"
          value={formData.payment}
          onChange={handleInputChange}
          required
        />

                <button type="submit">Submit</button>
            </form>
            <button onClick={handleBackClick} className='back'>Back</button>

        </div>
    );
};

export default Registration;
