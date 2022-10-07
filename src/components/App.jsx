import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupAddPlace from './PopupAddPlace';
import PopupEditProfile from './PopupEditProfile';
import PopupEditAvatar from './PopupEditAvatar';
import React, { useState } from 'react';
import PopupDeleteConfirm from './PopupDeleteConfirm';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({ state: false, src: '' });

	const handleEditProfileClick = () => {
			setIsEditProfilePopupOpen(true);
		},
		handleAddPlaceClick = () => {
			setIsAddPlacePopupOpen(true);
		},
		handleEditAvatarClick = () => {
			setIsEditAvatarPopupOpen(true);
		},
		handleDeleteConfirmClick = () => {
			setIsConfirmPopupOpen(true);
		},
		handleCardClick = (props) => {
			setSelectedCard({ state: true, src: props.link, name: props.name });
		};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsConfirmPopupOpen(false);
		setSelectedCard({ state: false, src: '' });
	};

	return (
		<div className="App">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
				onCardDelete={handleDeleteConfirmClick}
			/>
			<Footer />
			<PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
			<PopupEditProfile
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			/>
			<PopupEditAvatar
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			/>
			<ImagePopup card={selectedCard} onClose={closeAllPopups} />

			<PopupDeleteConfirm
				isOpen={isConfirmPopupOpen}
				onClose={closeAllPopups}
			/>
		</div>
	);
}

export default App;
