import React from "react";
import Card from "./Card";
import api from "../utils/api";
import userIcon from "../images/user-icon.jpg";

function Main(props) {
  const {onEditUser, onAddPlace, onEditAvatar, onCardClick} = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatarSrc, setUserAvatarSrc] = React.useState('');
  const [cards, setCards] = React.useState([]);

  // get initial user info and cards
  React.useEffect(() => {
    const userDataPromise = api.getUser();
    const initialCardsPromise = api.getInitialCards();

    Promise.all([userDataPromise, initialCardsPromise])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatarSrc(userData.avatar);

        setCards(cards);
      })
      .catch(err => console.log(err));
  },  []);

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__user">
          <div className="profile__avatar-container">
            <img
              src={userAvatarSrc ? userAvatarSrc : userIcon}
              alt="user" className="profile__avatar"/>
            <button className="profile__edit-avatar" onClick={onEditAvatar}/>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="Редактировать данные пользователя"
                      className="profile__edit-user-info" onClick={onEditUser}/>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить место" className="profile__add-button" onClick={onAddPlace}/>
      </section>
      <section className="page__places places">
        <ul className="places__elements">
          {cards && cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
