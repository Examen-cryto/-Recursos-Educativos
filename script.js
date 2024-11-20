// script.js
const resourceForm = document.getElementById("resourceForm");
const resourceList = document.getElementById("resourceList");

resourceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const resourceName = document.getElementById("resourceName").value.trim();
  const resourceLink = document.getElementById("resourceLink").value.trim();
  const resourceDescription = document.getElementById("resourceDescription").value.trim();

  if (!resourceName || !resourceDescription) {
    alert("Por favor, completa el nombre y la descripción del recurso.");
    return;
  }

  // Crear un nuevo elemento de recurso
  const newResource = document.createElement("li");
  newResource.innerHTML = `
    <div class="details">
      <strong>${resourceName}</strong><br>
      ${resourceLink ? `<a href="${resourceLink}" target="_blank">Enlace al recurso</a><br>` : ""}
      <small>${resourceDescription}</small>
    </div>
    <button class="delete-button">Eliminar</button>
  `;

  // Agregar funcionalidad para eliminar
  const deleteButton = newResource.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    if (confirm(`¿Estás seguro de eliminar el recurso: ${resourceName}?`)) {
      newResource.remove();
    }
  });

  // Agregar el recurso a la lista
  resourceList.appendChild(newResource);

  // Limpiar el formulario
  resourceForm.reset();
});
