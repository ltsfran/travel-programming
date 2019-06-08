import * as React from 'react';
import './style.css';

export function Input(){
    return(
        <form>
            <label className="c-label-input">
                <input type="text" name="texto"/>
            </label>
        </form>
    );
}