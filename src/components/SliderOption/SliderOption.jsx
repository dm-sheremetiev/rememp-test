import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './SliderOption.scss';

export const SliderOption = ({
  sliderOption,
  setMobileCardWidth,
}) => {
  useEffect(() => {
    const mobileCard = document.getElementById('slider-option');
    const mobileCardStyle = window.getComputedStyle(mobileCard);

    setMobileCardWidth(parseFloat(mobileCardStyle.width));
  }, []);

  window.addEventListener('resize', () => {
    const mobileCard = document.getElementById('slider-option');
    const mobileCardStyle = window.getComputedStyle(mobileCard);

    setMobileCardWidth(parseFloat(mobileCardStyle.width));
  });

  return (
    <li className="slider-option" id="slider-option">
      <div className="slider-option__text-block">
        <h2 className="slider-option__title">
          {sliderOption.title}
        </h2>

        <p className="slider-option__description">
          {sliderOption.description}
        </p>
      </div>

      <img
        src={sliderOption.imgUrl}
        alt=""
        className='slider-option__image'
      />
    </li>
  );
};

SliderOption.propTypes = {
  sliderOption: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }),
  setMobileCardWidth: PropTypes.func.isRequired,
};
