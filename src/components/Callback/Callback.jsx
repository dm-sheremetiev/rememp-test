import React, { useState } from 'react';

import './Callback.scss';

export const Callback = () => {
  const [name, setName] = useState('');
  const [soc, setSoc] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (newName) => {
    if (!name && newName === ' ') {
      return;
    }

    setName(newName);
  };

  const handleSocialsChange = (newSoc) => {
    if (!soc && newSoc === ' ') {
      return;
    }

    setSoc(newSoc);
  };

  const handleEmailChange = (newEmail) => {
    if (!email && newEmail === ' ') {
      return;
    }

    setEmail(newEmail);
  };

  return (
    <div className="callback" id="callback">
      <h1 className="main__title">
        Обсудить проект
      </h1>

      <p className="callback__text">
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </p>

      <form
        action="/"
        className="callback__form form"
        id='myForm'
      >
        <input
          className="form__input"
          type="text"
          placeholder='Имя'
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
          maxLength="40"
          required
        />

        <input
          className="form__input"
          type="text"
          placeholder='Telegram/Viber'
          maxLength="40"
          value={soc}
          onChange={(e) => handleSocialsChange(e.target.value)}
          required
        />

        <input
          className="form__input"
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          required
        />

        <input
          type='submit'
          form='myForm'
          className='order-button order-button--submit'
          placeholder='Отправить' 
        />
      </form>

      <img
        src="assets/img/mobile.svg"
        alt="phone"
        className='callback__mobile'  
      />
    </div>
  );
};
