
const invites = [
  { id: 1, nom: "Sara El Amrani", type: "famille", statut: "confirmé" },
  { id: 2, nom: "Youssef Benali", type: "ami", statut: "en attente" },
  { id: 3, nom: "Pr. Nadia Alaoui", type: "enseignant", statut: "confirmé" },
  { id: 4, nom: "Omar Idrissi", type: "ami", statut: "confirmé" },
  { id: 5, nom: "Pr. Karim Tazi", type: "enseignant", statut: "en attente" }
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
        <p class="mb-1">Type : ${invite.type}</p>
        <p class="mb-0">Statut : ${invite.statut}</p>
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