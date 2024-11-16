let currentPage = 1;
let formData = {
    datosPersonales: {},
    familiares: [],
    condicionesPreexistentes: [],
    internamientos: []
};

function nextPage() {
    document.getElementById(`page${currentPage}`).style.display = "none";
    currentPage++;
    document.getElementById(`page${currentPage}`).style.display = "block";
}

function addRelative() {
    const name = document.getElementById("relativeName").value;
    const relationship = document.getElementById("relationship").value;
    const age = document.getElementById("relativeAge").value;
    formData.familiares.push({ nombre: name, parentesco: relationship, edad: age });
    document.getElementById("relativeName").value = "";
    document.getElementById("relationship").value = "";
    document.getElementById("relativeAge").value = "";
}

function addCondition() {
    const condition = document.getElementById("condition").value;
    const duration = document.getElementById("duration").value;
    const unit = document.getElementById("durationUnit").value;
    formData.condicionesPreexistentes.push({ enfermedad: condition, tiempo: `${duration} ${unit}` });
    document.getElementById("condition").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("durationUnit").value = "días";
}

function addInternment() {
    const date = document.getElementById("date").value;
    const center = document.getElementById("medicalCenter").value;
    const diagnosis = document.getElementById("diagnosis").value;
    formData.internamientos.push({ fecha: date, centroMedico: center, diagnostico: diagnosis });
    document.getElementById("date").value = "";
    document.getElementById("medicalCenter").value = "";
    document.getElementById("diagnosis").value = "";
}

function showData() {
    formData.datosPersonales = {
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("lastName").value,
        edad: document.getElementById("age").value
    };

    const summary = document.getElementById("summary");
    summary.innerHTML = `<h3>Datos Personales</h3>`;
    summary.innerHTML += `<p>Nombre: ${formData.datosPersonales.nombre}</p>`;
    summary.innerHTML += `<p>Apellido: ${formData.datosPersonales.apellido}</p>`;
    summary.innerHTML += `<p>Edad: ${formData.datosPersonales.edad}</p>`;

    summary.innerHTML += `<h3>Familiares</h3>`;
    formData.familiares.forEach((f, index) => {
        summary.innerHTML += `<p>${f.nombre} (${f.parentesco}), ${f.edad} años</p>`;
    });

    summary.innerHTML += `<h3>Condiciones Pre-Existentes</h3>`;
    formData.condicionesPreexistentes.forEach((c, index) => {
        summary.innerHTML += `<p>${c.enfermedad}: ${c.tiempo}</p>`;
    });

    summary.innerHTML += `<h3>Internamientos</h3>`;
    formData.internamientos.forEach((i, index) => {
        summary.innerHTML += `<p>Fecha: ${i.fecha}, Centro: ${i.centroMedico}, Diagnóstico: ${i.diagnostico}</p>`;
    });
}

function editData() {
    document.getElementById("name").value = formData.datosPersonales.nombre || "";
    document.getElementById("lastName").value = formData.datosPersonales.apellido || "";
    document.getElementById("age").value = formData.datosPersonales.edad || "";

    if (formData.familiares.length > 0) {
        document.getElementById("relativeName").value = formData.familiares[0].nombre || "";
        document.getElementById("relationship").value = formData.familiares[0].parentesco || "";
        document.getElementById("relativeAge").value = formData.familiares[0].edad || "";
    }

    if (formData.condicionesPreexistentes.length > 0) {
        document.getElementById("condition").value = formData.condicionesPreexistentes[0].enfermedad || "";
        document.getElementById("duration").value = formData.condicionesPreexistentes[0].tiempo.split(" ")[0] || "";
        document.getElementById("durationUnit").value = formData.condicionesPreexistentes[0].tiempo.split(" ")[1] || "días";
    }

    if (formData.internamientos.length > 0) {
        document.getElementById("date").value = formData.internamientos[0].fecha || "";
        document.getElementById("medicalCenter").value = formData.internamientos[0].centroMedico || "";
        document.getElementById("diagnosis").value = formData.internamientos[0].diagnostico || "";
    }

    document.getElementById(`page5`).style.display = "none";
    document.getElementById(`page1`).style.display = "block";
    currentPage = 1;
}
