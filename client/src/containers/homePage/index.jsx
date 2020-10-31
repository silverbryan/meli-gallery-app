import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByQuery } from '../../actions/searchActions'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchByQuery('moto'));
  }, []);

  const results = useSelector(state => state.user.searchResults);
  console.log(results);
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="card">
        <div className="card__image">
          <img src="https://http2.mlstatic.com/D_909111-MLA31239994076_062019-O.jpg" alt="motorola-g-plus" height="200" />
        </div>
      </div>
      <div className="card__content">
        <div className="content">
          <h4>Moto G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram</h4>
          <h6>DIRECTONER IS</h6>
        </div>
        <div className="content">
          <h6>Rank #1</h6>
        </div>
      </div>
    </div>
  );
}

export default Home;