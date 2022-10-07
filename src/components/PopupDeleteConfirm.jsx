import PopupWithForm from "./PopupWithForm";

const PopupDeleteConfirm = (props) => {
	return (
		<div>
			<PopupWithForm
			name="delete"
			title="Вы уверены?"
			button="Да"
			children={
				<>
				</>
			}
			isOpen={props.isOpen}
			onClose={props.onClose}/>
		</div>
	);
};

export default PopupDeleteConfirm;