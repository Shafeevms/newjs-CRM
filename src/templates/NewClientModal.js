export const NewClientModal = () => (
  `
  <button class="close close-modal"></button>
  <div aria-modal="new-window" class="new-data">
    <div class="modal__container">
      <div class="title__wrapper">
        <h2 class="modal__title">Новый клиент</h2>
      </div>
      <form action="#" class="modal__form-input">
        <label class="input-descr" for="surname">Фамилия*
        </label>
        <input type="text" class="modal__input" id="surname" name="surname">
        <label class="input-descr" for="name">Имя*
        </label>
        <input type="text" class="modal__input" id="name" name="name">
        <label class="input-descr" for="lastname">Отчество
        </label>
        <input type="text" class="modal__input" id="lastname" name="lastname">
      </form>
    </div>
    <div class="add__contact">
      <ul class="modal__form-add-social add-social d-none">
      <!-- сюда вставляем ItemOfSocialContacts -->
      </ul>
      <button class="btn__add-contact"><img src="./img/add-contact.svg" alt="добавить контакт" class="add__contact-icon">Добавить контакт</button>
    </div>
    <button class="btn__save-client">Сохранить</button>
    <button class="close btn__del-client">Отмена</button>
  </div>`
);

