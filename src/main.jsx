import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bell,
  Bike,
  Bus,
  CheckCircle2,
  Clock3,
  Flame,
  Footprints,
  HeartPulse,
  IdCard,
  Leaf,
  Lightbulb,
  MapPinned,
  MessageSquareText,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  SunMedium,
  UsersRound,
  Wrench,
} from 'lucide-react';
import './styles.css';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const stats = [
  { value: '8', label: 'respondentes na validação' },
  { value: '4,6', label: 'nota média da solução' },
  { value: '2', label: 'estações iniciais propostas' },
  { value: '5', label: 'melhorias incorporadas' },
];

const problems = [
  {
    icon: Bus,
    title: 'Dependência da linha 555',
    text: 'O acesso ao campus fica concentrado em poucos horários fixos, reduzindo a flexibilidade dos estudantes.',
  },
  {
    icon: Footprints,
    title: 'Última milha longa',
    text: 'Mesmo chegando de ônibus próximo ao campus, parte do deslocamento final ainda exige caminhada e tempo adicional.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e conforto',
    text: 'Travessias, iluminação, clima e permanência nas estações influenciam a decisão de usar ou não a solução.',
  },
];

const alternatives = [
  'Melhorias na linha de ônibus existente',
  'Sistema de vans ou transporte interno',
  'Bicicletas compartilhadas gratuitas para estudantes',
];

const features = [
  {
    icon: IdCard,
    title: 'Retirada por crachá UFG',
    text: 'A bicicleta pode ser liberada diretamente no totem, sem depender do celular no momento da retirada.',
  },
  {
    icon: Route,
    title: 'Roteamento multimodal',
    text: 'O app combina caminhada, ônibus e bicicleta, exibindo tempo total, trechos e estação recomendada.',
  },
  {
    icon: Radar,
    title: 'Disponibilidade em tempo real',
    text: 'O estudante visualiza bicicletas disponíveis e recebe indicação de estação alternativa quando necessário.',
  },
  {
    icon: HeartPulse,
    title: 'Saúde e engajamento',
    text: 'Dashboard com quilometragem, calorias estimadas, ritmo médio, metas e histórico de uso.',
  },
];

const improvements = [
  {
    icon: Bell,
    title: 'Alertas de disponibilidade',
    text: 'Avisos quando uma estação estiver com poucas bicicletas ou próxima da lotação.',
  },
  {
    icon: SunMedium,
    title: 'Abrigo, bancos e iluminação',
    text: 'Estações com cobertura, área de permanência, bebedouro e iluminação para uso em diferentes horários.',
  },
  {
    icon: Wrench,
    title: 'Plano de manutenção',
    text: 'Rotina de revisão das bicicletas, freios, travas e totens para reduzir falhas no uso cotidiano.',
  },
  {
    icon: Lightbulb,
    title: 'Orientação no primeiro uso',
    text: 'Onboarding curto no app e sinalização física nas estações para explicar retirada, rota e devolução.',
  },
  {
    icon: ShieldCheck,
    title: 'Travessias mais seguras',
    text: 'Faixas elevadas e sinalização próximas aos pontos de ônibus e às estações de bicicletas.',
  },
];

const interviews = [
  { name: 'Fabio ****', rating: 5, point: 'Resolve a distância entre ônibus e campus, mas precisa evitar falta de bikes no pico.' },
  { name: 'Natalia ****', rating: 4, point: 'A proposta é clara; pediu cobertura, iluminação e consulta prévia de disponibilidade.' },
  { name: 'Alberto ****', rating: 4, point: 'Viu ganho de tempo; reforçou a necessidade de manutenção frequente.' },
  { name: 'Arthur ****', rating: 5, point: 'Gostou da retirada com crachá; apontou filas se o totem for lento.' },
  { name: 'Pedro ****', rating: 4, point: 'Valorizou a rota multimodal; pediu alertas e sinalização melhor no percurso.' },
  { name: 'Matheus ****', rating: 5, point: 'Usaria com frequência se houvesse metas, histórico e indicadores de saúde.' },
  { name: 'Jocelma ****', rating: 5, point: 'Destacou conforto, segurança e necessidade de estrutura para permanência.' },
  {
    name: 'Nathan ****',
    rating: 5,
    point:
      'Achou o site claro e a solução útil; sugeriu incentivos por quilometragem ou benefícios para aumentar o uso das bicicletas.',
  },
];

