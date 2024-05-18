import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
  onClick?: () => void;
  bgColor: 'transparent' | 'blue';
  size: 'small' | 'meddle';
  color: 'white';
  border?: 'white';
}

export const Button = ({
  children,
  bgColor = 'transparent',
  size = 'small',
  color = 'white',
  className,
  border = undefined,
}: ButtonProps) => (
  <button
    className={classNames(styles.button, className, {
      [styles.transparent]: bgColor === 'transparent',
      [styles.blue]: bgColor === 'blue',
      [styles.small]: size === 'small',
      [styles.meddle]: size === 'meddle',
      [styles.smallRadius]: size === 'meddle',
      [styles.meddleRadius]: size === 'meddle',
      [styles.color]: color === 'white',
      [styles.borderWhite]: border === 'white',
    })}
  >
    {children}
  </button>
);
