fetch("data/produtos.json")
  .then(res => res.json())
  .then(data => {

    const numero = data.whatsapp;
    const produtos = data.produtos;

    const container = document.getElementById("produtos");

    produtos.forEach(p => {
      const link = `https://wa.me/${numero}?text=Olá, quero ${p.nome}`;

      container.innerHTML += `
        <div class="card">
          <img src="${p.imagem}">
          <div class="card-content">
            <h3>${p.nome}</h3>
            <p>${p.preco}</p>
            <a class="btn" href="${link}" target="_blank">
              Comprar no WhatsApp
            </a>
          </div>
        </div>
      `;
    });
  });
