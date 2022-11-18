import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <img
            src="assets/img/dev-logo.svg"
            alt="logo"
            className='header__logo'
          />
        </div>

        <nav className="header__nav nav">
          <ul className="nav__list">
            <a
              className="nav__item"
              href='#services'
            >
              Услуги
            </a>
            <a
              className="nav__item"
              href='#portfolio'
            >
              Портфолио
            </a>
            <a
              className="nav__item"
              href='#stages'
            >
              Этапы
            </a>
            <a
              className="nav__item"
              href='#designers'
            >
              Дизайнеры
            </a>
          </ul>

          <a
            href='#callback'
            className="order-button__header"
          >
            Заказать
          </a>
        </nav>

        <a href="#menu" className='menu__ref'>
          <img
            src="assets/img/menu-circle.svg"
            alt=""
          />
          <img
            src="assets/img/menu-circle.svg"
            alt=""
          />
          <img
            src="assets/img/menu-circle.svg"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};
