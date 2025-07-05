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

const Button = ({ buttonText, sliderValue, checkboxObject }) => {
  const generatePassword = () => {
    const trueCheckboxesArr = Object.keys(checkboxObject).filter(
      (key) => checkboxObject[key] === true
    );

    const includesCharacters = trueCheckboxesArr.flatMap(
      (key) => charactersData[key]
    );

    function getRandom(includesCharacters) {
      const randomNum = (
        Math.random() * (includesCharacters.length - 1 + 1) +
        1
      ).toFixed(0);
      return includesCharacters[randomNum];
    }

    const password = [];

    for (let i = 1; i <= sliderValue; i += 1) {
      password.push(getRandom(includesCharacters));
    }

    console.log('password', password.join(''));
  };

  return (
    <button type="button" className={s.button} onClick={generatePassword}>
      <span className={s.buttonText}>{buttonText}</span>
      <IconArrow className={s.iconArrow} />
    </button>
  );
};

export default Button;
