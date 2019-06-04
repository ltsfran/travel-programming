import * as React from 'react';
import * as Icons from 'react-feather';

export function Icon({ name }) {
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