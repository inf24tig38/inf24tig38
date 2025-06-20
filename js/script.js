function toggleDisciplinas(id) {
    const elem = document.getElementById(id);
    if (!elem) return;
    if (elem.style.display === 'block') {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'block';
    }
}

function validateForm() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="genero"]:checked');  

    if (nome == "" || email == "" || password == "" || !gender) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; 
    }

    const som = document.getElementById("somSucesso");
    if (som) som.play();

    setTimeout(() => {
        alert("Formulário enviado com sucesso!");
        window.location.href = "index.html";
    }, 1500);

    return false;
}


document.addEventListener('DOMContentLoaded', () => {
    const autorBtn = document.getElementById('autorBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');

    if (autorBtn && modalOverlay && closeBtn) {
        autorBtn.addEventListener('click', () => {
            mostrarMensagem(); 
            modalOverlay.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }
});

function mostrarMensagem() {
  fetch("mensagem.xml")
    .then(response => response.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "application/xml");
      const texto = xml.querySelector("texto").textContent;
      document.getElementById("conteudoModal").innerHTML = texto;
    });
}


