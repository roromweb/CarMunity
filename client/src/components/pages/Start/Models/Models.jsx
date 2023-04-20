import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { fetchModels } from '../../../../redux/actions/modelsActions';
import ModelItem from './ModelItem';

function Models() {
  const models = useSelector((state) => state.models);
  const [pageNumber, setPageNumber] = useState(0);
  const { brandId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchModels(brandId));
  }, []);

  const modelsPage = 16;

  const pagesVisited = pageNumber * modelsPage;

  const displayModels = models
    .slice(pagesVisited, pagesVisited + modelsPage).map((el) => (
      <ModelItem key={el.id} model={el} />
    ));

  const pageCount = Math.ceil(models.length / modelsPage);

  const changeModels = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="video-box">
      <video className="video" autoPlay muted loop preload="auto">
        <source type="video/mp4" src="/Video.mp4" />
        {/* <source type="video/mp4" src="videos/forest.mp4"/> */}
      </video>
      <div className="asd">
        <div className="box">
          {displayModels}
        </div>
        <ReactPaginate
          marginPagesDisplayed={2}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          previousLabel={"<<<"}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          nextLabel={">>>"}
          pageCount={pageCount}
          onPageChange={changeModels}
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

export default Models;
