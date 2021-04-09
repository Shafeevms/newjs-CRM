export const RemoveClient = () => (
  `<div aria-modal="change-window" class="change__data">
    <div class="modal__container modal__container-new">
      <h2 class="modal__title">Удалить клиента</h2>
      <p class="modal__text">
        Вы действительно хотите удалить данного клиента?
      </p>
      <button class="btn__save-client" data-remove="del">Удалить</button>
      <button class="btn__del-client" data-remove="cancel">Отмена</button>
    </div>
  </div>`
);
