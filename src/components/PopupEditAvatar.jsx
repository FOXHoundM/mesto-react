import PopupWithForm from './PopupWithForm';

const PopupEditAvatar = ({isOpen, onClose}) => {
	return (
		<div>
			<PopupWithForm
				name="avatar"
				title="Обновить аватар"
				button="Сохранить"
				isOpen={isOpen}
				onClose={onClose}
			>
				<input
					aria-label="Обновить аватар"
					type="url"
					className="popup__input popup__input_type_avatar"
					name="avatar"
					id="avatar-link"
					placeholder="Ссылка"
					required
				/>

				<span className="popup__error avatar-link-error"></span>
			</PopupWithForm>
		</div>
	);
};

export default PopupEditAvatar;
