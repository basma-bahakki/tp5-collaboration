
const invites = [
  { id: 1, nom: "Saloua L.", type: "ami", statut: "confirmé" },
  { id: 2, nom: "Jihan D.", type: "ami", statut: "en attente" },
  { id: 3, nom: "Pr. May A.", type: "enseignant", statut: "confirmé" },
  { id: 4, nom: "Pr. Yassir C.", type: "enseignant", statut: "confirmé" },
  { id: 5, nom: "Hiba A.", type: "famille", statut: "en attente" },
  { id: 6, nom: "Ghita A.", type: "famille", statut: "confirmé" },
];


const liste = document.querySelector("#liste-invites");

function afficherInvites(tableau) {
  liste.innerHTML = "";
  tableau.forEach(invite => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card p-3">
        <h5>${invite.nom}</h5>
        <p class="mb-1" id="sub">Type : ${invite.type}</p>
        <p class="mb-0" id="sub">Statut : ${invite.statut}</p>
      </div>`;
    liste.appendChild(col);
  });
}
afficherInvites(invites);

//hiba: adding the filter:

const boutonsFiltre = document.querySelectorAll("#zone-filtre button");

boutonsFiltre.forEach(bouton => {
  bouton.addEventListener("click", () => {
    const type = bouton.dataset.type;
    if (type === "tous") {
      afficherInvites(invites);
    } else {
      afficherInvites(invites.filter(invite => invite.type === type));
    }
  });
});

//hiba:adding the search:
const champRecherche = document.querySelector("#champ-recherche");

champRecherche.addEventListener("input", () => {
  const texte = champRecherche.value.toLowerCase().trim();
  const resultats = invites.filter(invite =>
    invite.nom.toLowerCase().includes(texte)
  );
  afficherInvites(resultats);
});