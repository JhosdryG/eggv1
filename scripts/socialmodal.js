const socialModal = document.getElementById("socialModal");

// if (localStorage.getItem("modal")) socialModal.classList.add("no-show");
// else localStorage.setItem("modal", "true");

document.getElementById("closeModal").addEventListener("click", () => {
  socialModal.classList.add("no-show");
});
