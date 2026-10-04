/* =========================================================
   VIRIATHUS
   GESTIÓN DE INVENTARIO
   Versión de prueba sin conexión a Excel
========================================================= */


/* =========================================================
   DATOS DE PRUEBA
========================================================= */

let inventory = [

  {
    id: 1,

    sku: "VIR-0001",

    name: "Espejo veneciano",

    category: "Espejos",

    period: "Siglo XIX",

    origin: "Italia",

    material: "Cristal y madera",

    height: 125,

    width: 85,

    depth: 8,

    weight: 18,

    description:
      "Espejo veneciano antiguo con marco ornamentado.",

    restoration:
      "Sin restauración",

    restorer: "",

    status:
      "Listo para tienda",

    price:
      85000,

    photos: []

  },


  {
    id: 2,

    sku: "VIR-0002",

    name: "Cómoda francesa",

    category: "Mobiliario",

    period: "Siglo XIX",

    origin: "Francia",

    material: "Madera de nogal",

    height: 92,

    width: 118,

    depth: 52,

    weight: 45,

    description:
      "Cómoda francesa antigua de tres cajones.",

    restoration:
      "Restauración interna",

    restorer: "",

    status:
      "Revisión interiorismo",

    price:
      125000,

    photos: []

  },


  {
    id: 3,

    sku: "VIR-0003",

    name: "Candil de bronce",

    category: "Iluminación",

    period: "Siglo XVIII",

    origin: "España",

    material: "Bronce",

    height: 78,

    width: 42,

    depth: 42,

    weight: 12,

    description:
      "Candil antiguo de bronce con seis brazos.",

    restoration:
      "Restaurador externo",

    restorer:
      "Restaurador de prueba",

    status:
      "En restauración",

    price:
      68000,

    photos: []

  }

];


/* =========================================================
   ESTADO DE LA APLICACIÓN
========================================================= */

let editingId = null;


/* =========================================================
   ELEMENTOS
========================================================= */

const homeScreen =
  document.getElementById("homeScreen");

const searchScreen =
  document.getElementById("searchScreen");

const formScreen =
  document.getElementById("formScreen");


const newPieceButton =
  document.getElementById("newPieceButton");

const editPieceButton =
  document.getElementById("editPieceButton");


const backFromSearch =
  document.getElementById("backFromSearch");

const backFromForm =
  document.getElementById("backFromForm");

const cancelForm =
  document.getElementById("cancelForm");


const searchInput =
  document.getElementById("pieceSearch");

const searchButton =
  document.getElementById("searchButton");

const searchResults =
  document.getElementById("searchResults");


const form =
  document.getElementById("pieceForm");


const formTitle =
  document.getElementById("formTitle");

const formEyebrow =
  document.getElementById("formEyebrow");

const formDescription =
  document.getElementById("formDescription");

const submitText =
  document.getElementById("submitText");


const photosInput =
  document.getElementById("photos");

const photoPreview =
  document.getElementById("photoPreview");


/* =========================================================
   CAMBIAR DE PANTALLA
========================================================= */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(function (element) {

      element.classList.remove("active");

    });


  screen.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   NUEVA PIEZA
========================================================= */

newPieceButton.addEventListener(
  "click",
  function () {

    editingId = null;

    resetForm();

    prepareNewForm();

    showScreen(formScreen);

  }
);


/* =========================================================
   EDITAR PIEZA
========================================================= */

editPieceButton.addEventListener(
  "click",
  function () {

    searchInput.value = "";

    renderSearchResults(inventory);

    showScreen(searchScreen);

  }
);


/* =========================================================
   VOLVER
========================================================= */

backFromSearch.addEventListener(
  "click",
  function () {

    showScreen(homeScreen);

  }
);


backFromForm.addEventListener(
  "click",
  function () {

    editingId = null;

    showScreen(homeScreen);

  }
);


cancelForm.addEventListener(
  "click",
  function () {

    editingId = null;

    showScreen(homeScreen);

  }
);


/* =========================================================
   PREPARAR FORMULARIO NUEVO
========================================================= */

function prepareNewForm() {

  formEyebrow.textContent =
    "NUEVA PIEZA";


  formTitle.textContent =
    "Registrar pieza";


  formDescription.textContent =
    "Completa la información de la pieza.";


  submitText.textContent =
    "Guardar pieza";

}


/* =========================================================
   PREPARAR FORMULARIO EDICIÓN
========================================================= */

function prepareEditForm() {

  formEyebrow.textContent =
    "EDITAR PIEZA";


  formTitle.textContent =
    "Modificar pieza";


  formDescription.textContent =
    "Actualiza la información de la pieza.";


  submitText.textContent =
    "Guardar cambios";

}


/* =========================================================
   RESET FORMULARIO
========================================================= */

function resetForm() {

  form.reset();

  photoPreview.innerHTML = "";

}


/* =========================================================
   CARGAR PIEZA
========================================================= */

function loadPiece(piece) {

  editingId =
    piece.id;


  prepareEditForm();


  document.getElementById("sku").value =
    piece.sku || "";


  document.getElementById("name").value =
    piece.name || "";


  document.getElementById("category").value =
    piece.category || "";


  document.getElementById("period").value =
    piece.period || "";


  document.getElementById("origin").value =
    piece.origin || "";


  document.getElementById("material").value =
    piece.material || "";


  document.getElementById("height").value =
    piece.height || "";


  document.getElementById("width").value =
    piece.width || "";


  document.getElementById("depth").value =
    piece.depth || "";


  document.getElementById("weight").value =
    piece.weight || "";


  document.getElementById("description").value =
    piece.description || "";


  document.getElementById("restoration").value =
    piece.restoration || "";


  document.getElementById("restorer").value =
    piece.restorer || "";


  document.getElementById("status").value =
    piece.status || "";


  document.getElementById("price").value =
    piece.price || "";


  photoPreview.innerHTML = "";


  if (piece.photos && piece.photos.length) {

    piece.photos.forEach(function (photo) {

      addPhotoPreview(photo);

    });

  }


  showScreen(formScreen);

}


