import React from "react";

function Card(props) {
  const {card, onCardClick} = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li
      key={card._id}
      className="place">
      <div className="place__picture-container">
        <img
          src={card.link}
          alt={card.name}
          className="place__picture"
          onClick={handleClick}
        />
      </div>
      <div className="place__footer">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-container">
          <button type="button" aria-label="Поставить лайк" className="place__like-button"/>
          <p className="place__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" aria-label="Удалить место" className="place__delete-button"/>
    </li>
  );
}

export default Card;
