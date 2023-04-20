import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import ReactPaginate from 'react-paginate';
import BrandItem from './BrandItem';

function Brands() {
  const brands = useSelector(state => state.brands);

  const [pageNumber, setPageNumber] = useState(0);

  const brandsPage = 16;

  const pagesVisited = pageNumber * brandsPage;

  const displayBrands = brands
    .slice(pagesVisited, pagesVisited + brandsPage)
    .map(el => <BrandItem key={el.id} brand={el} />);

  const pageCount = Math.ceil(brands.length / brandsPage);

  const changeBrands = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="video-box">
      <video className="video" autoPlay muted loop preload="auto">
        <source type="video/mp4" src="/Video.mp4" />
        {/* <source type="video/mp4" src="videos/forest.mp4"/> */}
      </video>
      <div className="asd">
        <div className="box">{displayBrands}</div>
        <ReactPaginate
          marginPagesDisplayed={2}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          previousLabel={'<<<<'}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          nextLabel={'>>>>'}
          pageCount={pageCount}
          onPageChange={changeBrands}
          containerClassName="paginationBttns"
          previousLinkClassName="previosBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
          pageLinkClassName="count"
        />
      </div>
    </div>
  );
}

export default Brands;
