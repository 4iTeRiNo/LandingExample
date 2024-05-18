import styles from './Header.module.css';

interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({children}: HeaderProps) => <div className={styles.header}>{children}</div>;
