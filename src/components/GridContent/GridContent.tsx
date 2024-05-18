import styles from './GridContent.module.css';
import {Button} from '../Button';
import {OnlineViewCar, DiagnosticCars, Mercedes, Phone} from '../ImgData';
import classNames from 'classnames';

export const GridContent = () => {
  return (
    <div className={styles.gridContent}>
      <div className={classNames(styles.general, styles.diagnostic)}>
        <div className={styles.text}>
          <h2>Диагностика автомобиля перед покупкой</h2>
          <p>Расскажем обо всех скрытых дефектах автомобиля с пробегом</p>
          <Button
            className={styles.hover}
            bgColor='transparent'
            color='white'
            size='small'
            children='Записаться'
            border='white'
          />
        </div>

        <img
          width='400px'
          height='192px'
          src={DiagnosticCars}
          alt='Cars'
        />
      </div>
      <div className={classNames(styles.general, styles.onlineView)}>
        <div className={styles.text}>
          <h2>Онлайн показ автомобиля по видеосвязи</h2>
          <p>Проведем онлайн-показ интересующего автомобиля в удобное для Вас время</p>
          <Button
            className={styles.hover}
            bgColor='transparent'
            color='white'
            size='small'
            children='Оставить заявку'
            border='white'
          />
        </div>
        <img
          className={styles.onlineViewCar}
          src={OnlineViewCar}
          alt='Cars'
        />
      </div>
      <div className={classNames(styles.general, styles.booking)}>
        <div className={styles.text}>
          <h2>Онлайн бронирование</h2>
          <p>Забронируйте понравившийся автомобиль без визита в дилерский центр</p>
          <Button
            className={styles.hover}
            bgColor='transparent'
            color='white'
            size='small'
            children='Забронировать'
            border='white'
          />
        </div>
        <img
          className={styles.phone}
          src={Phone}
          alt='Cars'
        />
      </div>
      <div className={classNames(styles.general, styles.analysis)}>
        <div className={styles.text}>
          <h2>Онлайн оценка автомобиля с пробегом</h2>
          <p>Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры</p>
          <Button
            className={styles.hover}
            bgColor='transparent'
            color='white'
            size='small'
            children='Оставить заявку'
            border='white'
          />
        </div>
        <img
          width='347px'
          height='165px'
          src={Mercedes}
          alt='Cars'
        />
      </div>
    </div>
  );
};
