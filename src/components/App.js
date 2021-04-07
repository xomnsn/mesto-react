import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditUserClick() {
    setIsEditUserPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditUserPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditUser={handleEditUserClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-user"
        title="Редактировать профиль"
        children={(
          <>
            <input type="text" name="name"
              required minLength="2" maxLength="40"
              placeholder="Имя"
              className="popup__text-input popup__text-input_type_name"
              id="user-name"/>
            <p className="popup__input-error" id="user-name-error">Ошибка</p>
            <input type="text" name="about"
              required minLength="2" maxLength="200"
              placeholder="Описание"
              className="popup__text-input popup__text-input_type_description"
              id="user-description"/>
            <p className="popup__input-error" id="user-description-error">Ошибка</p>
          </>
        )}
        button="Сохранить"
        isOpen={isEditUserPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        children={(
          <>
            <input type="url" name="link" value=""
              required
              placeholder="Ссылка на картинку"
              className="popup__text-input popup__text-input_type_avatar-src"
              id="avatar-url" />
            <p className="popup__input-error" id="avatar-url-error"/>
          </>
        )}
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-place"
        title="Новое место"
        children={(
          <>
            <input type="text" name="name" value=""
              required minLength="2" maxLength="30"
              placeholder="Название"
              className="popup__text-input popup__text-input_type_title" id="card-title" />
            <p className="popup__input-error" id="card-title-error"/>
            <input type="url" name="link" value="" required placeholder="Ссылка на картинку"
                     className="popup__text-input popup__text-input_type_src" id="card-url" />
            <p className="popup__input-error" id="card-url-error"/>
          </>
        )}
        button="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        button="Да"
        isOpen={false}
        children={(<></>)}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
