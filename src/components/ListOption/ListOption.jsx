import React from 'react';
import PropTypes from 'prop-types';
import './ListOption.scss';
import classNames from 'classnames';

export const ListOption = ({
  option,
  openedId,
  setOpenedId,
}) => {

  const handleClick = (id) => {
    if (option.id === openedId) {
      setOpenedId(0);

      return;
    }
  
    setOpenedId(id);
  };

  return (
    <li className={classNames('option', {
      'option--is-opened': openedId === option.id,
    })}>
      <div
        className="option__button"
        onClick={() => handleClick(option.id)}  
      >
        <div className="option__button--left-side">
          <img
            src={openedId === option.id
              ? 'assets/img/blue-circle.svg'
              : 'assets/img/green-circle.svg'
            }
            className='option__button__circle'
            alt="circle"
          />

          <p className={classNames('option__title', {
            'option__title--in-dropdown': openedId === option.id,
          })}>
            {option.title}
          </p>
        </div>

        <img
          className='option__arrow'
          src={openedId === option.id
            ? 'assets/img/arrow-up.svg'
            : 'assets/img/arrow-down.svg'
          }
          alt="arrow"
        />
      </div>

      <div
        className={classNames('option__dropdown dropdown', {
          'dropdown--is-hidden': option.id !== openedId,
        })}>
        <p className="dropdown__text">
          {option.description}
        </p>
      </div>
    </li>
  );
};

ListOption.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  openedId: PropTypes.number.isRequired,
  setOpenedId: PropTypes.func,
};
