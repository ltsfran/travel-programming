import * as React from 'react';
import './style.css';

export function Chat({

}) {
  const [ open, setOpen ] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return(
    <>
      { open ? (
        <div className="c-chat isOpen">
          <div className="c-chat__header" onClick={handleClick}>Chat Virtual</div>
          <div className="c-chat__content">
            <iframe src="https://assistant-chat-us-south.watsonplatform.net/web/public/d3a7151c-7681-4f0e-a020-fa04cf543dc0"></iframe>
          </div>
        </div>
        ) : (
        <div className="c-chat">
          <div className="c-chat__header" onClick={handleClick}>Chat Virtual</div>
          <div className="c-chat__content">
            <iframe src="https://assistant-chat-us-south.watsonplatform.net/web/public/d3a7151c-7681-4f0e-a020-fa04cf543dc0"></iframe>
          </div>
        </div>
      )}
    </>
  );
}
