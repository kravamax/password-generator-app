import s from './Strength.module.scss';
import clsx from 'classnames';

const Strength = ({ checkboxCount }) => {
  const indicatorText = (checkboxCount) => {
    switch (checkboxCount) {
      case 0:
        return '';
      case 1:
        return 'too weak!';
      case 2:
        return 'weak';
      case 3:
        return 'medium';
      case 4:
        return 'strong';
      default:
        return '';
    }
  };

  const getIndicatorClass = () => {
    switch (checkboxCount) {
      case 1:
        return s.indicator__tooWeak;
      case 2:
        return s.indicator__weak;
      case 3:
        return s.indicator__medium;
      case 4:
        return s.indicator__strong;
      default:
        return '';
    }
  };

  const renderIndicators = () => {
    const className = getIndicatorClass();
    return Array.from({ length: 4 }, (_, i) => (
      <span
        key={i}
        className={clsx(s.indicator, {
          [className]: i < checkboxCount,
          [s.indicator__empty]: i >= checkboxCount,
        })}
        data-block="indicator"
      ></span>
    ));
  };

  return (
    <div className={s.strength__container}>
      <span className={s.strength__defaultText}>Strength</span>
      <span className={s.strength__indicatorText}>
        {indicatorText(checkboxCount)}
      </span>
      <div data-block="indicators" className={s.indicators__block}>
        {renderIndicators()}
      </div>
    </div>
  );
};

export default Strength;
