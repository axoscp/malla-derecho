// -------------------
// MALLA: datos (5º - 12º ciclo) — extraídos de tu doc (2015-1)
// -------------------
const malla = [
  // ciclo 5
  {
    ciclo: "5° CICLO",
    cursos: [
      { id: "IJC", name: "Introducción a las Ciencias Jurídicas", credits:5 },
      { id: "IDP1", name: "Instituciones del Derecho Privado", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "ANT", name: "Antropología y Derecho", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "TCMS", name: "Teoría del Conflicto y Mecanismos de Solución", credits:2, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "SRG", name: "Sistema Romano Germánico y Derecho Anglosajón", credits:2, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "DC1", name: "Derecho Constitucional I", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "MODELOS", name: "Modelos de Abogado y Excelencia Profesional", credits:1, prereq: ["Introducción a las Ciencias Jurídicas"] }
    ]
  },

  // ciclo 6
  {
    ciclo: "6° CICLO",
    cursos: [
      { id: "REALES", name: "Reales", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Instituciones del Derecho Privado","Sistema Romano Germánico y Derecho Anglosajón"] },
      { id: "IDP2", name: "Instituciones del Derecho Privado 2", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Instituciones del Derecho Privado","Sistema Romano Germánico y Derecho Anglosajón"] },
      { id: "DFIC", name: "Derechos Fundamentales e Interpretación Constitucional", credits:4, prereq: ["Introducción a las Ciencias Jurídicas","Derecho Constitucional I"] },
      { id: "CONT", name: "Derecho Contable", credits:2, prereq: ["Introducción a las Ciencias Jurídicas"] },
      { id: "IDS", name: "Instituciones del Derecho Sancionador", credits:2, prereq: ["Introducción a las Ciencias Jurídicas","Derecho Constitucional I"] },
      { id: "COMJ", name: "Comunicación Jurídica Eficaz", credits:2, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional"] },
      { id: "ETICA", name: "Ética y Responsabilidad Profesional", credits:3, prereq: ["Introducción a las Ciencias Jurídicas","Modelos de Abogado y Excelencia Profesional","Teoría del Conflicto y Mecanismos de Solución"] },
      { id: "PSI", name: "Psicología y Derecho", credits:3, prereq: ["Introducción a las Ciencias Jurídicas"] }
    ]
  },

  // ciclo 7
  {
    ciclo: "7° CICLO",
    cursos: [
      { id: "CONTR", name: "Contratos", credits:3, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Instituciones del Derecho Privado 2","Reales"] },
      { id: "FAM", name: "Familia", credits:3, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Instituciones del Derecho Privado 2"] },
      { id: "DA1", name: "Derecho Administrativo I", credits:3, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Instituciones del Derecho Privado 2","Instituciones del Derecho Sancionador","Teoría del Conflicto y Mecanismos de Solución"] },
      { id: "DLG", name: "Derecho Laboral General", credits:4, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Antropología y Derecho","Teoría del Conflicto y Mecanismos de Solución"] },
      { id: "IM", name: "Instituciones del Derecho Mercantil", credits:4, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Instituciones del Derecho Privado 2"] },
      { id: "TD", name: "Teoría del Delito", credits:3, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Instituciones del Derecho Sancionador"] },
      { id: "ARG", name: "Argumentación Jurídica", credits:2, prereq: ["Derechos Fundamentales e Interpretación Constitucional","Teoría del Conflicto y Mecanismos de Solución"] }
    ]
  },

  // ciclo 8
  {
    ciclo: "8° CICLO",
    cursos: [
      { id: "OBL", name: "Obligaciones", credits:3, prereq: ["Contratos"] },
      { id: "DA2", name: "Derecho Administrativo 2", credits:3, prereq: ["Derecho Administrativo I","Contratos"] },
      { id: "SJFP", name: "Sistema de Justicia y Fundamentos Constitucionales del Proceso", credits:3, prereq: ["Teoría del Conflicto y Mecanismos de Solución","Contratos"] },
      { id: "DLE", name: "Derecho Laboral Especial", credits:3, prereq: ["Derecho Laboral General","Contratos"] },
      { id: "SA", name: "Sociedades Anónimas", credits:3, prereq: ["Instituciones del Derecho Mercantil","Derecho Contable","Contratos"] },
      { id: "DELITOS_V", name: "Delitos Contra la Vida, el Cuerpo, la Salud, el Honor, el Patrimonio y la Libertad", credits:3, prereq: ["Teoría del Delito"] },
      { id: "TRIBUT", name: "Derecho Tributario General", credits:3, prereq: ["Derecho Contable","Derecho Administrativo I"] }
    ]
  },

  // ciclo 9
  {
    ciclo: "9° CICLO",
    cursos: [
      { id: "RESPCIV", name: "Responsabilidad Civil", credits:3, prereq: ["Obligaciones"] },
      { id: "SUC", name: "Sucesiones", credits:2, prereq: ["Familia","Obligaciones"] },
      { id: "POST", name: "Postulación del Proceso", credits:3, prereq: ["Obligaciones","Sistema de Justicia y Fundamentos Constitucionales del Proceso"] },
      { id: "DIPUB", name: "Derecho Internacional Público", credits:3, prereq: ["Obligaciones","Sistema de Justicia y Fundamentos Constitucionales del Proceso"] },
      { id: "FIL", name: "Filosofía del Derecho", credits:3, prereq: ["Teoría del Delito","Argumentación Jurídica","Obligaciones"] },
      { id: "IMPEX", name: "Impuesto a la Renta e Impuesto General a las Ventas", credits:4, prereq: ["Derecho Tributario General","Sociedades Anónimas","Derecho Laboral Especial"] },
      { id: "TALLINV", name: "Taller de Investigación Jurídica", credits:3, prereq: ["CREDITOS_PLAN_84"] } // requisito: créditos en plan: 84
    ]
  },

  // ciclo 10
  {
    ciclo: "10° CICLO",
    cursos: [
      { id: "DIPRIV", name: "Derecho Internacional Privado", credits:3, prereq: ["Sociedades Anónimas","Postulación del Proceso","Derecho Internacional Público","Responsabilidad Civil","Sucesiones"] },
      { id: "CTIP", name: "Contratos Típicos", credits:2, prereq: ["Obligaciones"] },
      { id: "PRUEB", name: "Teoría de la Prueba", credits:2, prereq: ["Argumentación Jurídica","Postulación del Proceso","Teoría del Delito"] },
      { id: "REV", name: "Revisión e Impugnación Judicial", credits:2, prereq: ["Argumentación Jurídica","Postulación del Proceso","Teoría del Delito"] },
      { id: "DDHH", name: "Derechos Humanos", credits:3, prereq: ["Derecho Internacional Público","Delitos Contra la Vida, el Cuerpo, la Salud, el Honor, el Patrimonio y la Libertad"] },
      { id: "PENCO", name: "Derecho Penal Económico", credits:2, prereq: ["Impuesto a la Renta e Impuesto General a las Ventas","Teoría del Delito"] },
      { id: "PPEN", name: "Derecho Procesal Penal", credits:3, prereq: ["Delitos Contra la Vida, el Cuerpo, la Salud, el Honor, el Patrimonio y la Libertad","Postulación del Proceso"] },
      { id: "ELECT10", name: "Electivo de la Especialidad o de Otra Área", credits:3, prereq: ["CREDITOS_PLAN_84"] }
    ]
  },

  // ciclo 11
  {
    ciclo: "11° CICLO",
    cursos: [
      { id: "TUTELA", name: "Tutela Ejecutiva y Protección Cautelar", credits:3, prereq: ["Responsabilidad Civil","Revisión e Impugnación Judicial","Teoría de la Prueba"] },
      { id: "CLINICA", name: "Clínica Jurídica y Responsabilidad Social", credits:3, prereq: ["NIVEL_9"] }, // NIVEL: 9 (informativo)
      { id: "SEMININV", name: "Seminario de Investigación Jurídica", credits:2, prereq: ["Taller de Investigación Jurídica"] },
      { id: "SEMININT", name: "Seminario de Integración", credits:3, prereq: ["CREDITOS_PLAN_105"] },
      { id: "ELECT11", name: "Electivo de la Especialidad o de otra Área", credits:6, prereq: ["CREDITOS_PLAN_84"] },
      { id: "CURINT11", name: "Curso Integrador", credits:3, prereq: ["CREDITOS_PLAN_84"] }
    ]
  },

  // ciclo 12
  {
    ciclo: "12° CICLO",
    cursos: [
      { id: "ASESINV", name: "Asesoría en Investigación", credits:2, prereq: ["Seminario de Investigación Jurídica"] },
      { id: "SEMININT2", name: "Seminario de Integración (Total de Cursos 1)", credits:3, prereq: ["CREDITOS_PLAN_105"] },
      { id: "ELECT12", name: "Electivo de la Especialidad o de otra Área (Total de cursos 4)", credits:12, prereq: ["CREDITOS_PLAN_84"] },
      { id: "CURINT12", name: "Curso integrador (Total de cursos 1)", credits:3, prereq: ["CREDITOS_PLAN_84"] }
    ]
  }
];

// -------------------
// Utilities: storage, state
// -------------------
const STORAGE_KEY = "pucp_malla_2015_state_v1";
let state = {
  doneIds: [], // array de course ids completadas
};

// load saved state
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) state = JSON.parse(raw);
} catch(e){ console.warn(e) }

// helper: find course object by name or id
function findCourseByName(name){
  for (const col of malla){
    for (const c of col.cursos){
      if (c.name === name || c.id === name) return c;
    }
  }
  return null;
}
function findCourseById(id){
  for (const col of malla){
    for (const c of col.cursos){
      if (c.id === id) return c;
    }
  }
  return null;
}

// compute completed credits
function computeCompletedCredits(){
  let sum = 0;
  for (const id of state.doneIds){
    const c = findCourseById(id);
    if (c) sum += c.credits || 0;
  }
  return sum;
}

// check if requirement token is a credit requirement string like CREDITOS_PLAN_84
function parseCreditReq(token){
  // tokens we used: CREDITOS_PLAN_84, CREDITOS_PLAN_105
  if (!token) return null;
  const m = token.match(/CREDITOS_PLAN_(\d+)/);
  if (m) return Number(m[1]);
  return null;
}

// check if token is NIVEL requirement (we treat as informational)
function isNivelReq(token){
  return typeof token === "string" && token.startsWith("NIVEL_");
}

// check if token is course name present in malla
function isCourseReq(token){
  return !!findCourseByName(token);
}

// -------------------
// Render
// -------------------
const main = document.getElementById("mallaWrap");
const creditsDisplay = document.getElementById("creditsDone");
const resetBtn = document.getElementById("resetBtn");

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) }

function render(){
  main.innerHTML = "";
  // update credits
  creditsDisplay.textContent = computeCompletedCredits();

  for (const col of malla){
    const colEl = document.createElement("section");
    colEl.className = "col";

    const h = document.createElement("h2");
    h.textContent = col.ciclo;
    colEl.appendChild(h);

    for (const course of col.cursos){
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.id = course.id;

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = course.name;
      card.appendChild(title);

      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = `${course.credits} cr.`;
      card.appendChild(meta);

      // small prereq tag (if any)
      if (course.prereq && course.prereq.length){
        const reqsList = course.prereq.map(r => {
          // pretty formatting
          if (r === "CREDITOS_PLAN_84") return "Req: 84 créditos completados";
          if (r === "CREDITOS_PLAN_105") return "Req: 105 créditos completados";
          if (r.startsWith("NIVEL_")) return `Req: ${r.split("_")[1]}° nivel (informativo)`;
          return `Req: ${r}`;
        });
        const small = document.createElement("div");
        small.className = "small-req";
        small.textContent = reqsList.join(" • ");
        card.appendChild(small);
      }

      // badge state
      const badge = document.createElement("div");
      badge.className = "badge";
      // check availability
      const available = checkAvailability(course);
      if (!available.ok) {
        card.classList.add("blocked");
        badge.textContent = "Bloqueado";
      } else {
        card.classList.add("ready");
        badge.textContent = "Listo";
      }

      // if done
      if (state.doneIds.includes(course.id)){
        card.classList.remove("blocked","ready");
        card.classList.add("done");
        badge.textContent = "Completado";
      }

      card.appendChild(badge);

      // click handler: try toggle completion
      card.addEventListener("click", (e) => {
        // prevent clicking on inputs if any later
        e.preventDefault();
        // if already done -> unmark
        if (state.doneIds.includes(course.id)){
          state.doneIds = state.doneIds.filter(x => x !== course.id);
          saveState();
          render();
          return;
        }

        // check availability again before marking
        const chk = checkAvailability(course);
        if (!chk.ok){
          // show feedback: list unmet
          const msg = `No puedes activar este curso:\n• ${chk.unmet.map(x => x).join("\n• ")}`;
          alert(msg);
          return;
        }

        // mark done
        state.doneIds.push(course.id);
        saveState();
        render();
      });

      colEl.appendChild(card);
    }

    main.appendChild(colEl);
  }
}

// returns {ok:bool, unmet: []} — unmet are human strings
function checkAvailability(course){
  const unmet = [];
  const completedCredits = computeCompletedCredits();

  if (!course.prereq || course.prereq.length === 0){
    return { ok:true, unmet:[] };
  }

  for (const r of course.prereq){
    // credit requirement like CREDITOS_PLAN_84
    const cnum = parseCreditReq(r);
    if (cnum){
      if (completedCredits < cnum){
        unmet.push(`${cnum} créditos (tienes ${completedCredits})`);
      }
      continue;
    }

    if (isNivelReq(r)){
      // treat as informational; we do not block but include note
      // if you want to block, change here
      continue;
    }

    // if course name present in malla
    const cobj = findCourseByName(r);
    if (cobj){
      if (!state.doneIds.includes(cobj.id)){
        // unmet course
        unmet.push(`${r}`);
      }
      continue;
    }

    // otherwise not recognized: include as informational
    // e.g. "Requisitos propios de cada curso electivo"
    // we will NOT enforce unknown text; but show it in unmet (informative)
    // better: treat unknown strings as informational and not block
    // So skip them.
  }

  return { ok: unmet.length === 0, unmet };
}

// reset
resetBtn.addEventListener("click", () => {
  if (!confirm("¿Borrar todo el progreso guardado?")) return;
  state.doneIds = [];
  saveState();
  render();
});

// initial render
render();
