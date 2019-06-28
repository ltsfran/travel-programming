import * as React from 'react';
import { Input } from '@app/src/components/Input';
import { Image } from '@app/src/components/Image';
import { Title } from '@app/src/components/Title';
import './style.css';

export function SearchMedicines({
  handleChange,
  items,
  error
}) {
  const [ show, setShow ] = React.useState(false);
  const [ index, setIndex ] = React.useState(null);

  function onChange(e) {
    let value = e.target.value;
    if(!!value) {
      setShow(true);
      setIndex(null);
    } else {
      setShow(false);
    }
    handleChange && handleChange(e);
  }

  function onClick(key) {
    setIndex(key);
    setShow(false);
  }

  return(
    <div className="s-search-medicines">
      <div className="c-search">
        <Input
          icon="search"
          placeholder="Busque sus medicamentos..."
          width="100%"
          onChange={onChange}
        />
        {
          show && (
          <div className="c-search__results">
            { !error && items.map((data, key) => (
              <div
                key={key}
                className="c-search__results-item"
                onClick={() => onClick(key)}
                data-key={key}
              >
                {data.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="s-description">
        { index!==null ? (
          <>
            <Title text={items[index].title} />
            <div className="s-description__content">
              <Image src={items[index].url} width="250px" height="250px"/>
              <div className="s-description__content-text">{items[index].description}</div>
            </div>
          </>
        ) : (
          <>
            <Title text="MEDICINA BUSCADA POR EL USUARIO"/>
            <div className="s-description__images">
              <Image src="https://www.movilzona.es/app/uploads/2015/05/medicinas.jpg?x=810" width="250px" height="250px"/>
              <Image src="https://www.america-retail.com/static//2018/08/medicinas-medicacion.jpg" width="250px" height="250px"/>
              <Image src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/03/empresas-medicamentos-epn.jpg" width="250px" height="250px"/>
              <Image src="https://images.sipse.com/dXXLI1e2svKjHrrRAHeFr_ZaNGA=/800x497/smart/2018/01/04/1515099079800.jpg" width="250px" height="250px"/>
              <Image src="https://cdne.diariocorreo.pe/thumbs/uploads/articles/images/prohiben-venta-de-medicinas-en-tiendas-119281-jpg_604x0.jpg" width="250px" height="250px"/>
              <Image src="https://www.frenteamplio.org/wp-content/uploads/MEDICINAS-1024x683.jpg" width="250px" height="250px"/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