const comparison = [
  {
    before: 'Protótipo inicial mostrava estações, app e dashboard como conceito.',
    after: 'Protótipo final organiza a solução por problema, causa, validação e melhoria implementada.',
  },
  {
    before: 'Disponibilidade aparecia apenas como informação na tela de rota.',
    after: 'Disponibilidade ganha alertas, estação alternativa e leitura rápida no painel da solução.',
  },
  {
    before: 'Conforto e segurança apareciam como elementos gerais de infraestrutura.',
    after: 'Conforto e segurança entram como resposta direta às entrevistas: abrigo, iluminação, faixas e sinalização.',
  },
  {
    before: 'Validação ficava separada da apresentação visual da solução.',
    after: 'Validação passa a orientar as diferenças entre versão inicial e versão final.',
  },
];

const appScreens = [
  {
    src: assetPath('imagens/pdf-imagem-03.webp'),
    title: 'Acesso acadêmico',
    text: 'Login discente via SIGAA, matrícula ou identificação institucional.',
  },
  {
    src: assetPath('imagens/pdf-imagem-05.webp'),
    title: 'Rota integrada',
    text: 'Cálculo do caminho combinando ônibus, caminhada e bicicleta.',
  },
  {
    src: assetPath('imagens/pdf-imagem-06.webp'),
    title: 'Escolha da estação',
    text: 'Tempo total, distância, disponibilidade e alternativas de trajeto.',
  },
  {
    src: assetPath('imagens/pdf-imagem-07.webp'),
    title: 'Indicadores pessoais',
    text: 'Metas, calorias, quilometragem e engajamento semanal.',
  },
];

