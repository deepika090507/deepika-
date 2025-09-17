// Example: Alert when user clicks a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Navigating to section: " + link.textContent);
  });
});