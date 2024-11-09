import React, { useState } from 'react';
function App() {
// State variables
const [textInput, setTextInput] = useState('');
const [dropdownValue, setDropdownValue] = useState('option1');
const [buttonClickCount, setButtonClickCount] = useState(0);
// Event handlers
const handleInputChange = (e) => {
setTextInput(e.target.value);
};
// Event handlers continued
const handleDropdownChange = (e) => {
setDropdownValue(e.target.value);
};
const handleButtonClick = () => {
setButtonClickCount(buttonClickCount + 1);
};
return (
<div>
<h1>React Standalone App</h1>
<div>
<label>
Text Input:
<input type="text" value={textInput}
onChange={handleInputChange} />
</label>
</div>
<div>
<label>
Dropdown:
<select value={dropdownValue}
onChange={handleDropdownChange}>
<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
</label>
</div>
<div>
<button onClick={handleButtonClick}>Click Me
</button>
<p>Button clicked {buttonClickCount} times</p>
</div>
</div>
); // end of return
} // end function App()
export default App;
