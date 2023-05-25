(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-thank-open]"),
    closeModalBtn: document.querySelector("[data-modal-thank-close]"),
    modal: document.querySelector("[data-thank-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();