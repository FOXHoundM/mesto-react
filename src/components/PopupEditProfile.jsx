import PopupWithForm from './PopupWithForm';

const PopupEditProfile = (props) => {
	return (
		<div>
			<PopupWithForm
				name="profile"
				title="Редактировать профиль"
				button="Сохранить"
				children={
					<>
						<input
							aria-label="Редактировать имя"
							type="text"
							className="popup__input popup__input_type_name"
							name="name"
							id="edit-name"
							placeholder=""
							required
							minLength="2"
							maxLength="40"
						/>
						<span className="popup__error edit-name-error"></span>

						<input
							aria-label="Редактировать профессию"
							type="text"
							className="popup__input popup__input_type_prof"
							name="job"
							id="edit-profession"
							placeholder=""
							required
							minLength="2"
							maxLength="200"
						/>
						<span className="popup__error edit-profession-error"></span>
					</>
				}
				isOpen={props.isOpen}
				onClose={props.onClose}
			/>
		</div>
	);
};

export default PopupEditProfile;
