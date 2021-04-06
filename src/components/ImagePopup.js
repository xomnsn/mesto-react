import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_func_img-view ${props.card && 'popup_opened'}`}>
      <div className="image-view">
        <figure className="image-view__figure">
          <img src={props.card?.link} alt={props.card?.name} className="image-view__image"/>
          <figcaption className="image-view__caption">{props.card?.name}</figcaption>
        </figure>
        <button type="button" aria-label="Закрыть окно"
                className="image-view__close-button popup__close-button" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default ImagePopup;
