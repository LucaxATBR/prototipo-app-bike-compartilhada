import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bike,
  Bus,
  CheckCircle2,
  Clock3,
  Flame,
  Footprints,
  HeartPulse,
  IdCard,
  Leaf,
  MapPinned,
  Route,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from 'lucide-react';
import './styles.css';

const stationImages = [
  {
    src: '/imagens/pdf-imagem-01.webp',
    title: 'Estação no canteiro central',
    caption: 'Entre os pontos de ônibus 2327 e 2328, integrada à ciclovia existente.',
  },
  {
    src: '/imagens/pdf-imagem-02.webp',
    title: 'Estação no Campus UFG Aparecida',
    caption: 'Ponto final das viagens com bicicletário, totem e espaço de convivência.',
  },
];

const appScreens = [
  {
    src: '/imagens/pdf-imagem-03.webp',
    title: 'Acesso acadêmico',
    text: 'Entrada exclusiva para discentes via SIGAA ou validação por matrícula.',
  },
  {
    src: '/imagens/pdf-imagem-04.webp',
    title: 'Métricas de saúde',
    text: 'Cadastro simples para estimar calorias, distância e evolução de uso.',
  },
  {
    src: '/imagens/pdf-imagem-05.webp',
    title: 'Rota multimodal',
    text: 'Planejamento combinando caminhada, ônibus e bicicleta compartilhada.',
  },
  {
    src: '/imagens/pdf-imagem-06.webp',
    title: 'Disponibilidade',
    text: 'Tempo total, trechos da viagem e bicicletas disponíveis na estação.',
  },
  {
    src: '/imagens/pdf-imagem-07.webp',
    title: 'Engajamento',
    text: 'Quilometragem, calorias, metas e uso semanal em um dashboard pessoal.',
  },
];

const stats = [
  { value: '2', label: 'estações iniciais' },
  { value: '7', label: 'telas e imagens do protótipo' },
  { value: '2327/2328', label: 'pontos de ônibus integrados' },
  { value: '1', label: 'crachá para liberar a bike' },
];

const benefits = [
  {
    icon: Bus,
    title: 'Integração com transporte coletivo',
    text: 'A estação no canteiro central conecta a chegada por ônibus ao trecho final em bicicleta.',
  },
  {
    icon: IdCard,
    title: 'Retirada com crachá UFG',
    text: 'O estudante aproxima o crachá institucional no totem e retira uma bicicleta disponível.',
  },
  {
    icon: ShieldCheck,
    title: 'Travessias mais seguras',
    text: 'Faixas elevadas próximo às estações reduzem velocidade e melhoram a acessibilidade.',
  },
  {
    icon: HeartPulse,
    title: 'Mobilidade ativa mensurável',
    text: 'O aplicativo incentiva hábitos saudáveis com distância, calorias e metas semanais.',
  },
];

function App() {
  return (
    <main>
      <header className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegacao principal">
          <a className="brand" href="#inicio" aria-label="UFG Bike início">
            <span className="brand-mark"><Bike size={22} /></span>
            <span>UFG Bike</span>
          </a>
          <div className="nav-links">
            <a href="#estacoes">Estações</a>
            <a href="#app">Aplicativo</a>
            <a href="#impacto">Impacto</a>
          </div>
        </nav>

        <section className="hero-grid hero-grid-clean">
          <div className="hero-copy">
            <span className="eyebrow"><Leaf size={16} /> Mobilidade universitária integrada</span>
            <h1>
              <span>Sistema de Micromobilidade</span>
              <span>Integrada Universitária</span>
            </h1>
            <p>
              Uma proposta para conectar ônibus, bicicletas compartilhadas e o Campus Aparecida da UFG em deslocamentos
              mais rápidos, seguros e sustentáveis para estudantes.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#estacoes">
                <MapPinned size={18} />
                Ver implantação
              </a>
              <a className="secondary-action" href="#app">
                <Smartphone size={18} />
                Conhecer app
              </a>
            </div>
          </div>
        </section>

        <div className="stats-strip" aria-label="Resumo do projeto">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="section intro">
        <div>
          <span className="section-kicker">Proposta</span>
          <h2>Transformar a chegada ao campus em um percurso contínuo.</h2>
        </div>
        <p>
          O projeto implanta estações de bicicletas compartilhadas em pontos estratégicos do transporte coletivo,
          aproveitando a ciclovia existente entre os pontos 2327 e 2328 e criando uma conexão direta com o Campus UFG
          Aparecida.
        </p>
      </section>

      <section className="section stations" id="estacoes">
        <div className="section-heading">
          <span className="section-kicker">Estações</span>
          <h2>Infraestrutura pensada para retirada rápida, devolução flexível e permanência com conforto.</h2>
        </div>
        <div className="station-grid">
          {stationImages.map((image) => (
            <article className="station-card" key={image.title}>
              <img src={image.src} alt={image.title} />
              <div>
                <h3>{image.title}</h3>
                <p>{image.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section flow" aria-label="Como funciona">
        <div className="flow-line" />
        <div className="flow-step">
          <IdCard />
          <span>Estudante autentica pelo crachá institucional.</span>
        </div>
        <div className="flow-step">
          <Bike />
          <span>Totem libera uma bicicleta disponível.</span>
        </div>
        <div className="flow-step">
          <Route />
          <span>App orienta a rota combinando modais.</span>
        </div>
        <div className="flow-step">
          <CheckCircle2 />
          <span>Devolução em qualquer estação participante.</span>
        </div>
      </section>

      <section className="section app-section" id="app">
        <div className="section-heading compact">
          <span className="section-kicker">Aplicativo de apoio</span>
          <h2>Planejamento de viagem e acompanhamento de saúde em uma única plataforma.</h2>
        </div>
        <div className="phone-gallery">
          {appScreens.map((screen) => (
            <article className="phone-card" key={screen.title}>
              <img src={screen.src} alt={screen.title} />
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section impact" id="impacto">
        <div className="impact-copy">
          <span className="section-kicker">Impacto esperado</span>
          <h2>Menos incerteza no deslocamento, mais segurança viária e incentivo à mobilidade ativa.</h2>
          <p>
            A combinação entre ônibus, bicicletas compartilhadas, faixas elevadas e indicadores pessoais torna o
            percurso universitário mais acessível e estimula o uso cotidiano de transportes sustentáveis.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dashboard-preview">
        <div className="metrics-panel">
          <span className="section-kicker">Exemplo de painel</span>
          <h2>Indicadores que ajudam o estudante a perceber seu progresso.</h2>
          <div className="metric-list">
            <div><Footprints size={20} /><strong>115,6 km</strong><span>rodados no mês</span></div>
            <div><Flame size={20} /><strong>2683</strong><span>calorias estimadas</span></div>
            <div><Clock3 size={20} /><strong>2:26/km</strong><span>ritmo médio</span></div>
            <div><UsersRound size={20} /><strong>78%</strong><span>meta mensal</span></div>
          </div>
        </div>
        <img src="/imagens/pdf-imagem-07.webp" alt="Dashboard de saúde e engajamento" />
      </section>

      <footer>
        <strong>Projeto de Sistemas de Transporte 1 - CIT0105</strong>
        <span>Discentes: Alisson Marques Reis e Lucas Augusto Teixeira</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
