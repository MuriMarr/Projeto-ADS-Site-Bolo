    const FORMSPREE_URL = "https://formspree.io/f/mykngvaj";

    const bolosGourmets = [
      { id: "bolo1", nome: "Abacaxi com Doce de Leite", preco: 60, imagemBoloG: "imagens/[Gourmet] Abacaxi com Doce de Leite.png", massaId: "massa1" },
      { id: "bolo2", nome: "Abacaxi com Coco", preco: 60, imagemBoloG: "imagens/[Gourmet] Abacaxi com Coco.png", massaId: "massa2" },
      { id: "bolo3", nome: "Brigadeiro", preco: 70, imagemBoloG: "imagens/[Gourmet] Brigadeiro.png", massaId: "massa3" },
      { id: "bolo4", nome: "Brigadeiro com Mousse Maracujá", preco: 75, imagemBoloG: "imagens/[Gourmet] Brigadeiro com Mousse Maracujá.png", massaId: "massa4" },
      { id: "bolo5", nome: "Chocolate com Uva Verde", preco: 80, imagemBoloG: "imagens/[Gourmet] Chocolate com Uva Verde.png", massaId: "massa5" },
      { id: "bolo6", nome: "Chocolate com Morango", preco: 60, imagemBoloG: "imagens/[Gourmet] Chocolate com Morango.png", massaId: "massa6" },
      { id: "bolo7", nome: "Doce de Leite", preco: 55, imagemBoloG: "imagens/[Gourmet] Doce de Leite.png", massaId: "massa7" },
      { id: "bolo8", nome: "Floresta Negra", preco: 80, imagemBoloG: "imagens/[Gourmet] Floresta Negra.png", massaId: "massa8" },
      { id: "bolo9", nome: "Kit Kat", preco: 88, imagemBoloG: "imagens/[Gourmet] Kit Kat.png", massaId: "massa9" },
      { id: "bolo10", nome: "Morango com Nutella", preco: 75, imagemBoloG: "imagens/[Gourmet] Morango com Nutella.png", massaId: "massa10" },
      { id: "bolo11", nome: "Ninho com Morango", preco: 80, imagemBoloG: "imagens/[Gourmet] Ninho com Morango.png", massaId: "massa11" },
      { id: "bolo12", nome: "Ninho com Nutella", preco: 75, imagemBoloG: "imagens/[Gourmet] Ninho com Nutella.png", massaId: "massa12" },
      { id: "bolo13", nome: "Ninho com Uva Verde", preco: 70, imagemBoloG: "imagens/[Gourmet] Ninho com Uva Verde.png", massaId: "massa13" },
      { id: "bolo14", nome: "Pistache", preco: 90, imagemBoloG: "imagens/[Gourmet] Pistache.png", massaId: "massa14" },
      { id: "bolo15", nome: "Sensação", preco: 77, imagemBoloG: "imagens/[Gourmet] Sensação.png", massaId: "massa15" },
      { id: "bolo16", nome: "Prestígio", preco: 60, imagemBoloG: "imagens/[Gourmet] Prestígio.png", massaId: "massa16" }
    ];

    const bolosSimples = [
      { id: "cenoura", nome: "Bolo de Cenoura", imagemBolo: "imagens/[Simples] Bolo de Cenoura.jpg", preco: 35 },
      { id: "milho", nome: "Bolo de Milho", imagemBolo: "imagens/[Simples] Bolo de Milho.jpg", preco: 30 },
      { id: "laranja", nome: "Bolo de Laranja", imagemBolo: "imagens/[Simples] Bolo de laranja.jpg", preco: 25 },
      { id: "fuba", nome: "Bolo de Fubá", imagemBolo: "imagens/[Simples] Bolo de Fubá.png", preco: 35 },
      { id: "formigueiro", nome: "Bolo de Formigueiro", imagemBolo: "imagens/[Simples] Bolo Formigueiro.png", preco: 30 },
      { id: "banana", nome: "Bolo de Banana", imagemBolo: "imagens/[Simples] Bolo de Banana.png", preco: 25 },
      { id: "leite", nome: "Bolo de Leite", imagemBolo: "imagens/[Simples] Bolo de Leite.png",preco: 35 },
      { id: "boloGeladoCoco", nome: "Bolo de Coco Gelado", imagemBolo: "imagens/[Simples] Bolo de Coco Gelado.png", preco: 45 },
      { id: "boloAipim", nome: "Bolo de Aipim", imagemBolo: "imagens/[Simples] Bolo de Aipim.png", preco: 35 },
      { id: "boloLimao", nome: "Bolo de Limão", imagemBolo: "imagens/[Simples] Bolo de Limão.png", preco: 45 }
    ];

    const elements = {
      form: document.getElementById("pedidoForm"),
      gourmetGrid: document.getElementById("bolosGourmetsGrid"),
      simplesGrid: document.getElementById("bolosSimplesGrid"),
      brigadeiroQtd: document.getElementById("brigadeiroQtd"),
      brigadeiroStatus: document.getElementById("brigadeiroStatus"),
      nome: document.getElementById("nome"),
      email: document.getElementById("email"),
      cep: document.getElementById("cep"),
      endereco: document.getElementById("endereco"),
      numero: document.getElementById("numero"),
      complemento: document.getElementById("complemento"),
      dataPedido: document.getElementById("dataPedido"),
      horaPedido: document.getElementById("horaPedido"),
      observacoes: document.getElementById("observacoes"),
      pagamentoErro: document.getElementById("pagamentoErro"),
      formMensagem: document.getElementById("formMensagem"),
      total: document.getElementById("total"),
      linhaEntrada: document.getElementById("linhaEntrada"),
      linhaRestante: document.getElementById("linhaRestante"),
      textoCondicaoPagamento: document.getElementById("textoCondicaoPagamento"),
      resumoVisual: document.getElementById("resumoVisual"),
      resumoRecebimentoTexto: document.getElementById("resumoRecebimentoTexto")
    };

    function formatarMoeda(valor) {
      return valor.toFixed(2).replace(".", ",");
    }

    function emailValido(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function getDataMinima() {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      hoje.setDate(hoje.getDate() + 1);

      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, "0");
      const dia = String(hoje.getDate()).padStart(2, "0");

      return `${ano}-${mes}-${dia}`;
    }

    function getCondicaoPagamento() {
      const selecionado = document.querySelector('input[name="condicaoPagamento"]:checked');
      return selecionado ? selecionado.value : "avista";
    }

    function getFormaPagamento() {
      const selecionado = document.querySelector('input[name="pagamento"]:checked');
      return selecionado ? selecionado.value : "";
    }

    function getFormaRecebimento() {
      const selecionado = document.querySelector('input[name="recebimento"]:checked');
      return selecionado ? selecionado.value : "Retirada";
    }

    function calcularSubtotalBoloGourmet(id, preco) {
      const quantidade = Math.max(0, parseFloat(document.getElementById(id).value) || 0);
      return quantidade * preco;
    }

    function calcularSubtotalBoloSimples(id, preco) {
      const quantidade = Math.max(0, parseInt(document.getElementById(id).value, 10) || 0);
      return quantidade * preco;
    }

    function obterInfoBrigadeiro() {
      const quantidade = Math.max(0, Number(elements.brigadeiroQtd.value) || 0);

      if (quantidade > 0 && quantidade < 50) {
        return { quantidade, preco: 0, invalido: true };
      }

      const precoUnitario = 1.4;
      const preco = quantidade >= 50 ? quantidade * precoUnitario : 0;

      return { quantidade, preco, invalido: false };
    }

    function obterDistribuicaoBrigadeiros() {
      const inputs = document.querySelectorAll(".brigadeiro-qtd");
      const sabores = [];
      let total = 0;

      inputs.forEach((input) => {
        const quantidade = Math.max(0, Number(input.value) || 0);
        const sabor = input.dataset.sabor;

        if (quantidade > 0) {
          sabores.push({ sabor, quantidade });
          total += quantidade;
        }
      });

      return { sabores, total };
    }

    function renderizarProdutos() {
      elements.gourmetGrid.innerHTML = bolosGourmets.map((bolo) => `
        <article class="produto-card">
          <div class="produto-topo">
            <h4>${bolo.nome}</h4>
          </div>
          <div class="produto-meta">R$ ${formatarMoeda(bolo.preco)} por kg</div>

          <div class="produto-actions">
            <div class="produto-inline">
              <div class="field">
                <label for="${bolo.massaId}">Massa</label>
                <select id="${bolo.massaId}">
                  <option value="Baunilha">Baunilha</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Red Velvet">Red Velvet</option>
                  <img src="${bolo.imagemBoloG}" alt="${bolo.nome}" class="produto-imagem">
                </select>
              </div>

              <div class="field">
                <label for="${bolo.id}">Kg</label>
                <input type="number" id="${bolo.id}" min="0" step="0.1" value="0">
              </div>
            </div>
          </div>
        </article>
      `).join("");

      elements.simplesGrid.innerHTML = bolosSimples.map((bolo) => `
        <article class="produto-card">
          <div class="produto-topo">
            <h4>${bolo.nome}</h4>
          </div>
          <div class="produto-meta">R$ ${formatarMoeda(bolo.preco)} por unidade</div>

          <div class="produto-actions">
            <div class="field">
                <label for="${bolo.id}">Quantidade</label>
                <img src="${bolo.imagemBolo}" alt="${bolo.nome}" class="produto-imagem">
                <input type="number" id="${bolo.id}" min="0" step="1" value="0">
             
            </div>
          </div>
        </article>
      `).join("");
    }

    function atualizarStatusBrigadeiro() {
      const status = elements.brigadeiroStatus;
      const { quantidade, invalido } = obterInfoBrigadeiro();
      const { total } = obterDistribuicaoBrigadeiros();

      status.className = "status-box";

      if (!quantidade) {
        status.classList.add("status-neutral");
        status.textContent = "Informe a quantidade total para começar a distribuir os sabores.";
        return;
      }

      if (invalido) {
        status.classList.add("status-danger");
        status.textContent = "O mínimo para brigadeiros é 50 unidades.";
        return;
      }

      if (total === quantidade) {
        status.classList.add("status-success");
        status.textContent = `Quantidade preenchida corretamente: ${total}/${quantidade}.`;
        return;
      }

      if (total < quantidade) {
        status.classList.add("status-warning");
        status.textContent = `Faltam ${quantidade - total} brigadeiros para completar o pedido.`;
        return;
      }

      status.classList.add("status-danger");
      status.textContent = `Você passou ${total - quantidade} brigadeiros do total informado.`;
    }

    function atualizarErroPagamento() {
      if (getFormaPagamento()) {
        elements.pagamentoErro.classList.add("hidden");
      }
    }

    function limparErrosCampos() {
      document.querySelectorAll(".erro-campo").forEach((el) => {
        el.classList.remove("erro-campo");
      });
    }

    function marcarErroCampo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add("erro-campo");
      }
    }

    function mostrarMensagem(texto, tipo = "danger") {
      elements.formMensagem.className = "form-message";
      elements.formMensagem.classList.remove("hidden");

      if (tipo === "success") {
        elements.formMensagem.classList.add("status-success");
      } else if (tipo === "warning") {
        elements.formMensagem.classList.add("status-warning");
      } else {
        elements.formMensagem.classList.add("status-danger");
      }

      elements.formMensagem.textContent = texto;
    }

    function esconderMensagem() {
      elements.formMensagem.className = "form-message hidden";
      elements.formMensagem.textContent = "";
    }

    function obterItensResumo() {
      const itens = [];

      bolosGourmets.forEach((bolo) => {
        const kg = parseFloat(document.getElementById(bolo.id).value) || 0;

        if (kg > 0) {
          const massa = document.getElementById(bolo.massaId).value;
          itens.push({
            titulo: bolo.nome,
            descricao: `${kg} kg • Massa: ${massa} • R$ ${formatarMoeda(kg * bolo.preco)}`
          });
        }
      });

      bolosSimples.forEach((bolo) => {
        const qtd = parseInt(document.getElementById(bolo.id).value, 10) || 0;

        if (qtd > 0) {
          itens.push({
            titulo: bolo.nome,
            descricao: `${qtd} unid. • R$ ${formatarMoeda(qtd * bolo.preco)}`
          });
        }
      });

      const brigadeiroInfo = obterInfoBrigadeiro();
      const brigadeiroDistribuicao = obterDistribuicaoBrigadeiros();

      if (brigadeiroInfo.quantidade > 0) {
        itens.push({
          titulo: "Brigadeiros",
          descricao: `${brigadeiroInfo.quantidade} unid. • Preenchido: ${brigadeiroDistribuicao.total}/${brigadeiroInfo.quantidade} • R$ ${formatarMoeda(brigadeiroInfo.preco)}`
        });
      }

      return itens;
    }

    function atualizarResumoVisual(total, valorAgora, restante) {
      const itens = obterItensResumo();

      if (!itens.length) {
        elements.resumoVisual.innerHTML = `
          <div class="resumo-vazio">
            Seu pedido ainda está vazio.<br />
            Escolha bolos ou brigadeiros para ver o resumo aqui.
          </div>
        `;
        return;
      }

      const condicaoPagamento = getCondicaoPagamento();
      const formaRecebimento = getFormaRecebimento();

      elements.resumoVisual.innerHTML = `
        <div class="resumo-item">
          <strong>Forma de recebimento</strong>
          <span>${formaRecebimento}</span>
        </div>

        ${itens.map((item) => `
          <div class="resumo-item">
            <strong>${item.titulo}</strong>
            <span>${item.descricao}</span>
          </div>
        `).join("")}

        <div class="resumo-item">
          <div class="resumo-total-linha"><span>Total do pedido</span><span>R$ ${formatarMoeda(total)}</span></div>
          <div class="resumo-total-linha" style="margin-top: 8px;">
            <span>${condicaoPagamento === "avista" ? "Pagamento à vista" : "Sinal (50%)"}</span>
            <span>R$ ${formatarMoeda(valorAgora)}</span>
          </div>
          ${condicaoPagamento === "sinal" ? `
            <div class="resumo-total-linha" style="margin-top: 8px;">
              <span>Restante no recebimento</span>
              <span>R$ ${formatarMoeda(restante)}</span>
            </div>
          ` : ""}
        </div>
      `;
    }

    function calcularTotal() {
      let total = 0;

      bolosGourmets.forEach((bolo) => {
        total += calcularSubtotalBoloGourmet(bolo.id, bolo.preco);
      });

      bolosSimples.forEach((bolo) => {
        total += calcularSubtotalBoloSimples(bolo.id, bolo.preco);
      });

      const brigadeiroInfo = obterInfoBrigadeiro();
      total += brigadeiroInfo.preco;

      const condicaoPagamento = getCondicaoPagamento();
      const formaRecebimento = getFormaRecebimento();

      let valorAgora = total;
      let restante = 0;

      if (condicaoPagamento === "sinal") {
        valorAgora = total / 2;
        restante = total / 2;
      }

      elements.total.textContent = formatarMoeda(total);
      elements.resumoRecebimentoTexto.textContent =
        `${formaRecebimento} • Pedidos com antecedência mínima de 1 dia • Horário entre 07:00 e 20:00`;

      if (condicaoPagamento === "avista") {
        elements.linhaEntrada.innerHTML = `Pagar agora: R$ <span id="sinal">${formatarMoeda(valorAgora)}</span>`;
        elements.linhaRestante.classList.add("hidden");
        elements.textoCondicaoPagamento.textContent = "Pagamento à vista no momento do pedido.";
      } else {
        elements.linhaEntrada.innerHTML = `Sinal (50%): R$ <span id="sinal">${formatarMoeda(valorAgora)}</span>`;
        elements.linhaRestante.innerHTML = `Restante no recebimento: R$ <span id="restante">${formatarMoeda(restante)}</span>`;
        elements.linhaRestante.classList.remove("hidden");
        elements.textoCondicaoPagamento.textContent =
          "Pagamento com 50% de sinal no momento do pedido e 50% no recebimento.";
      }

      const botao = elements.form.querySelector('button[type="submit"]');
      botao.disabled = total <= 0;

      atualizarStatusBrigadeiro();
      atualizarResumoVisual(total, valorAgora, restante);
    }

    function montarResumoTexto() {
      let resumo = "Resumo do pedido:\n\n";
      let temItem = false;

      bolosGourmets.forEach((bolo) => {
        const kg = parseFloat(document.getElementById(bolo.id).value) || 0;

        if (kg > 0) {
          const massa = document.getElementById(bolo.massaId).value;
          const subtotal = kg * bolo.preco;
          resumo += `Bolo gourmet: ${bolo.nome} | Massa: ${massa} | ${kg}kg | R$ ${formatarMoeda(subtotal)}\n`;
          temItem = true;
        }
      });

      bolosSimples.forEach((bolo) => {
        const quantidade = parseInt(document.getElementById(bolo.id).value, 10) || 0;

        if (quantidade > 0) {
          const subtotal = quantidade * bolo.preco;
          resumo += `Bolo simples: ${bolo.nome} | ${quantidade} unid. | R$ ${formatarMoeda(subtotal)}\n`;
          temItem = true;
        }
      });

      const brigadeiroInfo = obterInfoBrigadeiro();
      const brigadeiroDistribuicao = obterDistribuicaoBrigadeiros();

      if (brigadeiroInfo.quantidade > 0) {
        const saboresTexto = brigadeiroDistribuicao.sabores.length
          ? brigadeiroDistribuicao.sabores.map((item) => `${item.sabor}: ${item.quantidade}`).join(", ")
          : "Não selecionado";

        resumo += `Brigadeiros: ${brigadeiroInfo.quantidade} unidades\n`;
        resumo += `Sabores: ${saboresTexto}\n`;
        resumo += `Preenchido: ${brigadeiroDistribuicao.total}/${brigadeiroInfo.quantidade}\n`;
        resumo += `Valor dos brigadeiros: R$ ${formatarMoeda(brigadeiroInfo.preco)}\n`;
        temItem = true;
      }

      if (!temItem) {
        resumo += "Nenhum item selecionado.\n";
      }

      const nome = elements.nome.value.trim() || "-";
      const email = elements.email.value.trim() || "-";
      const cep = elements.cep.value.trim() || "-";
      const endereco = elements.endereco.value.trim() || "-";
      const numero = elements.numero.value.trim() || "-";
      const complemento = elements.complemento.value.trim() || "-";
      const data = elements.dataPedido.value || "-";
      const hora = elements.horaPedido.value || "-";
      const observacoes = elements.observacoes.value.trim() || "-";
      const formaPagamento = getFormaPagamento() || "-";
      const formaRecebimento = getFormaRecebimento();
      const total = elements.total.textContent;
      const sinalEl = document.getElementById("sinal");
      const restanteEl = document.getElementById("restante");
      const sinal = sinalEl ? sinalEl.textContent : "0,00";
      const restante = restanteEl ? restanteEl.textContent : "0,00";
      const condicaoPagamento = getCondicaoPagamento();

      resumo += `\nNome: ${nome}\n`;
      resumo += `E-mail: ${email}\n`;
      resumo += `Forma de recebimento: ${formaRecebimento}\n`;
      resumo += `CEP: ${cep}\n`;
      resumo += `Endereço: ${endereco}\n`;
      resumo += `Número: ${numero}\n`;
      resumo += `Complemento: ${complemento}\n`;
      resumo += `Data: ${data}\n`;
      resumo += `Hora: ${hora}\n`;
      resumo += `Forma de pagamento: ${formaPagamento}\n`;
      resumo += `Observações: ${observacoes}\n`;

      if (condicaoPagamento === "avista") {
        resumo += "Condição de pagamento: À vista.\n";
      } else {
        resumo += "Condição de pagamento: 50% de sinal no momento do pedido e 50% no recebimento.\n";
      }

      resumo += `\nTotal: R$ ${total}\n`;

      if (condicaoPagamento === "avista") {
        resumo += `Pagamento à vista: R$ ${sinal}`;
      } else {
        resumo += `Sinal (50%): R$ ${sinal}\n`;
        resumo += `Restante no recebimento (50%): R$ ${restante}`;
      }

      return resumo;
    }

    function resetarFormulario() {
      elements.form.reset();

      document.querySelectorAll(".brigadeiro-qtd").forEach((input) => {
        input.value = 0;
      });

      elements.pagamentoErro.classList.add("hidden");

      const novaDataMinima = getDataMinima();
      elements.dataPedido.min = novaDataMinima;
      elements.dataPedido.value = novaDataMinima;
      elements.horaPedido.value = "07:00";

      const radioCondicao = document.querySelector('input[name="condicaoPagamento"][value="avista"]');
      if (radioCondicao) {
        radioCondicao.checked = true;
      }

      const radioRecebimento = document.querySelector('input[name="recebimento"][value="Retirada"]');
      if (radioRecebimento) {
        radioRecebimento.checked = true;
      }
    }

    function limparCEP(valor) {
      return valor.replace(/\D/g, "");
    }

    function formatarCEP(valor) {
      const cepLimpo = limparCEP(valor);

      if (cepLimpo.length <= 5) return cepLimpo;
      return `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`;
    }

    async function buscarCEP(cep) {
      const cepLimpo = limparCEP(cep);

      if (cepLimpo.length !== 8) return;

      try {
        elements.endereco.value = "Buscando endereço...";

        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();

        if (data.erro) {
          elements.endereco.value = "";
          mostrarMensagem("CEP não encontrado.", "warning");
          return;
        }

        elements.endereco.value = [data.logradouro, data.bairro, data.localidade, data.uf]
          .filter(Boolean)
          .join(" - ");

        if (!elements.complemento.value && data.complemento) {
          elements.complemento.value = data.complemento;
        }
      } catch (error) {
        elements.endereco.value = "";
        mostrarMensagem("Não foi possível buscar o endereço pelo CEP.", "warning");
      }
    }

    async function enviarPedido(event) {
      event.preventDefault();
      limparErrosCampos();
      esconderMensagem();

      const botao = elements.form.querySelector('button[type="submit"]');
      const nome = elements.nome.value.trim();
      const email = elements.email.value.trim();
      const data = elements.dataPedido.value;
      const hora = elements.horaPedido.value;
      const formaPagamento = getFormaPagamento();
      const formaRecebimento = getFormaRecebimento();
      const cep = elements.cep.value.trim();
      const endereco = elements.endereco.value.trim();
      const numero = elements.numero.value.trim();
      const totalTexto = elements.total.textContent;
      const totalNumero = Number(totalTexto.replace(",", "."));
      const dataMinima = getDataMinima();
      const resumo = montarResumoTexto();

      if (totalNumero <= 0) {
        mostrarMensagem("Selecione pelo menos um item para fazer o pedido.", "danger");
        return;
      }

      if (nome.length < 3) {
        marcarErroCampo("nome");
        mostrarMensagem("Informe um nome válido com pelo menos 3 caracteres.", "danger");
        return;
      }

      if (!emailValido(email)) {
        marcarErroCampo("email");
        mostrarMensagem("Informe um e-mail válido.", "danger");
        return;
      }

      if (!data) {
        marcarErroCampo("dataPedido");
        mostrarMensagem("Selecione a data.", "danger");
        return;
      }

      if (!hora) {
        marcarErroCampo("horaPedido");
        mostrarMensagem("Selecione o horário.", "danger");
        return;
      }

      if (data < dataMinima) {
        marcarErroCampo("dataPedido");
        const dataFormatada = dataMinima.split("-").reverse().join("/");
        mostrarMensagem(`Os pedidos devem ser feitos com 1 dia de antecedência. Data mínima: ${dataFormatada}.`, "danger");
        return;
      }

      if (hora < "07:00" || hora > "20:00") {
        marcarErroCampo("horaPedido");
        mostrarMensagem("O horário deve estar entre 07:00 e 20:00.", "danger");
        return;
      }

      if (!formaPagamento) {
        elements.pagamentoErro.classList.remove("hidden");
        mostrarMensagem("Selecione a forma de pagamento.", "danger");
        return;
      }

      if (formaRecebimento === "Entrega") {
        if (!cep || limparCEP(cep).length !== 8) {
          marcarErroCampo("cep");
          mostrarMensagem("Informe um CEP válido para entrega.", "danger");
          return;
        }

        if (!endereco) {
          marcarErroCampo("endereco");
          mostrarMensagem("Informe o endereço para entrega.", "danger");
          return;
        }

        if (!numero) {
          marcarErroCampo("numero");
          mostrarMensagem("Informe o número do endereço para entrega.", "danger");
          return;
        }
      }

      const brigadeiroInfo = obterInfoBrigadeiro();
      const brigadeiroDistribuicao = obterDistribuicaoBrigadeiros();

      if (brigadeiroInfo.invalido) {
        marcarErroCampo("brigadeiroQtd");
        mostrarMensagem("O mínimo para brigadeiros é 50 unidades.", "danger");
        return;
      }

      if (
        brigadeiroInfo.quantidade > 0 &&
        brigadeiroDistribuicao.total !== brigadeiroInfo.quantidade
      ) {
        marcarErroCampo("brigadeiroQtd");
        mostrarMensagem(`A soma dos brigadeiros precisa ser exatamente ${brigadeiroInfo.quantidade} unidades.`, "danger");
        return;
      }

      try {
        botao.disabled = true;
        botao.textContent = "Enviando...";

        const response = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            nome,
            email,
            forma_recebimento: formaRecebimento,
            cep: elements.cep.value.trim(),
            endereco: elements.endereco.value.trim(),
            numero: elements.numero.value.trim(),
            complemento: elements.complemento.value.trim(),
            data_pedido: data,
            hora_pedido: hora,
            observacoes: elements.observacoes.value.trim(),
            forma_pagamento: formaPagamento,
            condicao_pagamento: getCondicaoPagamento(),
            total: `R$ ${totalTexto}`,
            resumo_pedido: resumo
          })
        });

        if (!response.ok) {
          throw new Error("Falha ao enviar");
        }

        mostrarMensagem("Pedido enviado com sucesso! Entraremos em contato se necessário.", "success");
        resetarFormulario();
        calcularTotal();
      } catch (error) {
        mostrarMensagem("Não foi possível enviar o pedido. Verifique sua conexão e tente novamente.", "danger");
      } finally {
        botao.disabled = false;
        botao.textContent = "Enviar Pedido";
        calcularTotal();
      }
    }

    function inicializarFormulario() {
      renderizarProdutos();

      const dataMinimaInicial = getDataMinima();
      elements.dataPedido.min = dataMinimaInicial;
      elements.dataPedido.value = dataMinimaInicial;

      elements.form.addEventListener("submit", enviarPedido);

      elements.cep.addEventListener("input", (event) => {
        event.target.value = formatarCEP(event.target.value);
      });

      elements.cep.addEventListener("blur", () => {
        buscarCEP(elements.cep.value);
      });

      document.addEventListener("input", (event) => {
        const target = event.target;

        if (
          target.matches("input[type='number'], input[type='text'], input[type='email'], input[type='date'], input[type='time'], textarea, select")
        ) {
          if (target.value !== "") {
            target.classList.remove("erro-campo");
          }

          calcularTotal();
        }
      });

      document.addEventListener("change", (event) => {
        const target = event.target;

        if (target.matches("input[name='pagamento']")) {
          atualizarErroPagamento();
        }

        if (target.matches("input, select, textarea")) {
          calcularTotal();
        }
      });

      calcularTotal();
    }

    inicializarFormulario();