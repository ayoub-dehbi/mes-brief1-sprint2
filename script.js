// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;



const btn = document.getElementById("btn_submit")
const nam = document.getElementById("nom")
const prix = document.getElementById("prix")
const produit_liste = document.getElementById("liste-produits")

function add_produit(){
  let produit = {}
  produit.id = prochainId++
  produit.nom = nam.value
  produit.prix = prix.value
  produits.push(produit)
  console.log(produits);
  
}

Afficher()


function Afficher(){

  produit_liste.innerHTML = ``

  produits.forEach(element => {
    const div = document.createElement("div")
    const button = document.createElement("button")
    const strong = document.createElement("strong")
    const span = document.createElement("span")
    const li = document.createElement("li")
    
    li.className =("produit")
    strong.className = ("nom-produit")
    span.className = ("prix-produit")
    button.className= ("supprimer")
  
    strong.textContent = (element.nom)
    span.textContent = (element.prix)
    button.textContent =  ("Retirer")

    button.setAttribute("type","button")
    button.setAttribute("onclick","delet(${element.id})")

    
    div.appendChild(strong)
    div.appendChild(span)
  
  
    li.appendChild(div)
    li.appendChild(button)
    produit_liste.appendChild(li)
  });



}

function delet(id){
  produits.filter(item => item.id !== id)
  Afficher()
}

btn.addEventListener("click" , (e)=> {
  e.preventDefault()
  add_produit()

  Afficher()
})



// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
