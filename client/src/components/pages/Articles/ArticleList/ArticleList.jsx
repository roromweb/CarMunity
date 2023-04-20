import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticles } from '../../../../redux/actions/articlesActions';
import './Article.css';

function ArticleList() {
  const articles = useSelector(state => state.articles);
  const { modelId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles(modelId));
    }
  }, []);

  return (
    <div className="ArticleListBody">
      <Carousel>
        {articles &&
          articles?.map(el => (
            <Carousel.Item key={el.id}>
              <div className="container">
                <div className="titleDiv">
                  <h4 className="title">{el.title}</h4>
                </div>
                <div className="imgDiv">
                  <img className="img" src={el.img} alt="First slide" />
                </div>
                <div className="textDiv">
                  <p className="text">{el.text}</p>
                </div>
              </div>
              <a href={`/models/${modelId}`}>Назад</a>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default ArticleList;
