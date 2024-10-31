function showMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.classList.toggle('hidden');
    hiddenMessage.style.display = hiddenMessage.style.display === 'none' ? 'block' : 'none';
}