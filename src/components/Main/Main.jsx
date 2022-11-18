import React, { useState } from 'react';
import './Main.scss';

import { ListOption } from '../ListOption';
import { SliderOption } from '../SliderOption/SliderOption';
import { MobileSliderOption } from '../MobileSliderOption/MobileSliderOption';
import { options } from '../../helpers/listOptions';
import { sliderOptions } from '../../helpers/sliderOptions';
import { Callback } from '../Callback/Callback';

export const Main = () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  const [openedId, setOpenedId] = useState(0);
  const [offset, setOffset] = useState(0);
  const [newOffset, setNewOffset] = useState(0);

  const cardWidthWithGap = 672;
  const cardsOnFrame = 1;

  const fullWidthOfList = cardWidthWithGap * (5 - cardsOnFrame);
  const handleClickButton = (direction) => {
    switch (direction) {
    case 'prev':
      if (offset === 0) {
        setOffset(fullWidthOfList);

        return;
      }

      setOffset(current => current - cardWidthWithGap);
      break;
    case 'next':
      if (offset === fullWidthOfList) {
        setOffset(0);

        return;
      }

      setOffset(current => current + cardWidthWithGap);
      break;
    default:
      break;
    }
  };

  const [mobileCardWidth, setMobileCardWidth] = useState(0);

  const fullWidth = mobileCardWidth * (5 - 1);
  const handleNewButton = (direction) => {
    switch (direction) {
    case 'prev':
      if (newOffset === 0) {
        setNewOffset(fullWidth);

        return;
      }

      setNewOffset(current => current - mobileCardWidth);
      break;
    case 'next':
      if (newOffset === fullWidth) {
        setNewOffset(0);

        return;
      }

      setNewOffset(current => current + mobileCardWidth);
      break;
    default:
      break;
    }
  };

  const handleClickList = (direction) => {
    const firstSublist = document.querySelector('.references__sublist--mobile--first');
    const secondSublist = document.querySelector('.references__sublist--mobile--second');

    switch (direction) {
    case 'prev':
      firstSublist.classList.remove('references__sublist--mobile--hidden');
      secondSublist.classList.add('references__sublist--mobile--hidden');
      break;
    case 'next':
      secondSublist.classList.remove('references__sublist--mobile--hidden');
      firstSublist.classList.add('references__sublist--mobile--hidden');
      break;
    default:
      break;
    }
  };


  return (
    <main className='main'>
      <div className="main__container head-info">
        <div className="head-info__text">
          <h1 className="head-info__title">
            Разработка<br /> интернет-магазина<br />
            с нуля за неделю
          </h1>

          <p className="head-info__info-text">
            Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля
            до пользовательского интерфейса в сжатые сроки
            с командой Virtual Designers
          </p>

          <a
            href='#callback'
            className="order-button order-button--head-info"
          >
            Заказать
          </a>
        </div>

        <div className="head-info__background-images background-images">
          <img
            src="assets/img/cart.svg"
            alt="cart"
            className='background-images__cart'
          />

          <img
            src="assets/img/blue-cylinder.svg"
            alt="cylinder"
            className='background-images__blue-cylinder'
          />

          <img
            src="assets/img/blue-sphere.svg"
            alt="sphere"
            className='background-images__blue-sphere'
          />
        </div>
      </div>

      <div className="page__menu menu" id="menu">
        <ul className="menu__list">
          <a href="#services" className="menu__item">Услуги</a>
          <a href="#portfolio" className="menu__item">Портфолио</a>
          <a href="#stages" className="menu__item">Этапы</a>
          <a href="#designers" className="menu__item">Дизайнеры</a>
        </ul>
      </div>

      <div className="main__floating-pictures">
        <img
          src="assets/img/filled-elipse-blue.svg"
          alt=""
          className='filled-blue-elipse'
        />
        <img
          src="assets/img/elipse.svg"
          alt="elipse"
          className='elipse'
        />
        <img
          src="assets/img/violet-wave.svg"
          alt="wave"
          className='violet-wave'
        />
        <img
          src="assets/img/green-ellipse.svg"
          alt="wave"
          className='green-ellipse'
        />
        <img
          src="assets/img/violet-sphere.svg"
          alt="wave"
          className='violet-sphere'
        />
        <img
          src="assets/img/violet-sphere.svg"
          alt="wave"
          className='violet-sphere--small'
        />
      </div>

      <div className="main__services" id="services">
        <div className="main__container">
          <div className="services">
            <h1 className="main__title main__title--mobile">
              Что входит в услугу по созданию дизайна интернет-магазина?
            </h1>

            <ul className='services__list'>
              {options.map(option => (
                <ListOption
                  key={option.id}
                  option={option}
                  openedId={openedId}
                  setOpenedId={setOpenedId}
                />
              ))}
            </ul>

            <img
              src="assets/img/bag.svg"
              alt="bag"
              className='services__bag'
            />
          </div>
        </div>
      </div>

      <div className="main__slider main__container" id="stages">
        <div className="slider">
          <h1 className="main__title main__title--mobile">
            Этапы разработки интернет-магазина
          </h1>

          <img
            src="assets/img/blue-light-sphere.svg"
            alt=""
            className='slider__sphere'
          />

          <ul
            className="slider__list"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {sliderOptions.map(sliderOption => (
              <SliderOption
                sliderOption={sliderOption}
                key={sliderOptions.id}
                setMobileCardWidth={setMobileCardWidth}
              />
            ))}
          </ul>

          <ul
            className="slider__list slider__list--mobile"
            style={{ transform: `translateX(-${newOffset}%)` }}
          >
            {sliderOptions.map(sliderOption => (
              <MobileSliderOption
                sliderOption={sliderOption}
                key={sliderOptions.id}
                setMobileCardWidth={setMobileCardWidth}
              />
            ))}
          </ul>

          <div className="slider__buttons">
            <button
              className="slider__button slider__button--left-button"
              type='button'
              onClick={() => handleClickButton('prev')}
            />

            <button
              className="slider__button slider__button--right-button"
              type='button'
              onClick={() => handleClickButton('next')}
            />
          </div>

          <div className="slider__mobile-buttons">
            <button
              className="slider__button slider__button--left-button"
              type='button'
              onClick={() => handleNewButton('prev')}
            />

            <button
              className="slider__button slider__button--right-button"
              type='button'
              onClick={() => handleNewButton('next')}
            />
          </div>
        </div>

        <img
          src="assets/img/blue-wave.svg"
          alt="wave"
          className='slider__blue-wave-img'
        />

        <img
          src="assets/img/light-blue-sphere.svg"
          alt="sphere"
          className='slider__light-blue-sphere-img'
        />
      </div>

      <div className="main__references" id="portfolio">
        <div className="main__container">
          <div className="references">
            <h1 className="main__title main__title--mobile">
              Примеры онлайн-магазинов
            </h1>

            <ul className="references__list">
              <li
                className="references__item references__item--first"
              >
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для оптовых покупок
                  </p>
                </div>
              </li>
              <li className="references__item references__item--second">
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для флористов
                  </p>
                </div>
              </li>
              <li className="references__item references__item--third">
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для парикмахеров
                  </p>
                </div>

                <img
                  className="references__slice"
                  src='assets/img/blue-slice.svg'
                  alt='slice'
                />
              </li>
              <li className="references__item references__item--fourth">
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для визажистов
                  </p>
                </div>
              </li>
              <li className="references__item references__item--fifth">
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для кондитеров
                  </p>
                </div>
              </li>
              <li className="references__item references__item--sixth">
                <div className="references__text">
                  <h2 className="references__item--title">
                    Онлайн-магазин
                  </h2>

                  <p className="references__item--subtitle">
                    для художников
                  </p>
                </div>
              </li>
            </ul>

            <ul className="references__list--mobile">
              <div className='references__sublist--mobile--first'>
                <li className="references__item references__item--first">
                  <div className="references__text">
                    <h2 className="references__item--title">
                      Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                      для оптовых покупок
                    </p>
                  </div>
                </li>
                <li className="references__item references__item--second">
                  <div className="references__text">
                    <h2 className="references__item--title">
                      Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                      для флористов
                    </p>
                  </div>
                </li>
                <li className="references__item references__item--third">
                  <div className="references__text">
                    <h2 className="references__item--title">
                      Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                      для парикмахеров
                    </p>
                  </div>

                  <img
                    className="references__slice"
                    src='assets/img/blue-slice.svg'
                    alt='slice'
                  />
                </li>
              </div>

              <div className='references__sublist--mobile--second references__sublist--mobile--hidden'>
                <li className="references__item references__item--fourth">
                  <div className="references__text">
                    <h2 className="references__item--title">
                    Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                    для визажистов
                    </p>
                  </div>
                </li>
                <li className="references__item references__item--fifth">
                  <div className="references__text">
                    <h2 className="references__item--title">
                    Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                    для кондитеров
                    </p>
                  </div>
                </li>
                <li className="references__item references__item--sixth">
                  <div className="references__text">
                    <h2 className="references__item--title">
                    Онлайн-магазин
                    </h2>

                    <p className="references__item--subtitle">
                    для художников
                    </p>
                  </div>
                </li>
              </div>
            </ul>

            <div className="slider__mobile-buttons slider__mobile-buttons--small">
              <button
                className="slider__button slider__button--left-button"
                type='button'
                onClick={() => handleClickList('prev')}
              />

              <button
                className="slider__button slider__button--right-button"
                type='button'
                onClick={() => handleClickList('next')}
              />
            </div>

            <img
              src="assets/img/pink-wave.svg"
              alt="wave"
              className='references--wave'
            />

            <img
              src="assets/img/big-blue-sphere.svg"
              alt="wave"
              className='references--big-blue-sphere'
            />
          </div>
        </div>
      </div>

      <div className="main__more-info main__container" id="designers">
        <div className="more-info">
          <h1 className="main__title main__title--more-info">
            Необходимо больше информации?
          </h1>

          <img
            src="assets/img/orders.svg"
            className='more-info--orders-img'
            alt="time"
          />

          <p className="more-info__text">
            Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект.
          </p>
          <a
            href='#callback'
            className="order-button order-button--more-info"
          >
            Оставить заявку
          </a>
        </div>
      </div>

      <div className="main__callback">
        <div className="main__container main__container--callback">
          <Callback />
        </div>
      </div>
    </main>
  );
};
