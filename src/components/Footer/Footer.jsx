import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container footer-info">
        <div className="footer-info__socials">
          <img
            src="assets/img/dev-logo.svg"
            alt="dev"
            className='footer-info__logo'
          />

          <div className="footer-info__networks">
            
            <a
              href="instagram.com"
              className="footer-info__networks--image"
            >
              <img
                src="assets/img/instagramm.svg"
                alt="inst"
              />
            </a>

            <a
              href="facebook.com"
              className="footer-info__networks--image"
            >
              <img
                src="assets/img/fb.svg"
                alt="fb"
              />
            </a>

            <a
              href="telegram.org"
              className="footer-info__networks--image"
            >
              <img
                src="assets/img/telegram.svg"
                alt="tg"
              />
            </a>

            <a
              href="https://viber.com"
              className="footer-info__networks--image"
            >
              <img
                src="assets/img/viber.svg"
                alt="viber"
              />
            </a>

            <a
              href="whatsapp.com"
              className="footer-info__networks--image"
            >
              <img
                src="assets/img/whatsapp.svg"
                alt="whatsapp"
              />
            </a>

            
          </div>
        </div>

        <div className="footer-info__sales">
          <a href='https://viber.com' className="footer-info__saler">
            <img
              src="assets/img/viber.svg"
              alt="viber"
            />

            <p className="footer-info__saler--text">
              Валерия: +380505859409
            </p>
          </a>

          <a href='https://viber.com' className="footer-info__saler">
            <img
              src="assets/img/viber.svg"
              alt="viber"
            />

            <p className="footer-info__saler--text">
              Анна: +380505859409
            </p>
          </a>

          <a href='https://https://viber.com' className="footer-info__saler">
            <img
              src="assets/img/viber.svg"
              alt="viber"
            />

            <p className="footer-info__saler--text">
              Валерия: +380505859409
            </p>
          </a>
        </div>

        <a className="footer-info__hr" href='mailto:hr@dv-s.com'>
          hr@dv-s.com
        </a>
      </div>

      <div className="footer__signature">
        Developers 2018-2022 © All rights reserved
      </div>
    </footer>
  );
};
