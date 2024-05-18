import styles from './Navigation.module.css';
import {navLinks} from '../../constants';
import {Link} from 'react-router-dom';
import {Clock, Logo, MapPin, Trail} from '../ImgData';
import {Button} from '../Button';
import classNames from 'classnames';

export const Navigation = () => {
  const clickLog = (ev: string) => {
    console.log(ev);
  };
  return (
    <>
      <div className={classNames('wrapper', styles.navigation)}>
        <Logo />
        <nav className={styles.navWrapper}>
          <ul className={styles.navLinks}>
            {navLinks.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className={styles.link}
                    onClick={() => clickLog(item.path)}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button
            bgColor='blue'
            className={styles.hover}
            color='white'
            size='meddle'
            children='Заказать звонок'
          />
        </nav>
      </div>
      <div className={classNames('wrapper', styles.subNavWrapper)}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <MapPin />
            <a
              className={styles.link}
              href=''
            >
              Олимпийский просп., 5, стр. 1, Москва
            </a>
          </li>
          <li className={styles.navLink}>
            <Trail />
            <a
              className={styles.link}
              href=''
            >
              Проложить маршрут
            </a>
          </li>
        </ul>
        <div className={styles.navLink}>
          <Clock />
          <span>9:00 - 21:00(ежедневно)</span>
        </div>
      </div>
    </>
  );
};
