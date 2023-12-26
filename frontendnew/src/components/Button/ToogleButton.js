import React, { useState } from 'react';

const ToggleButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {!isClicked ? (
        <button onClick={handleClick}>Click me</button>
      ) : (
        <div>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
