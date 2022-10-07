const Card = (props) => {
	const handleCardClick = () => {
		props.onCardClick(props.card);
	};

	return (
		<div>
			<li className="cards">
				<button
					aria-label="удалить карту"
					className="cards__delete"
					onClick={props.onCardDelete}
				></button>
				<img
					src={props.card.link}
					alt={props.card.name}
					id=""
					className="cards__image"
					onClick={handleCardClick}
				/>
				<div className="cards__text">
					<h2 className="cards__title">{props.card.name}</h2>
					<div className="cards__like_container">
						<button
							className="cards__like"
							type="button"
							aria-label="поставить лайк"
						></button>
						<span className="cards__like_count">
							{props.card.likes.length}
						</span>
					</div>
				</div>
			</li>
		</div>
	);
};

export default Card;
