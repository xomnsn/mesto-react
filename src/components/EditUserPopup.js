import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditUserPopup(props) {
  const {isOpen, onClose, onUserUpdate} = props;

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUserUpdate({
      name,
      about: description,
    });

    onClose();
  }

  return (
    <PopupWithForm
      name="edit-user"
      title="Редактировать профиль"
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text" name="name"
             required minLength="2" maxLength="40"
             placeholder="Имя"
             className="popup__text-input popup__text-input_type_name"
             id="user-name"
             value={name}
             onChange={handleNameChange}/>
      <p className="popup__input-error" id="user-name-error">Ошибка</p>
      <input type="text" name="about"
             required minLength="2" maxLength="200"
             placeholder="Описание"
             className="popup__text-input popup__text-input_type_description"
             id="user-description"
             value={description}
             onChange={handleDescriptionChange}/>
      <p className="popup__input-error" id="user-description-error">Ошибка</p>
    </PopupWithForm>
  );
}

export default EditUserPopup;
