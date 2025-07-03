import { useState } from 'react';
import './assets/styles/main.scss';
import TextField from './components/TextField/ index';
import Slider from './components/Slider';
import Checkbox from './components/Checkbox';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!');
  const [checkboxObject, setCheckboxObject] = useState({});

  return (
    <article>
      <h1 className="title-text">Password Generator</h1>

      <TextField generatedPassword={generatedPassword} />
      <div className="main__container">
        <Slider />
        <ul className="checkbox__list">
          <Checkbox
            checkboxOptionText={'Include Uppercase Letters'}
            checkboxOptionName={'uppercase'}
          />
          <Checkbox
            checkboxOptionText={'Include Lowercase Letters'}
            checkboxOptionName={'lowercase'}
          />
          <Checkbox
            checkboxOptionText={'Include Numbers'}
            checkboxOptionName={'numbers'}
          />
          <Checkbox
            checkboxOptionText={'Include Symbols'}
            checkboxOptionName={'symbols'}
          />
        </ul>
      </div>

      <p>Strength Generate</p>
    </article>
  );
}

export default App;
