import {DetailedHTMLProps, HTMLAttributes, createElement} from 'react';
import styles from './GridCard.module.css';
import classNames from 'classnames';

interface GridCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
  tagName: keyof JSX.IntrinsicElements;
  header?: string;
  description?: string;
  button?: JSX.Element;
  Img?: string;
}

export const GridCard = ({header, tagName, description, button, Img, className}: GridCardProps) => {
  return createElement(
    tagName,
    {className: classNames(styles.general, className)},
    header,
    description,
    button,
    <img src={Img} />,
  );
};
