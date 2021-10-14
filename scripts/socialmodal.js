const socialModal = document.getElementById("socialModal");

if (sessionStorage.getItem("modal")) socialModal.classList.add("no-show");
else sessionStorage.setItem("modal", "true");

document.getElementById("closeModal").addEventListener("click", () => {
  socialModal.classList.add("no-show");
});
