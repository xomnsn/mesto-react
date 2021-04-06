import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_func_${props.name} ${props.isOpen ? 'popup_opened' : ""}`}>
      <div className="popup__container">
        <h2 className="popup__header">{props.title}</h2>
        <form noValidate action="#" className="popup__form" name={props.name}>
          {props.children}
          <button type="submit" className="popup__submit">{props.button}</button>
        </form>
        <button type="button" aria-label="Закрыть окно"
                className="popup__close-button" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default PopupWithForm;
