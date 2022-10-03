import React from 'react';

const PopupWithForm = (props) => {
	return (
		<div>
			<div className={`popup popup_${props.name}`}>
				<div className="popup__container popup__container_add">
					<button
						className="popup__close popup__close_add"
						type="button"
						aria-label="закрыть окно"
						onClick={onClose}
					></button>

					<h2 className="popup__title">${props.title}</h2>

					<form
						className={`popup__form popup__form_${props.name}`}
						name="add-photo"
						noValidate
					>
						{props.children}

						<button
							disabled
							className="popup__save-button"
							type="submit"
							aria-label="Создать"
						>
							Создать
						</button>
					</form>
				</div>
			</div>
			
		</div>
	);
};

export default PopupWithForm;