/* =========================================================
   OBTENER DATOS DEL FORMULARIO
========================================================= */

function getFormData() {

  return {

    sku:
      document.getElementById("sku")
        .value
        .trim(),


    name:
      document.getElementById("name")
        .value
        .trim(),


    category:
      document.getElementById("category")
        .value,


    period:
      document.getElementById("period")
        .value
        .trim(),


    origin:
      document.getElementById("origin")
        .value
        .trim(),


    material:
      document.getElementById("material")
        .value
        .trim(),


    height:
      document.getElementById("height")
        .value,


    width:
      document.getElementById("width")
        .value,


    depth:
      document.getElementById("depth")
        .value,


    weight:
      document.getElementById("weight")
        .value,


    description:
      document.getElementById("description")
        .value
        .trim(),


    restoration:
      document.getElementById("restoration")
        .value,


    restorer:
      document.getElementById("restorer")
        .value
        .trim(),


    status:
      document.getElementById("status")
        .value,


    price:
      document.getElementById("price")
        .value,


    photos:
      []

  };

}


/* =========================================================
   GUARDAR FORMULARIO
========================================================= */

form.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    if (!form.checkValidity()) {

      form.reportValidity();

      return;

    }


    const formData =
      getFormData();


    /* ================================================
       EDITAR
    ================================================= */

    if (editingId !== null) {

      const index =
        inventory.findIndex(
          function (piece) {

            return piece.id === editingId;

          }
        );


      if (index !== -1) {

        const oldPiece =
          inventory[index];


        formData.id =
          oldPiece.id;


        /*
         * Mantener fotos existentes
         * si no se cargaron nuevas.
         */

        formData.photos =
          oldPiece.photos || [];


        inventory[index] =
          formData;

      }

    }


    /* ================================================
       NUEVO
    ================================================= */

    else {

      const newId =
        Date.now();


      formData.id =
        newId;


      inventory.push(formData);

    }


    /*
     * Simular guardado
     */

    alert(
      editingId !== null
        ? "La pieza fue actualizada correctamente."
        : "La pieza fue registrada correctamente."
    );


    editingId = null;


    showScreen(homeScreen);

  }
);


/* =========================================================
   BUSCAR
========================================================= */

searchButton.addEventListener(
  "click",
  function () {

    performSearch();

  }
);


searchInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      performSearch();

    }

  }
);


searchInput.addEventListener(
  "input",
  function () {

    performSearch();

  }
);


/* =========================================================
   EJECUTAR BÚSQUEDA
========================================================= */

function performSearch() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  if (!query) {

    renderSearchResults(inventory);

    return;

  }


  const results =
    inventory.filter(
      function (piece) {

        return (

          piece.sku
            .toLowerCase()
            .includes(query)

          ||

          piece.name
            .toLowerCase()
            .includes(query)

        );

      }
    );


  renderSearchResults(results);

}


/* =========================================================
   MOSTRAR RESULTADOS
========================================================= */

function renderSearchResults(results) {

  searchResults.innerHTML = "";


  if (!results.length) {

    searchResults.innerHTML = `

      <div class="empty-results">

        No encontramos ninguna pieza.

      </div>

    `;

    return;

  }


  results.forEach(
    function (piece) {

      const button =
        document.createElement("button");


      button.type =
        "button";


      button.className =
        "search-result";


      button.innerHTML = `

        <span class="search-result-info">

          <span class="search-result-sku">
            ${escapeHTML(piece.sku)}
          </span>

          <span class="search-result-name">
            ${escapeHTML(piece.name)}
          </span>

          <span class="search-result-status">
            ${escapeHTML(piece.status || "Sin estado")}
          </span>

        </span>

        <span class="action-arrow">
          →
        </span>

      `;


      button.addEventListener(
        "click",
        function () {

          loadPiece(piece);

        }
      );


      searchResults.appendChild(button);

    }
  );

}


/* =========================================================
   FOTOS
========================================================= */

photosInput.addEventListener(
  "change",
  function () {

    const files =
      Array.from(
        photosInput.files
      );


    files.forEach(
      function (file) {

        if (
          !file.type.startsWith("image/")
        ) {

          return;

        }


        const reader =
          new FileReader();


        reader.onload =
          function (event) {

            addPhotoPreview(
              event.target.result
            );

          };


        reader.readAsDataURL(file);

      }
    );


    /*
     * Permite volver a seleccionar
     * las mismas fotografías.
     */

    photosInput.value = "";

  }
);


/* =========================================================
   AGREGAR PREVIEW
========================================================= */

function addPhotoPreview(src) {

  const item =
    document.createElement("div");


  item.className =
    "photo-preview-item";


  const image =
    document.createElement("img");


  image.src =
    src;


  image.alt =
    "Fotografía de la pieza";


  item.appendChild(image);


  photoPreview.appendChild(item);

}


/* =========================================================
   SEGURIDAD
========================================================= */

function escapeHTML(value) {

  return String(value)

    .replaceAll("&", "&amp;")

    .replaceAll("<", "&lt;")

    .replaceAll(">", "&gt;")

    .replaceAll('"', "&quot;")

    .replaceAll("'", "&#039;");

}


/* =========================================================
   INICIO
========================================================= */

renderSearchResults(inventory);