import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupAddPlace from "./PopupAddPlace";
import PopupEditProfile from "./PopupEditProfile";
import PopupEditAvatar from "./PopupEditAvatar";
import React, {useState} from "react";

function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
	// const [selectedCard, setSelectedCard] = useState(null)


	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true)
	}, handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true)
	}, handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true)
	};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false)
		setIsAddPlacePopupOpen(false)
		setIsEditAvatarPopupOpen(false)
	}

	return (<div className="App">
		<Header/>
		<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick} />
		<Footer/>

		<PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
		<PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
		<PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
		<ImagePopup onClose={closeAllPopups}/>

		<div className="popup popup_delete">
			<div className="popup__container popup__container_delete">
				<button
					className="popup__close popup__close_delete"
					type="button"
					aria-label="закрыть окно"
				></button>

				<h2 className="popup__title popup__title_delete">Вы уверены?</h2>

				<form
					className="popup__form popup__form_delete"
					noValidate
				>

					<button
						className="popup__save-button"
						type="submit"
						aria-label="Да"
					>
						Да
					</button>
				</form>

			</div>
		</div>


		{/*<template className="template">*/}

		{/*	<li className="cards">*/}
		{/*		<button aria-label="удалить карту" className="cards__delete"></button>*/}
		{/*		<img src="src/components/App" alt="" id="" className="cards__image"/>*/}
		{/*		<div className="cards__text">*/}
		{/*			<h2 className="cards__title"></h2>*/}
		{/*			<div className="cards__like_container">*/}
		{/*				<button*/}
		{/*					className="cards__like"*/}
		{/*					type="button"*/}
		{/*					aria-label="поставить лайк"*/}
		{/*				></button>*/}
		{/*				<span className="cards__like_count"></span>*/}
		{/*			</div>*/}
		{/*		</div>*/}
		{/*	</li>*/}
		{/*</template>*/}

	</div>);
}

export default App;
