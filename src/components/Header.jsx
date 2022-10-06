import logo from "../images/logo/logo-mesto.svg";

const Header = () => {
	return (
		<div>
			<header className="header">
				<img
					className="header__logo"
					src={logo}
					alt="логотип"
				/>
			</header>
		</div>
	);
};

export default Header;