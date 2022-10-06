const PopupWithForm = (props) => {
	return (
		<div>
			<div className={`popup popup_${props.name} ${props.isOpen ?('popup_opened') :('')}`}>
				<div className="popup__container popup__container_add">
					<button
						className="popup__close popup__close_add"
						type="button"
						aria-label="закрыть окно"
						onClick={props.onClose}
					></button>

					<h2 className="popup__title">{props.title}</h2>

					<form
						className={`popup__form`}
						name={props.name}
						noValidate
					>
						{props.children}

						<button
							disabled
							className="popup__save-button"
							type="submit"
							aria-label={`${props.button}`}
						>
							{props.button}
						</button>
					</form>
				</div>
			</div>
			
		</div>
	);
};

export default PopupWithForm;