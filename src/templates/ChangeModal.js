// изменить и удалить клиента

export const ChangeModal = ({id, name, surname, lastName}) => (
  `
  <button class="close-modal"></button>
  <div aria-modal="change-window" class="change__data">
    <div class="modal__container">
      <div class="title__wrapper">
        <h2 class="modal__title">Изменить данные</h2>
        <span class="modal__id">${id}</span>
      </div>
      <form action="#" class="modal__form-input">
        <label class="input-descr" for="surname">Фамилия*
        </label>
        <input type="text" class="modal__input" id="surname" value=${surname}>
        <label class="input-descr" for="name">Имя*
        </label>
        <input type="text" class="modal__input" id="name" value=${name}>
        <label class="input-descr" for="lastname">Отчество
        </label>
        <input type="text" class="modal__input" id="lastname" value=${lastName}>
      </form>
    </div>
    <div class="add__contact">
      <ul class="modal__form-add-social add-social d-none">
      <!-- сюда вставляем ItemOfSocialContacts -->
      </ul>
      <button class="btn__add-contact"><img src="./img/add-contact.svg" alt="добавить контакт" class="add__contact-icon">Добавить контакт</button>
    </div>
    <button class="btn__save-client">Сохранить</button>
    <button class="btn__del-client">Удалить клиента</button>
  </div>`
)

// нужно разобраться с классами
