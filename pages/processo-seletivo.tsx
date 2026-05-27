import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Inscricao.module.css";
import { leagueSpartan } from "@/app/ts/fonts";
import Waves from "@/app/components/HeroSection/waves/Waves";
import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar/index";
import { InscricaoPsel } from "@/types/InscricaoPsel";
import { InscricaoPselService } from "@/services/inscricaoPselService";
import { Question } from "@/types/Question";
import { gerarFormService } from "@/services/gerarFormService";
import { SubmissionPayload } from "@/types/InscricaoPsel";

export default function Inscricao() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [formData, setFormData] = useState<InscricaoPsel>({
    nome: "",
    email: "",
    telefone: "",
    curso: "",
    motivacao: "",
  });

  useEffect(() => {
    async function carregarPerguntas() {
      try {
        const response = await gerarFormService();
        // Como o service já retorna data.items, response já é o array
        setQuestions(response || []);
      } catch (error) {
        console.error("Erro ao carregar perguntas", error);
      }
    }
    carregarPerguntas();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // tira acentos e deixa minusculo
    const normalizedName = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    setFormData((prev) => ({
      ...prev,
      [normalizedName]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Montando o array Answers mapeando as questões reais que vieram do GET
    const payload: SubmissionPayload = {
      Answers: questions.map((q) => {
        const nomeNormalizado = q.titulo
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        return {
          QuestionId: q.id,
          // Pegamos o valor do formData usando o nome normalizado
          Value: (formData as any)[nomeNormalizado] || "",
        };
      }),
    };

    console.log("Payload sendo enviado:", payload);

    try {
      await InscricaoPselService(payload);
      alert("Inscrição enviada com sucesso!");
      // Reset do formulário...
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar: " + error);
    }
  };

  const wavePath =
    "M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,186.7C480,213,549,235,617,229.3C685.7,224,754,192,823,170.7C891.4,149,960,139,1029,138.7C1097.1,139,1166,149,1234,138.7C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z";

  return (
    <>
      <Head>
        <title>Processo Seletivo 2026 - Softeam</title>
        <meta name="description" content="Inscreva-se no Processo Seletivo da Softeam" />
      </Head>

      <Navbar bgColor="bg-blue-072763" />

      <div className={`${styles.container} ${leagueSpartan.className}`}>
        <header className={styles.cabecalho}>
          <div className={styles["conteudo-cabecalho"]}>
            <div className={styles["texto-cabecalho"]}>
              <h1 className={styles.principal}>
                PROCESSO SELETIVO <br />
                <span>2026</span>
              </h1>

              <div className={styles.vagaColaborador}>
                <div className={styles.vC}>16 vagas disponíveis</div>
                <div className={styles.vC}>30+ colaboradores</div>
              </div>

              <a href="#formulario">
                {" "}
                <button className={styles["botao-inscrever"]}> INSCREVA-SE </button>{" "}
              </a>
            </div>

            <img src="/assets/inscricao/mascote.png" alt="Mascote" className={styles.mascote} />
          </div>
        </header>

        <Waves d={wavePath} fill="#002E85" bg={styles.bgHeader} hClass="h-24 md:h-36" count={1} />

        <section className={styles.sobre}>
          <h2>SOBRE O PROCESSO SELETIVO</h2>
          <p>O PSEL é voltado para todos os estudantes regularmente matriculados no DCOMP - UFS</p>
        </section>

        <section className={styles.etapas}>
          <h2>ETAPAS DO PSEL</h2>

          <ul className={styles["lista-etapas"]}>
            {[
              { n: 1, t: "INSCRIÇÃO", d: "20/01 - 22/01", p: "Preenchimento do formulário com seus dados" },
              { n: 2, t: "TESTE ONLINE", d: "23/01 - 31/01", p: "Teste avaliativo online" },
              { n: 3, t: "DINÂMICAS", d: "05/02 - 10/02", p: "Atividades práticas em grupo" },
              { n: 4, t: "ENTREVISTA", d: "12/02 - 15/02", p: "Entrevista individual presencial" },
              { n: 5, t: "RESULTADOS", d: "20/02", p: "Resultado final do PSEL" },
            ].map((e) => (
              <li className={styles.etapa} key={e.n}>
                <span className={styles["numero-etapa"]}>{e.n}</span>
                <div className={styles["conteudo-etapa"]}>
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
            className={styles["edital-etapa"]}
          >
            Acessar Edital na íntegra
          </a>
        </section>

        <section className={styles.vagas}>
          <h2>QUADRO DE VAGAS DISPONÍVEIS</h2>

          <div className={styles["grid-vagas"]}>
            {[
              ["Marketing", 2],
              ["Recursos Humanos", 3],
              ["Comercial", 2],
              ["Projetos", 8],
              ["Financeiro", 1],
            ].map(([area, qtd]) => (
              <div className={styles["conteudo-vagas"]} key={area}>
                <h3>{area}</h3>
                <strong>{qtd}</strong>
                <span>{qtd === 1 ? "vaga" : "vagas"}</span>
              </div>
            ))}
          </div>
        </section>

        <Waves d={wavePath} fill="#003DB0" bg={styles.bgVagas} hClass="h-24 md:h-36" count={1} />

        <section id="formulario" className={styles["secao-fomulario"]}>
          <h1>Formulário de Inscrição</h1>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            {questions.map((q) => {
              // Normalizamar para ficar igual ao que temos na api
              const nomeNormalizado = q.titulo
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();

              return (
                <div key={q.id} className={styles.campoPergunta}>
                  <label>
                    {q.titulo}
                    {q.obrigatorio && "*"}:
                  </label>

                  {q.tipo === 1 && (
                    <input
                      type="text"
                      name={q.titulo}
                      className={styles["input-texto"]}
                      required={q.obrigatorio}
                      // Buscamos no formData usando a chave sem acento
                      value={(formData as any)[nomeNormalizado] || ""}
                      onChange={handleChange}
                    />
                  )}

                  {q.tipo === 2 && (
                    <div className={styles.containerOpcoes}>
                      {q.opcoes.map((op) => (
                        <div className={styles["opcao-curso"]} key={op.id}>
                          <input
                            type="radio"
                            name={q.titulo} // Nome original da pergunta
                            value={op.texto}
                            // Checamos contra o valor normalizado no state
                            checked={(formData as any)[nomeNormalizado] === op.texto}
                            onChange={handleChange}
                          />
                          <label className={styles["label-curso"]}>{op.texto}</label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <button type="submit" className={styles["botao-inscrever"]}>
              Enviar
            </button>
          </form>
        </section>

        <Waves d={wavePath} fill="#004AD5" bg={styles.bgForm} hClass="h-24 md:h-36" count={1} />

        <footer className={styles.rodape}>
          <p>2026 Softeam — Processo Seletivo</p>
        </footer>
      </div>
    </>
  );
}