function Rating({ value }) {
  return (
    <div className="rating" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={17} fill={index < value ? 'currentColor' : 'none'} aria-hidden="true" />
      ))}
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="hero final-hero" id="inicio">
        <nav className="topbar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="UFG Bike início">
            <span className="brand-mark"><Bike size={22} /></span>
            <span>UFG Bike</span>
          </a>
          <div className="nav-links">
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#validacao">Validação</a>
            <a href="#final">Protótipo final</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> Protótipo final validado</span>
            <h1>
              <span>Micromobilidade integrada</span>
              <span>para a última milha universitária</span>
            </h1>
            <p>
              A versão final conecta ônibus, bicicletas compartilhadas, crachá UFG, rotas multimodais e melhorias
              indicadas pelos usuários para tornar o acesso ao Campus Aparecida mais rápido, seguro e previsível.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#final">
                <CheckCircle2 size={18} />
                Ver versão final
              </a>
              <a className="secondary-action" href="#validacao">
                <MessageSquareText size={18} />
                Ver validação
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={assetPath('imagens/pdf-imagem-01.webp')} alt="Estação de bicicletas integrada ao ponto de ônibus" />
            <div className="floating-badge">
              <MapPinned size={18} />
              <span>Pontos 2327/2328 conectados ao Campus UFG Aparecida</span>
            </div>
          </div>
        </section>

        <div className="stats-strip" aria-label="Resumo do protótipo final">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="section intro" id="problema">
        <div>
          <span className="section-kicker">Problema e causas</span>
          <h2>O protótipo responde à dificuldade de acesso no trecho final até o campus.</h2>
        </div>
        <p>
          A análise parte da rotina de estudantes que dependem do transporte coletivo, enfrentam pouca flexibilidade de
          horários e ainda precisam vencer a última milha entre pontos de ônibus e o Campus Aparecida da UFG.
        </p>
      </section>

      <section className="section problem-grid">
        {problems.map(({ icon: Icon, title, text }) => (
          <article className="benefit" key={title}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section decision-section">
        <div className="decision-copy">
          <span className="section-kicker">Análise multicritério</span>
          <h2>A solução escolhida foi o sistema gratuito de bicicletas compartilhadas para estudantes.</h2>
          <p>
            A Semana 2 comparou alternativas por notas e pesos. A proposta vencedora foi escolhida por atacar a última
            milha, aproveitar a ciclovia existente e ter benefícios de acesso, saúde, satisfação e sustentabilidade.
          </p>
        </div>
        <div className="alternative-list" aria-label="Soluções avaliadas">
          {alternatives.map((alternative, index) => (
            <div className={index === 2 ? 'alternative winner' : 'alternative'} key={alternative}>
              <span>{index + 1}</span>
              <strong>{alternative}</strong>
              {index === 2 && <small>Vencedora</small>}
            </div>
          ))}
        </div>
      </section>

      <section className="section stations" id="solucao">
        <div className="section-heading">
          <span className="section-kicker">Solução proposta</span>
          <h2>Duas estações, retirada simplificada e app como apoio ao planejamento.</h2>
        </div>
        <div className="station-grid">
          <article className="station-card">
            <img src={assetPath('imagens/pdf-imagem-01.webp')} alt="Estação no canteiro central" />
            <div>
              <h3>Estação de integração</h3>
              <p>Localizada entre os pontos 2327 e 2328, aproveitando a ciclovia e conectando ônibus à bicicleta.</p>
            </div>
          </article>
          <article className="station-card">
            <img src={assetPath('imagens/pdf-imagem-02.webp')} alt="Estação no Campus UFG Aparecida" />
            <div>
              <h3>Estação no campus</h3>
              <p>Ponto de devolução dentro da UFG, com bicicletário, totem e área de convivência para estudantes.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section flow" aria-label="Como funciona">
        <div className="flow-line" />
        <div className="flow-step">
          <IdCard />
          <span>Aluno autentica pelo crachá ou login acadêmico.</span>
        </div>
        <div className="flow-step">
          <Bike />
          <span>Totem libera uma bicicleta disponível.</span>
        </div>
        <div className="flow-step">
          <Route />
          <span>App orienta o trajeto multimodal.</span>
        </div>
        <div className="flow-step">
          <CheckCircle2 />
          <span>Devolução é registrada em qualquer estação.</span>
        </div>
      </section>

      <section className="section feature-section">
        <div className="section-heading compact">
          <span className="section-kicker">Características do protótipo</span>
          <h2>Cada recurso foi pensado para uma causa identificada no problema.</h2>
        </div>
        <div className="benefit-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section app-section">
        <div className="section-heading compact">
          <span className="section-kicker">Apresentação do protótipo</span>
          <h2>O aplicativo atua como plataforma de consulta, rota e acompanhamento.</h2>
        </div>
        <div className="phone-gallery final-gallery">
          {appScreens.map((screen) => (
            <article className="phone-card" key={screen.title}>
              <img src={screen.src} alt={screen.title} />
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section interviews" id="validacao">
        <div className="section-heading">
          <span className="section-kicker">Validação com usuários</span>
          <h2>As entrevistas confirmaram intenção de uso e revelaram melhorias para a versão final.</h2>
          <p>
            Foram avaliados clareza, capacidade de resolver o problema percebido, intenção de uso, pontos de melhoria e
            dificuldades previstas. As notas ficaram entre 4 e 5 estrelas.
          </p>
        </div>
        <div className="interview-grid compact-interviews">
          {interviews.map((interview) => (
            <article className="interview-card" key={interview.name}>
              <div className="interview-header">
                <div>
                  <h3>{interview.name}</h3>
                  <Rating value={interview.rating} />
                </div>
                <strong>{interview.rating}/5</strong>
              </div>
              <p>{interview.point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-section" id="final">
        <div className="section-heading">
          <span className="section-kicker">Protótipo final</span>
          <h2>Melhorias aplicadas a partir das respostas dos entrevistados.</h2>
        </div>
        <div className="improvement-grid">
          {improvements.map(({ icon: Icon, title, text }) => (
            <article className="improvement-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section comparison-section">
        <div className="section-heading compact">
          <span className="section-kicker">Inicial x final</span>
          <h2>Principais diferenças destacadas para a apresentação.</h2>
        </div>
        <div className="comparison-list">
          {comparison.map((item) => (
            <article className="comparison-card" key={item.before}>
              <div>
                <span>Antes</span>
                <p>{item.before}</p>
              </div>
              <div>
                <span>Depois</span>
                <p>{item.after}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dashboard-preview">
        <div className="metrics-panel">
          <span className="section-kicker">Indicadores finais</span>
          <h2>O painel reforça a proposta de mobilidade ativa e uso contínuo.</h2>
          <div className="metric-list">
            <div><Footprints size={20} /><strong>115,6 km</strong><span>rodados no mês</span></div>
            <div><Flame size={20} /><strong>2683</strong><span>calorias estimadas</span></div>
            <div><Clock3 size={20} /><strong>2:26/km</strong><span>ritmo médio</span></div>
            <div><UsersRound size={20} /><strong>78%</strong><span>meta mensal</span></div>
          </div>
        </div>
        <img src={assetPath('imagens/pdf-imagem-07.webp')} alt="Dashboard de saúde e engajamento" />
      </section>

      <footer>
        <strong>Projeto de Sistemas de Transporte 1 - CIT0105</strong>
        <span>Discentes: Alisson Marques Reis e Lucas Augusto Teixeira</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
