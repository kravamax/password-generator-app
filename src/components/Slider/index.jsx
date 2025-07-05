// import { useState } from 'react';
import s from './Slider.module.scss';

const Slider = ({ sliderValue, onSliderChange }) => {
  const changeSliderValue = (e) => {
    const value = +e.target.value;

    onSliderChange(value);

    const progress = `${value * 5 - 0.05}%`;
    e.target.style.setProperty('--progress', progress);
  };

  return (
    <>
      <div className={s.slider__mediaBlock}>
        <label className={s.slider__label} htmlFor="InputLength">
          Character Length
        </label>
        <span className={s.slider__value}>{sliderValue}</span>
      </div>
      <div className={s.input__wrapper}>
        <input
          type="range"
          name="InputLength"
          id="InputLength"
          min={0}
          max={20}
          value={sliderValue}
          onChange={changeSliderValue}
          className={s.slider__inputRange}
        />
      </div>
    </>
  );
};

export default Slider;
