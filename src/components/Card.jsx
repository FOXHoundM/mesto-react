const Card = ({card, onCardClick, onCardDelete}) => {
	const handleCardClick = () => {
		onCardClick(card);
	};

	return (
		<div>
			<li className="cards">
				<button
					aria-label="удалить карту"
					className="cards__delete"
					onClick={onCardDelete}
				></button>
				<img
					src={card.link}
					alt={card.name}
					id=""
					className="cards__image"
					onClick={handleCardClick}
				/>
				<div className="cards__text">
					<h2 className="cards__title">{card.name}</h2>
					<div className="cards__like_container">
						<button
							className="cards__like"
							type="button"
							aria-label="поставить лайк"
						/>
						<span className="cards__like_count">
							{card.likes.length}
						</span>
					</div>
				</div>
			</li>
		</div>
	);
};

export default Card;
