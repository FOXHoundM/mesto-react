import React, { useEffect, useState } from 'react';
import Card from './Card';
import Api from "../utils/Api";

const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-50',
	headers: {
		authorization: '1d5fb42f-083e-4754-bc11-0941caf4871f',
		'Content-type': 'application/json',
	},
});

const Main = (props) => {
	const [userName, setUserName] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getUserInfo()
			.then((data) => {
				setUserName(data);
				setUserDescription(data);
				setUserAvatar(data);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}, []);

	useEffect(() => {
		api.getInitialCards()
			.then((res) => {
				setCards(res);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}, []);

	return (
		<div>
			<main className="content">
				<section className="profile">
					<div
						className="profile__avatar"
						onClick={props.onEditAvatar}
						style={{ backgroundImage: `url(${userAvatar.avatar})` }}
					></div>

					<div className="profile__info">
						<h1 className="profile__title">{userName.name}</h1>
						<p className="profile__subtitle">{userDescription.about}</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
							onClick={props.onEditProfile}
						></button>
					</div>

					<button
						className="profile__add-button"
						type="button"
						aria-label="Добавить фото"
						onClick={props.onAddPlace}
					></button>
				</section>

				<section className="elements">
					<ul className="elements__item">
						{cards.map((item) => (
							<Card
								key={item._id}
								card={item}
								onCardClick={props.onCardClick}
								onCardDelete={props.onCardDelete}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Main;
