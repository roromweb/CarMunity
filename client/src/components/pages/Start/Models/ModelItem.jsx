import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ModelItem({ model }) {
  const [failedImg, setFailedImg] = useState(false);
  const [showImage, setShowImage] = useState(false);
  return (
    <Link to={`/models/${model.id}/`} style={{ textDecoration: "none" }}>
      <div className="logoBrand" onMouseEnter={() => setShowImage(true)} onMouseLeave={() => setShowImage(false)}>
        {showImage ? (
          <img
            src={model.img}
            alt=""
            style={{ width: '100%', height: '100%', borderRadius: "15px", display: failedImg && 'none' }}
          />
        ) : (
          <div className="modelName">
            {model.name}
          </div>
        ) }
      </div>
    </Link>
  );
}

export default ModelItem;
