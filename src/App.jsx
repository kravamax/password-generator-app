import { useState } from 'react';
import './assets/styles/main.scss';
import TextField from './components/TextField/ index';
import Slider from './components/Slider';
import Checkbox from './components/Checkbox';
import Strength from './components/Strength';
import Button from './components/Button';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!');
  const [passwordLength, setPasswordLenth] = useState(0);
  const [checkboxObject, setCheckboxObject] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleCheckboxChange = (name, checked) => {
    setCheckboxObject((prev) => ({ ...prev, [name]: checked }));
  };

  const countTrueCheckbox = Object.values(checkboxObject).filter(
    (item) => item === true
  ).length;

  return (
    <article>
      <h1 className="title-text">Password Generator</h1>

      <TextField generatedPassword={generatedPassword} />
      <div className="main__container">
        <Slider
          sliderValue={passwordLength}
          onSliderChange={setPasswordLenth}
        />
        <ul className="checkbox__list">
          {[
            'Include Uppercase Letters',
            'Include Lowercase Letters',
            'Include Numbers',
            'Include Symbols',
          ].map((name) => (
            <Checkbox
              key={name.split(' ')[1].toLowerCase()}
              checkboxOptionText={name}
              checkboxOptionName={name.split(' ')[1].toLowerCase()}
              isChecked={checkboxObject[name.split(' ')[1].toLowerCase()]}
              onChange={handleCheckboxChange}
            />
          ))}
        </ul>
        <Strength checkboxCount={countTrueCheckbox} />
        <Button
          buttonText={'Generate'}
          sliderValue={passwordLength}
          checkboxObject={checkboxObject}
          // generatedPassword={generatedPassword}
          // onClick={setGeneratedPassword}
        />
      </div>
    </article>
  );
}

export default App;
