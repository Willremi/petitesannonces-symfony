window.onload = () => {
    let modal = new Axentix.Modal('#modal-delete');
    
    let supprimer = document.querySelectorAll(".modal-trigger")
    for(let bouton of supprimer) {
      bouton.addEventListener("click", function() {
        document.querySelector(".modal-footer a").href = `/users/annonces/supprimer/${this.dataset.id}`
        document.querySelector(".modal-content").innerText = `Êtes vous sûr de supprimer l'annonce "${this.dataset.titre}"?`
    })
    }
  };