import * as React from 'react';
import { Input } from '@app/src/components/Input';
import { Image } from '@app/src/components/Image';
import { Title } from '@app/src/components/Title';
import './style.css';

export function SearchDiseases({
  handleChange,
  items
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
    <div className="s-search-diseases">
      <div className="c-search">
        <Input
          icon="search"
          placeholder="Busque su enfermedad..."
          width="100%"
          onChange={onChange}
        />
        {
          show && (
          <div className="c-search__results">
            { items.map((data, key) => (
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
            <Title text="ENFERMEDAD BUSCADA POR EL USUARIO"/>
            <div className="s-description__images">
              <Image src="https://st4.depositphotos.com/13264288/22120/v/1600/depositphotos_221204632-stock-illustration-funny-cartoon-guy-wearing-medical.jpg" width="250px" height="250px"/>
              <Image src="http://1.bp.blogspot.com/-cOySAqDNaYA/VNA07K_Eu9I/AAAAAAAAMFA/fzlenSyMPf8/w1200-h630-p-k-no-nu/DOLENCIAS%2BENFERMEDADES%2BEN%2BINGL%C3%89S%2BAILMENTS%2BDIBUJOS%2BFIEBRE%2BCONSTIPADO%2BSTOMACHACHE%2BDOLOR%2BDE%2BCABEZA%2BAILMENTS%2BINGL%C3%89S%2BAPRENDER%2BINGL%C3%89S%2BDRAWINGS%2BILNESSES%2BAILMENTS.jpg" width="250px" height="250px"/>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2byuS-tQBwUagGbLT0o9_B_coObfKhYCSvOKZe31bZl-UzaFj" width="250px" height="250px"/>
              <Image src="http://www.dibujalia.com/data/media/41/tos-enfermedad.png" width="250px" height="250px"/>
              <Image src="https://png.pngtree.com/element_origin_min_pic/17/01/05/633b3410d85b1a8f08406055de94ecd2.jpg" width="250px" height="250px"/>
              <Image src="https://png.pngtree.com/element_origin_min_pic/17/09/19/d83c0de64603cb742f15932882881ff3.jpg" width="250px" height="250px"/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
