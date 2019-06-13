import * as React from 'react';
import './style.css';
import { Icon } from '../Icon';

export function Input({
  width,
  placeholder,
  icon,
  onChange
}){
    return(
      <div
        className="c-input-wrapper"
        style={{ width: width }}
      >
        { icon ? (
          <input
            type="text"
            className="c-input c-input--svg"
            placeholder={placeholder}
            onChange={onChange}
          />
        ):
        (
          <input
            type="text"
            className="c-input"
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        { icon && <Icon name={icon} /> }
      </div>
    )
}
