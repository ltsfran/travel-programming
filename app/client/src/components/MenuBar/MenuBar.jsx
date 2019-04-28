import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style.css';
import * as Icons from 'react-feather';

function Icon({ name }) {
  let nameIcon;

  function capitalizeFirstLetter(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1)).toString()
  }

  if(name.includes('-')) {
    nameIcon = name.split('-').reduce((result, word) => {
      return capitalizeFirstLetter(result) + capitalizeFirstLetter(word);
    });
  } else {
    nameIcon = capitalizeFirstLetter(name);
  }

  const IconName = Icons[nameIcon];

  return (
    <IconName />
  );
}

export function MenuBar({ items }) {
  return (
    <>
      <ul className="c-menuBar">
        {items.map((item, index) => (
          <li className="c-menuBar__item" key={index}>
            <a className="c-menuBar__link" href="#">
              <Icon name="plus"/>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

MenuBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string
  }))
}