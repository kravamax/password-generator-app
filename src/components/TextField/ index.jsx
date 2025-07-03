import { useState } from 'react';
import clsx from 'classnames';
import s from './TextField.module.scss';
import IconCheck from '../../assets/icons/icon-copy.svg?react';

const TextField = ({ generatedPassword }) => {
  const [copied, setCopied] = useState(false);

  const copyPasswordToClipboard = () => {
    if (!generatedPassword) return;

    navigator.clipboard.writeText(generatedPassword).then(() => {
      setCopied(true);
      console.log('password copied to clipboard');

      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={s.textField__container}>
      <span className={s.textField__password}>{generatedPassword}</span>

      <span className={clsx(s.copiedText, { [s.hidden]: !copied })}>
        Copied
      </span>
      <button
        onClick={copyPasswordToClipboard}
        className={clsx(s.buttonCopy, { [s.copied]: copied })}
        type="button"
      >
        <span className={s.buttonText}>Icon copy</span>
        <IconCheck className={s.iconCopy} />
        {/* <img className={s.iconCopy} src={iconCopy} alt="icon-copy" /> */}
      </button>
    </div>
  );
};

export default TextField;
