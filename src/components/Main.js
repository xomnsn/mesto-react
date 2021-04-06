import React from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [currentUserId, setCurrentUserId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatarSrc, setUserAvatarSrc] = React.useState('');
  const [cards, setCards] = React.useState([]);

  // get initial user info and cards
  React.useEffect(() => {
    const userDataPromise = api.getUser();
    const initialCardsPromise = api.getInitialCards();

    Promise.all([userDataPromise, initialCardsPromise])
      .then((res) => {
        const userData = res[0];
        const cards = res[1];

        setCurrentUserId(userData._id);
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
              src={userAvatarSrc ? userAvatarSrc : "https://png.pngtree.com/png-vector/20190419/ourlarge/pngtree-vector-business-men-icon-png-image_956508.jpg"}
              alt="" className="profile__avatar"/>
            <button className="profile__edit-avatar" onClick={props.onEditAvatar}/>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="Редактировать данные пользователя"
                      className="profile__edit-user-info" onClick={props.onEditUser}/>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить место" className="profile__add-button" onClick={props.onAddPlace}/>
      </section>
      <section className="page__places places">
        <ul className="places__elements">
          {cards && cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
