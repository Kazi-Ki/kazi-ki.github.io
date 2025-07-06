const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');

function openModal() {
  modalOverlay.classList.add('active');
  modal.style.display = 'block';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
