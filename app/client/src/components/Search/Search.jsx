import * as React from 'react';
import './style.css';
import { Icon } from '../Icon';



export function Search(){
    return(
        <div class="ButtonIcon">
        <input type="Buscar" class="button" placeholder="Consulta medicinas"></input>
        <Icon name="Search" />        
        </div>
    )
}