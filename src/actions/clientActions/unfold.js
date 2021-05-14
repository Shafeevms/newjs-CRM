export const unfold = e => {
  const li = e.target.closest('li');
  const ul = e.target.closest('ul');
  ul.querySelectorAll('.d-none').forEach(element => {
    element.classList.remove('d-none');
  });
  li.remove();
};
