import './App.css';
import logo from './assets/Banner - Azul.png';
import mascote from './assets/mascote.png';

function App() {
  return (
    <>
      <header className="cabecalho">
        <nav className="navbar">
          <img src={logo} alt="Softeam" className="logo" />

          <ul className="menu">
            <li>Sobre</li>
            <li>Catálogo</li>
            <li>Parceiros</li>
            <li>Contato</li>
          </ul>
        </nav>

        <div className="conteudo-cabecalho">
          <div className="texto-cabecalho">
            <h1 className="principal">
              PROCESSO SELETIVO <br />
              <span>2026</span>
            </h1>

            <div className="vagaColaborador">
              <div className="vC">15 vagas disponíveis</div>
              <div className="vC">30+ colaboradores</div>
            </div>

            <button className="botao-inscrever">INSCREVA-SE</button>
          </div>

          <img src={mascote} alt="Mascote" className="mascote" />
        </div>
      </header>

      <section className="sobre">
        <h2>SOBRE O PROCESSO SELETIVO</h2>
        <p>
          O PSEL é voltado para todos os estudantes regularmente matriculados no
          DCOMP - UFS
        </p>
      </section>

      <section className="etapas">
        <h2>ETAPAS DO PSEL</h2>

        <ul className="lista-etapas">
          {[
            {
              n: 1,
              t: 'INSCRIÇÃO',
              d: '20/01 - 25/01',
              p: 'Preenchimento do formulário com seus dados',
            },
            {
              n: 2,
              t: 'TESTE ONLINE',
              d: '26/01 - 30/01',
              p: 'Teste avaliativo online',
            },
            {
              n: 3,
              t: 'DINÂMICAS',
              d: '03/02 - 06/02',
              p: 'Atividades práticas em grupo',
            },
            {
              n: 4,
              t: 'ENTREVISTA',
              d: '10/02 - 12/02',
              p: 'Entrevista individual presencial',
            },
            {
              n: 5,
              t: 'RESULTADOS',
              d: '15/02',
              p: 'Resultado final do PSEL',
            },
          ].map((e) => (
            <li className="etapa" key={e.n}>
              <span className="numero-etapa">{e.n}</span>
              <div className="conteudo-etapa">
                <h3>{e.t}</h3>
                <p>
                  {e.d}
                  <br />
                  {e.p}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1u4fbjh_UYjWI_dPDLeGGfVixKuAQqyw3/view"
          target="_blank"
          rel="noreferrer"
          className="edital-etapa"
        >
          Acessar Edital na íntegra
        </a>
      </section>

      <section className="vagas">
        <h2>QUADRO DE VAGAS DISPONÍVEIS</h2>

        <div className="grid-vagas">
          {[
            ['Marketing', 2],
            ['Recursos Humanos', 3],
            ['Comercial', 2],
            ['Projetos', 8],
            ['Financeiro', 1],
          ].map(([area, qtd]) => (
            <div className="conteudo-vagas" key={area}>
              <h3>{area}</h3>
              <strong>{qtd}</strong>
              <span>{qtd === 1 ? 'vaga' : 'vagas'}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="secao-fomulario">
        <h1>Formulário de Inscrição</h1>
        <p>
        Este formulário é a primeira etapa oficial do processo seletivo. Por isso, preencha com atenção e sinceridade. As informaçẽs coletadas serão usadas para conhecermos melhor o seu perfil, suas motivações e como você pode contribuir com a Softeam
        </p>

        <form className="formulario">
          <label>
            Nome completo*:
            <input type="text" />
          </label>

          <label>
            E-mail*:
            <input type="email" />
          </label>

          <label>
            Telefone:
            <input type="tel" />
          </label>

          <h2>Curso:</h2>

          {['Ciência da Computação', 'Engenharia da Computação', 'Sistemas de Informação'].map((c) => (
            <div className="opcao-curso" key={c}>
              <input type="radio" name="curso" id={c} />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}

          <label>
            Por que você quer fazer parte da softeam?
            <input type="text" />
          </label>

          <button className="botao-inscrever">Enviar</button>
        </form>
      </section>

      <footer className="rodape">
        <p>2026 Softeam — Processo Seletivo</p>
      </footer>
    </>
  );
}

export default App;
