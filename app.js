(function () {
  var D = window.V7, wa = D.wa;
  var regiao = 'itaquera';
  try { var s = localStorage.getItem('v7-regiao'); if (s && D.unidades[s]) regiao = s; } catch (e) {}
  var quiz = { pessoas: '', jogos: '' };
  var $ = function (q) { return document.querySelector(q); };
  var $$ = function (q) { return Array.prototype.slice.call(document.querySelectorAll(q)); };
  var esc = function (t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; };
  var reg = function () { return D.unidades[regiao]; };

  // links fixos
  $$('.js-segunda-via').forEach(function (a) { a.href = D.links.segundaVia; });
  $$('.js-area').forEach(function (a) { a.href = D.links.areaCliente; });
  $$('.js-teste').forEach(function (a) { a.href = D.links.testeVelocidade; });
  $('#btn-vaga').textContent = 'WhatsApp ' + D.links.vagaWhatsappTxt;
  $('#btn-vaga').href = wa(D.links.vagaWhatsapp, 'Olá! Tenho interesse na vaga de Agente de Atendimento da V7.');
  $('#btn-cv').href = 'mailto:' + D.links.vagaEmail;
  $('#ano').textContent = new Date().getFullYear();
  $('#f-geral').innerHTML =
    '<strong style="color:#fff;font-size:17px">Fale com a V7</strong>' +
    '<a href="tel:1146100707">Telefone (11) 4610-0707</a>' +
    '<a href="mailto:' + D.links.email + '">' + D.links.email + '</a>' +
    '<a href="https://instagram.com/' + D.links.instagramGeral + '">Instagram @' + D.links.instagramGeral + '</a>' +
    '<a href="' + D.links.facebook + '">Facebook /v7telecom</a>';

  // regiões
  var chips = $('#chips');
  Object.keys(D.unidades).forEach(function (k) {
    var u = D.unidades[k], b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.dataset.k = k;
    b.innerHTML = '<b>' + esc(u.nome) + '</b><small>' + esc(u.sub) + '</small>';
    b.addEventListener('click', function () { regiao = k; try { localStorage.setItem('v7-regiao', k); } catch (e) {} render(); });
    chips.appendChild(b);
  });

  // apps (fixos)
  $('#apps').innerHTML = D.apps.map(function (a) {
    return '<div class="appc"><span class="tipo' + (a.tipo === 'Premium' ? ' premium' : '') + '">App ' + a.tipo + '</span>' +
      '<img src="' + a.img + '" alt="' + esc(a.nome) + '"><strong style="font-size:18px">' + esc(a.nome) + '</strong>' +
      '<span style="font-size:14px;color:#555">' + esc(a.desc) + '</span>' +
      '<span style="font-size:14px;font-weight:800">' + esc(a.planos) + '</span>' +
      '<a class="btn js-app" data-app="' + esc(a.nome) + '" href="#">Quero este app</a></div>';
  }).join('');

  // unidades (rodapé)
  var ico = {
    pin: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E30613" stroke-width="2" style="flex-shrink:0;margin-top:2px"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    tel: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E30613" stroke-width="2" stroke-linejoin="round" style="flex-shrink:0"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    wa: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linejoin="round" style="flex-shrink:0"><path d="M4 20l1.4-4A8 8 0 1 1 8 18.6z"/></svg>'
  };
  $('#units').innerHTML = Object.keys(D.unidades).map(function (k) {
    var u = D.unidades[k];
    return '<div class="unit"><strong class="sora" style="color:#fff;font-size:19px"><span class="red">V7</span> ' + esc(u.nome) + '</strong>' +
      '<span>Atende: ' + esc(u.bairros) + '</span>' +
      (u.endereco ? '<span class="row">' + ico.pin + '<a href="https://www.google.com/maps/search/' + encodeURIComponent(u.endereco) + '">' + esc(u.endereco) + '</a></span>' : '') +
      '<span class="row">' + ico.tel + '<a href="tel:' + u.telefone + '">Telefone ' + u.telefoneTxt + '</a></span>' +
      '<span class="row">' + ico.wa + '<a href="' + wa(u.whatsapp, 'Olá, V7 ' + u.nome + '!') + '">WhatsApp ' + u.whatsappTxt + '</a></span>' +
      '<div class="soc"><a href="https://instagram.com/' + u.instagram + '">Instagram @' + u.instagram + '</a><a href="' + u.facebook + '">Facebook</a></div></div>';
  }).join('');

  // quiz
  $$('.opts').forEach(function (g) {
    g.addEventListener('click', function (e) {
      var b = e.target.closest('.opt'); if (!b) return;
      quiz[g.dataset.q] = b.dataset.v;
      g.querySelectorAll('.opt').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      render();
    });
  });

  function render() {
    var u = reg();
    $$('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.k === regiao ? 'true' : 'false'); });
    $$('.js-reg-nome').forEach(function (s) { s.textContent = u.nome; });
    $('#region-info').textContent = 'Unidade V7 ' + u.nome + ': ' + u.bairros + ' · WhatsApp ' + u.whatsappTxt;
    $$('.js-suporte').forEach(function (a) { a.href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Preciso de suporte.'); });
    $('#btn-emp').href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Quero uma proposta do V7 Empresarial.');
    var cep = $('#cep').value.trim();
    $('#btn-cep').href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Quero saber se tem cobertura no meu CEP: ' + (cep || '[digite seu CEP]'));
    $$('.js-app').forEach(function (a) { a.href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Quero um plano com o ' + a.dataset.app + '.'); });

    $('#plans').innerHTML = D.planos.map(function (p) {
      var href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Quero contratar o Plano V7 ' + p.nome + ' (' + p.vel + ' ' + p.unid + ').');
      return '<div class="plan' + (p.destaque ? ' top' : '') + '">' +
        (p.destaque ? '<span class="rec">Recomendado</span>' : '') +
        '<div class="lbl">Plano</div><div class="name"><span class="red">V7</span> ' + esc(p.nome) + '</div>' +
        '<div class="speed">' + p.vel + '<small> ' + p.unid + '</small></div>' +
        '<a class="app" href="#streaming">+ ' + p.app + '</a>' +
        '<span class="tag">' + esc(p.tag) + '</span>' +
        '<ul>' + p.beneficios.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
        '<div class="price"><span style="font-size:18px;font-weight:800">R$</span><b>' + p.preco + '</b><span style="font-size:15px">/mês</span></div>' +
        '<a class="btn ' + (p.destaque ? 'btn-red' : 'btn-white') + '" href="' + href + '">Contratar pelo WhatsApp</a></div>';
    }).join('');

    var id = '';
    if (quiz.pessoas && quiz.jogos) {
      id = quiz.pessoas === '5' ? 'ultra' : quiz.jogos === 'sim' ? 'gamer' : quiz.pessoas === '3' ? 'familia' : 'essencial';
    }
    var r = $('#result');
    if (id) {
      var p = D.planos.filter(function (x) { return x.id === id; })[0];
      $('#r-nome').innerHTML = 'Plano <span class="red">V7</span> ' + esc(p.nome) + ' · ' + p.vel + ' ' + p.unid;
      $('#r-info').textContent = 'R$ ' + p.preco + '/mês · + ' + p.app + ' · ' + p.tag;
      $('#r-btn').href = wa(u.whatsapp, 'Olá, V7 ' + u.nome + '! Quero contratar o Plano V7 ' + p.nome + ' (' + p.vel + ' ' + p.unid + ').');
      r.hidden = false;
    } else { r.hidden = true; }
    novaAba();
  }
  function novaAba() {
    $$('a[href]').forEach(function (a) {
      var h = a.getAttribute('href') || '';
      if (/^https?:/i.test(h) && a.hostname !== location.hostname) { a.target = '_blank'; a.rel = 'noopener'; }
    });
  }
  $('#cep').addEventListener('input', render);
  render();
})();
