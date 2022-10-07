import PopupWithForm from './PopupWithForm';

const PopupAddPlace = (props) => {
	return (
		<div>
			<PopupWithForm
				name="add"
				title="Новое место"
				button="Создать"
				children={
					<>
						<input
							aria-label="Название"
							type="text"
							className="popup__input popup__input_type_title"
							name="name"
							id="add-title"
							placeholder="Название "
							required
							minLength="2"
							maxLength="30"
						/>
						<span className="popup__error add-title-error"></span>

						<input
							aria-label="Ссылка на картинку"
							type="url"
							className="popup__input popup__input_type_link"
							name="link"
							id="add-link"
							placeholder="Ссылка на картинку "
							required
						/>
						<span className="popup__error add-link-error"></span>
					</>
				}
				isOpen={props.isOpen}
				onClose={props.onClose}
			/>
		</div>
	);
};

export default PopupAddPlace;
