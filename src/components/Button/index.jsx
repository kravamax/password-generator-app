import s from './Button.module.scss';
import IconArrow from '../../assets/icons/icon-arrow-right.svg?react';

const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');
const SYMBOLS = '!@#$%^&*()_+[]{}|;:,.<>?/`~'.split('');

const charactersData = {
  uppercase: UPPERCASE_LETTERS,
  lowercase: LOWERCASE_LETTERS,
  numbers: NUMBERS,
  symbols: SYMBOLS,
};

const Button = ({
  buttonText,
  sliderValue,
  checkboxObject,
  setGeneratedPassword,
}) => {
  const generatePassword = () => {
    if (sliderValue === 0) {
      alert('Select character length!');
      return;
    }

    const trueCheckboxesArr = Object.keys(checkboxObject).filter(
      (key) => checkboxObject[key] === true
    );

    if (trueCheckboxesArr.length === 0) {
      alert('Please select at least one option!');
      return;
    }

    const getRandom = (array) =>
      array[Math.floor(Math.random() * array.length)];

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    let limitedChackboxesArr = trueCheckboxesArr;

    if (sliderValue < trueCheckboxesArr.length) {
      limitedChackboxesArr = shuffle(trueCheckboxesArr).slice(0, sliderValue);
    }

    console.log('trueCheckboxesArr', limitedChackboxesArr);

    const guaranteedChars = limitedChackboxesArr.map((key) =>
      getRandom(charactersData[key])
    );

    const remainingLength = sliderValue - guaranteedChars.length;

    const allChars = limitedChackboxesArr.flatMap((key) => charactersData[key]);

    const password = [...guaranteedChars];

    for (let i = 1; i <= remainingLength; i += 1) {
      password.push(getRandom(allChars));
    }

    const shuffledPassword = password.sort(() => Math.random() - 0.5).join('');

    setGeneratedPassword(shuffledPassword);
  };

  return (
    <button type="button" className={s.button} onClick={generatePassword}>
      <span className={s.buttonText}>{buttonText}</span>
      <IconArrow className={s.iconArrow} />
    </button>
  );
};

export default Button;
