import styles from './Main.module.css';
import classNames from 'classnames';

interface MainProps {
  children: JSX.Element[];
}

export const Main = ({children}: MainProps) => (
  <div className={classNames(styles.main, 'wrapper')}>{children}</div>
);
