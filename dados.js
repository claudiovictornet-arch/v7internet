/* ===========================================================
   V7 TELECOM — DADOS DO SITE
   Para trocar telefone, preço ou plano, edite só este arquivo.
   =========================================================== */
window.V7 = {
  unidades: {
    itaquera: {
      nome: 'Itaquera',
      sub: 'Savoy City, Nhocuné, Artur Alvim',
      bairros: 'Savoy City, Jardim Nhocuné, Artur Alvim e região',
      whatsapp: '5511933037674', whatsappTxt: '(11) 93303-7674',
      telefone: '1146100707', telefoneTxt: '(11) 4610-0707',
      instagram: 'v7telecomsavoy',
      facebook: 'https://facebook.com/v7telecom',
      endereco: ''
    },
    diadema: {
      nome: 'Diadema',
      sub: 'Eldorado e região',
      bairros: 'Eldorado e região',
      whatsapp: '5511932641191', whatsappTxt: '(11) 93264-1191',
      telefone: '1146100707', telefoneTxt: '(11) 4610-0707',
      instagram: 'v7telecomdiadema',
      facebook: 'https://facebook.com/v7telecom',
      endereco: ''
    },
    americanopolis: {
      nome: 'Americanópolis',
      sub: 'Americanópolis e região',
      bairros: 'Americanópolis e região',
      whatsapp: '5511949463756', whatsappTxt: '(11) 94946-3756',
      telefone: '1146100707', telefoneTxt: '(11) 4610-0707',
      instagram: 'v7telecomgeral',
      facebook: 'https://facebook.com/v7telecom',
      endereco: 'Rua Jean Gabriel Villin, 316 – São Paulo/SP'
    }
  },

  planos: [
    { id: 'essencial', nome: 'Essencial', vel: '300', unid: 'Mega', preco: '79,90', app: 'App Standard',
      tag: 'Perfeito para o dia a dia',
      beneficios: ['Navegação, redes sociais e vídeos em HD', 'Ideal para até 4 dispositivos', 'Estudos, home office e séries'] },
    { id: 'familia', nome: 'Família', vel: '500', unid: 'Mega', preco: '89,90', app: 'App Standard', destaque: true,
      tag: 'Mais conexão para todos',
      beneficios: ['Vídeos em 4K e redes sociais sem travar', 'Ideal para até 8 dispositivos', 'Jogos online e reuniões com estabilidade'] },
    { id: 'gamer', nome: 'Gamer', vel: '700', unid: 'Mega', preco: '99,90', app: 'App Premium',
      tag: 'Jogue sem limites',
      beneficios: ['Baixo ping e mais estabilidade', 'Perfeito para games, lives e streaming', 'Ideal para múltiplos dispositivos'] },
    { id: 'ultra', nome: 'Ultra', vel: '1', unid: 'Giga', preco: '129,90', app: 'App Premium',
      tag: 'Máxima performance',
      beneficios: ['Velocidade máxima para tudo', 'Ideal para casas grandes e empresas', 'Downloads e uploads mais rápidos'] }
  ],

  apps: [
    { nome: 'Looke', tipo: 'Standard', desc: 'Filmes e séries', planos: 'Incluso no V7 Essencial e V7 Família', img: 'assets/app-looke.jpg' },
    { nome: 'Sky+ Light', tipo: 'Standard', desc: 'Canais de TV ao vivo', planos: 'Incluso no V7 Essencial e V7 Família', img: 'assets/app-skyplus.jpg' },
    { nome: 'Disney+', tipo: 'Premium', desc: 'Filmes, séries e esportes', planos: 'Incluso no V7 Gamer e V7 Ultra', img: 'assets/app-disney.jpg' },
    { nome: 'HBO Max', tipo: 'Premium', desc: 'Séries e filmes exclusivos', planos: 'Incluso no V7 Gamer e V7 Ultra', img: 'assets/app-hbomax.jpg' }
  ],

  links: {
    segundaVia: 'https://gerencianet.com.br/segunda-via',
    areaCliente: 'https://area.v7telecom.com.br/sac2/',
    testeVelocidade: 'https://www.speedtest.net/pt',
    email: 'contato@v7telecom.com.br',
    instagramGeral: 'v7telecomgeral',
    facebook: 'https://facebook.com/v7telecom',
    vagaWhatsapp: '5511932641191', vagaWhatsappTxt: '(11) 93264-1191',
    vagaEmail: 'recrutamento@v7telecom.com.br'
  }
};

window.V7.wa = function (numero, texto) {
  return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
};
