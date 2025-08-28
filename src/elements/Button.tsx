import type { ReactElement } from 'react';

type ButtonTypeProps = {
  type: 'submit';
  disabled: boolean;
  text: string;
};

export const Button = ({
  type,
  disabled,
  text,
}: ButtonTypeProps): ReactElement => {
  return (
    <button type={type} disabled={disabled} className='button'>
      {text}
    </button>
  );
};
