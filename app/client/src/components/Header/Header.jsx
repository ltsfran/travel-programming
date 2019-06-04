import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import { Icon } from '../Icon';

export function Header({ items }) {
  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    let contentBody = document.getElementsByTagName('body')[0];
    open ? (contentBody.style.overflow = 'hidden') : (contentBody.style.overflow = '');
  }, [open]);

  function handleClick() {
    setOpen(true);
  }

  return(
    <>
      <div className="c-header__wrapper">
        <div className="c-header">
          <div className="c-header__toogle" onClick={handleClick}></div>
          <div className="c-header__logo"></div>
        </div>
        { open ? (
          <div className="c-header__menu c-header__menu--open">
            <ul className="c-nav">
              { items.map((item, key) => (
                <li key={key} className="c-nav__item">
                  <a className="c-nav__item-link" href="#">
                    { item.icon && <Icon name={item.icon} /> }
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="c-header__menu">
            <ul className="c-nav">
              { items.map((item, key) => (
                <li key={key} className="c-nav__item">
                  <a className="c-nav__item-link" href="#">
                    { item.icon && <Icon name={item.icon} /> }
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      { open && (<div className="c-header__overlay" onClick={() => setOpen(false)}/>)}
    </>
  );
}