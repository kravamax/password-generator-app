import s from './Checkbox.module.scss';

const Checkbox = ({
  checkboxOptionText,
  checkboxOptionName,
  isChecked,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange(checkboxOptionName, e.target.checked);
  };

  return (
    <li className={s.checkbox__item}>
      <input
        type="checkbox"
        name={checkboxOptionName}
        id={checkboxOptionName}
        className={s.checkbox}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className={s.label} htmlFor={checkboxOptionName}>
        {checkboxOptionText}
      </label>
    </li>
  );
};

export default Checkbox;
