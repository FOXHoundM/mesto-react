const ImagePopup = (props) => {
	return (
		<div>
			<div
				className={`popup popup_image ${
					props.card.state ? 'popup_opened' : ''
				}`}
			>
				<div className="popup__container popup__container_image">
					<button
						className="popup__close popup__close_image"
						type="button"
						aria-label="закрыть окно"
						onClick={props.onClose}
					></button>

					<img src={props.card.src} alt="#" className="popup__image" />

					<p className="popup__subtitle">{props.card.name}</p>
				</div>
			</div>
		</div>
	);
};

export default ImagePopup;
