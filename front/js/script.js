document.addEventListener('DOMContentLoaded', () => {
    const orgaoSelect = document.getElementById('orgao');
    const tipoSelect = document.getElementById('tipo');
    const form = document.getElementById('denuncia-form');
  
    async function carregarOpcoes(url, selectElement) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        selectElement.innerHTML = '<option value="">Selecione...</option>';
        data.forEach(({ id, nome }) => {
          const opt = document.createElement('option');
          opt.value = id;
          opt.textContent = nome;
          selectElement.appendChild(opt);
        });
      } catch (err) {
        selectElement.innerHTML = '<option value="">Erro ao carregar</option>';
        console.error(err);
      }
    }
  
    carregarOpcoes('/api/orgaos', orgaoSelect);
    carregarOpcoes('/api/tipos-problema', tipoSelect);
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const payload = {
        titulo: fd.get('titulo'),
        descricao: fd.get('descricao'),
        urgencia: Number(fd.get('urgencia')),
        orgaoId: fd.get('orgao'),
        tipoId: fd.get('tipo'),
        // aqui você incluiria o tratamento do arquivo de imagem
      };
      console.log('Payload:', payload);
      // TODO: fetch POST para enviar ao backend
      alert('Denúncia pronta — veja o console.');
    });
  });

  

  // Login
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
  
    if (email === "admin@pm.br" && senha === "123321") {
      alert("Acesso de administrador!");
      window.location.href = "admin.html"; // exemplo
    } else {
      alert("Login enviado. (Autenticação real será feita via backend)");
      window.location.href = "index.html"; // redireciona para a tela de denúncias
    }
  });
  
  // Cadastro
  document.getElementById("cadastro-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
    };
    console.log("Cadastro:", data);
    alert("Cadastro enviado! Aguarde validação.");
  });
  