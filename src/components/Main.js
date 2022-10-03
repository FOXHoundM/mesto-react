const Main = () => {
	function handleEditProfileClick() {
		document.querySelector('.popup_edit').classList.add('popup_opened')
	}

	function handleAddPlaceClick() {
		document.querySelector('.popup_add').classList.add('popup_opened')
	}

	function handleEditAvatarClick() {
		document.querySelector('.popup_avatar').classList.add('popup_opened')
	}

	return (
		<div>
			<main className="content">
				<section className="profile">

					<div className="profile__avatar" onClick={handleEditAvatarClick}></div>

					<div className="profile__info">
						<h1 className="profile__title">Жак-Ив Кусто</h1>
						<p className="profile__subtitle">Исследователь</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
							onClick={handleEditProfileClick}
						></button>

					</div>

					<button
						className="profile__add-button"
						type="button"
						aria-label="Добавить фото"
						onClick={handleAddPlaceClick}
					></button>
				</section>

				<section className="elements">
					<ul className="elements__item"></ul>
				</section>
			</main>

		</div>
	);
};

export default Main;