import { useState } from 'react';
import './Feedback.css'
import Button from "../../components/Button";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <div className='feedback-container'>
            <h2>We would love your feedback!</h2>
            {submitted ? (
                <p className="feedback-success">Thank you for your feedback! ✨</p>
            ) : (
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            rows="8"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <Button text="Send feedback" type="submit" />
                </form>
            )}
        </div>
    )
}
export default Feedback;