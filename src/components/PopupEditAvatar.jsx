import PopupWithForm from "./PopupWithForm";

const PopupEditAvatar = (props) => {
	return (
		<div>
			<PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" children={
				<>
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
				</>

			} isOpen={props.isOpen} onClose={props.onClose}/>
		</div>
	);
};

export default PopupEditAvatar;