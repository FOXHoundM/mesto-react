import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <ImagePopup/>



      <div className="popup popup_add">
        <div className="popup__container popup__container_add">
          <button
            className="popup__close popup__close_add"
            type="button"
            aria-label="закрыть окно"
          ></button>

          <h2 className="popup__title">Новое место</h2>

          <form
            className="popup__form popup__form_add"
            name="add-photo"
            noValidate
          >
            <input
              aria-label="Название"
              type="text"
              className="popup__input popup__input_type_title"
              name="name"
              id="add-title"
              placeholder="Название "
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error add-title-error"></span>

            <input
              aria-label="Ссылка на картинку"
              type="url"
              className="popup__input popup__input_type_link"
              name="link"
              id="add-link"
              placeholder="Ссылка на картинку "
              required
            />
            <span className="popup__error add-link-error"></span>

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


      <div className="popup popup_edit">
        <div className="popup__container popup__container_edit">
          <button
            className="popup__close popup__close_edit"
            type="button"
            aria-label="закрыть окно"
          ></button>

          <h2 className="popup__title">Редактировать профиль</h2>

          <form
            className="popup__form popup__form_edit"
            name="edit-profile"
            noValidate
          >
            <input
              aria-label="Редактировать имя"
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              id="edit-name"
              placeholder=""
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error edit-name-error"></span>

            <input
              aria-label="Редактировать профессию"
              type="text"
              className="popup__input popup__input_type_prof"
              name="job"
              id="edit-profession"
              placeholder=""
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error edit-profession-error"></span>

            <button
              disabled
              className="popup__save-button"
              type="submit"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>





      <div className="popup popup_avatar">
        <div className="popup__container popup__container_avatar">
          <button
            className="popup__close popup__close_avatar"
            type="button"
            aria-label="закрыть окно"
          ></button>

          <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>

          <form
            className="popup__form popup__form_avatar"
            name="edit-avatar"
            noValidate
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

            <button
              disabled
              className="popup__save-button"
              type="submit"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>


      <div className="popup popup_delete">
        <div className="popup__container popup__container_delete">
          <button
            className="popup__close popup__close_delete"
            type="button"
            aria-label="закрыть окно"
          ></button>

          <h2 className="popup__title popup__title_delete">Вы уверены?</h2>

          <form
            className="popup__form popup__form_delete"
            noValidate
          >

            <button
              className="popup__save-button"
              type="submit"
              aria-label="Да"
            >
              Да
            </button>
          </form>

        </div>
      </div>


      <template className="template">
        <li className="cards">
          <button aria-label="удалить карту" className="cards__delete"></button>
          <img src="src/components/App" alt="" id="" className="cards__image"/>
          <div className="cards__text">
            <h2 className="cards__title"></h2>
            <div className="cards__like_container">
              <button
                className="cards__like"
                type="button"
                aria-label="поставить лайк"
              ></button>
              <span className="cards__like_count"></span>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
