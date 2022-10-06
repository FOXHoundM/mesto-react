const ImagePopup = (props) => {
	return (
		<div>
			<div className="popup popup_image">
				<div className="popup__container popup__container_image">
					<button
						className="popup__close popup__close_image"
						type="button"
						aria-label="закрыть окно"
						onClose={props.onClose}
					></button>

					<img src="src/components/App" alt="#" className="popup__image"/>

					<p className="popup__subtitle"></p>
				</div>
			</div>
		</div>
	);
};

export default ImagePopup;