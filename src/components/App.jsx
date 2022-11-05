import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupAddPlace from './PopupAddPlace';
import PopupEditProfile from './PopupEditProfile';
import PopupEditAvatar from './PopupEditAvatar';
import React, {useEffect, useState} from 'react';
import PopupDeleteConfirm from './PopupDeleteConfirm';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({state: false, src: ''});
	const [cards, setCards] = useState([]);
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([user, cards]) => {
				setCurrentUser(user);
				setCards(cards);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleEditProfileClick = () => {
			setIsEditProfilePopupOpen(true);
		},
		handleAddPlaceClick = () => {
			setIsAddPlacePopupOpen(true);
		},
		handleEditAvatarClick = () => {
			setIsEditAvatarPopupOpen(true);
		},
		handleCardClick = (props) => {
			setSelectedCard({state: true, src: props.link, name: props.name});
		};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsConfirmPopupOpen(false);
		setSelectedCard({state: false, src: ''});
	};

	const handleUpdateUser = (data) => {
		api.editUserInfo(data)
			.then((newUser) => {
				setCurrentUser(newUser)
				closeAllPopups()
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`)
			})
	}

	const handleUpdateAvatar = (data) => {
		api.changeAvatar(data)
			.then((newAvatar) => {
				setCurrentUser(newAvatar)
				closeAllPopups()
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`)
			})
	}

	const handleCardDelete = (card) => {
		api.deleteCard(card)
			.then(() => {
				setCards(cards => cards.filter((item) => item._id !== card));
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`)
			})
	}

	const handleAddPlaceSubmit = (item) => {
		api.addCard(item)
			.then((newCard) => {
				setCards([newCard, ...cards]);
				closeAllPopups()
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`)
			})
	}

	const handleCardLike = (card) => {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		if (!isLiked) {
			api.addLike(card._id)
				.then((newCard) => {
					setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`)
				})
		} else {
			api.deleteLike(card._id)
				.then((newCard) => {
					setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`)
				})
		}
	}


	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="App">
				<Header/>
				<Main
					cards={cards}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					onCardDelete={handleCardDelete}
					onCardLike={handleCardLike}
				/>
				<Footer/>
				<PopupAddPlace
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}

				/>
				<PopupEditProfile
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<PopupEditAvatar
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
				/>

				<PopupDeleteConfirm
					isOpen={isConfirmPopupOpen}
					onClose={closeAllPopups}
				/>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
