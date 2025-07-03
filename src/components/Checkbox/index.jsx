// import { useState } from 'react';
import s from './Checkbox.module.scss';

const Checkbox = ({ checkboxOptionText, checkboxOptionName }) => {
  return (
    <li className={s.checkbox__item}>
      <input
        type="checkbox"
        name={checkboxOptionName}
        id={checkboxOptionName}
        className={s.checkbox}
      />
      <label className={s.label} htmlFor={checkboxOptionName}>
        {checkboxOptionText}
      </label>
    </li>
  );
};

export default Checkbox;
