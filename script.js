const malla = {
    "Ciclo 1": [
        "Introducción al Derecho",
        "Comunicación",
        "Matemática",
        "Historia"
    ],
    "Ciclo 2": [
        "Derecho Civil I",
        "Derecho Constitucional",
        "Lógica",
        "Redacción"
    ]
};

// --- No tocar --- //
const contenedor = document.getElementById("malla");

for (const ciclo in malla) {
    const caja = document.createElement("div");
    caja.className = "ciclo";

    const titulo = document.createElement("h2");
    titulo.textContent = ciclo;
    caja.appendChild(titulo);

    malla[ciclo].forEach(curso => {
        const div = document.createElement("div");
        div.className = "curso";
        div.textContent = curso;
        caja.appendChild(div);
    });

    contenedor.appendChild(caja);
}
