import React from 'react';
import { PropTypes } from 'prop-types';

import './ReferencesItem.scss';

export const ReferencesItem = ({ subtitle, img }) => {
  return (
    <li
      className="references__references-item references-item"
    >
      <div className="references-item__text">
        <h2 className="references-item--title">
          Онлайн-магазин
        </h2>

        <p className="references-item--subtitle">
          {subtitle}
        </p>
      </div>

      <img
        src={img}
        alt=""
      />
    </li>
  );
};

ReferencesItem.propTypes = {
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
