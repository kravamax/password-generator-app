import { useState } from 'react';
import './assets/styles/main.scss';
import TextField from './components/TextField/ index';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!');

  return (
    <article>
      <h1 className="title-text">Password Generator</h1>

      <TextField generatedPassword={generatedPassword} />
      <div className="main__container"></div>

      <p>
        Password Generator P4$5W0rD! Character Length Include Uppercase Letters
        Include Lowercase Letters Include Numbers Include Symbols Strength
        Generate
      </p>
    </article>
  );
}

export default App;
