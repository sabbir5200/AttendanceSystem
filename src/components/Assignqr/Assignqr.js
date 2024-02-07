import React, { useRef, useState } from 'react';

const Assignqr = () => {
    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isInputDisabled, setIsInputDisabled] = useState(false);
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleButtonClick = () => {
      // Assuming imageUrl is fetched dynamically based on the input text
      // This is just a placeholder, you would replace it with your logic to fetch the image URL
      const fetchedImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
      setImageUrl(fetchedImageUrl);
      setIsInputDisabled(true); // Disable input after button click
    };
  
    return (
        <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter Your Student ID"
          disabled={isInputDisabled} // Disable input if already entered
        />
        <button onClick={handleButtonClick} disabled={isInputDisabled}>Show My QR Code</button>
        {imageUrl && <img src={imageUrl} alt="Image" />}
      </div>
    );
};

export default Assignqr;