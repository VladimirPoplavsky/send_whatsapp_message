import React, { useState } from 'react';
import './App.css';

function App() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const isValidPhoneNumber = (number) => {
        // Regex to validate the format 0581234567 (Israeli phone number format)
        const regex = /^\d{10}$/;
        return regex.test(number);
    };

    const sendMessage = () => {
        if (isValidPhoneNumber(phoneNumber)){
            let cleanedNumber = phoneNumber.substring(2, 10)
            const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B9725${cleanedNumber}&text&app_absent=0`;
            window.open(whatsappUrl, '_blank');
        } else{
            alert("Incorrect phone number, check your input");
        }
    };

    const onPressEnter = (e) => {
        if (e.key === 'Enter'){
            sendMessage();
        }
    }

    return (
        <div className="App">
            <div className="App-header">
                <h2>WhatsApp Message Sender</h2>
                <p>Note: Works only with Israeli phone numbers</p>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onKeyPress={onPressEnter}
                    placeholder="Enter phone number"
                />
                <button onClick={sendMessage}>
                    <i className="fa-brands fa-whatsapp"></i>
                    Send Message
                </button>
            </div>
        </div>
    );
}

export default App;
