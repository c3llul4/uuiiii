import Head from "next/head";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";

const frases = () => {
  const [modal, setModal] = useState(null);
  const [copy, setCopy] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [categoryList, setCategoryList] = useState("");
  const [category, setCategory] = useState([{ nome: "" }]);

  function execCopy() {
    navigator.clipboard.writeText(modal.frase);
    setCopy(true);
  }

  const frasesJson = [
    {
      categoria: "Família",
      cantadas: [
        {
          titulo: "Coração fica quentinho",
          frase:
            "O tipo sanguíneo da minha família é O+... os mais bonitos de todos",
        },
        {
          titulo: "Muita União",
          frase:
            "Eu só preciso de duas coisas para conviver com a minha família: calmante e terapia",
        },
        {
          titulo: "Que amor!!",
          frase: "Por você eu até morreria, mas não lavo um prato de louça",
        },
        {
          titulo: "Aawwnnn",
          frase:
            "Obrigado(a) por tudo que fez e faz por mim, saiba que de 10 vidas, 11 eu te daria",
        },
        {
          titulo: "Sentimentos nas alturas",
          frase:
            "Se não for para falar gritando, minha família nem abre a boca",
        },
        {
          titulo: "Amor e 'ódio' andando de ladin",
          frase:
            "Família é assim: quando briga não parece que está brigando e, quando conversa, parece que estão se matando.",
        },
        {
          titulo: "Que doidera",
          frase:
            "A minha família é assim: um doido, um mais doido ainda e todos tentando conviver um com o outro",
        },
        {
          titulo: "Família querida!",
          frase:
            "Vocês são o melhor presente que eu poderia ter: uma família abençoada.",
        },
        {
          titulo: "Achei brega hein",
          frase:
            "Se preto fosse paixão, e branco fosse carinho, o que eu sinto por você seria xadrezinho",
        },
      ],
    },
    {
      categoria: "Cantadas Inteligentes",
      cantadas: [
        {
          titulo: "Deixa eu estudar sua língua",
          frase:
            "pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino. ",
        },
        {
          titulo: "Acho que tá rolando uma química aqui",
          frase: "Não sou adenina mas sou louco por timina.",
        },
        {
          titulo: "Mais atrativa que carga negativa pela positiva",
          frase:
            "Me chama de tabela Periódica e diz que rolou uma química entre nós.",
        },
        {
          titulo: "Única história que quero saber é a nossa",
          frase: "fazer enem? Só se for pra entrar no seu coração. ",
        },
        {
          titulo: "Você é mais atrativa que a Terra",
          frase:
            "Nosso amor deve ser de outro mundo, pq mesmo fora da gravidade da Terra, eu ficaria caidinho por vc...",
        },
        {
          titulo: "Uníca química que quero saber, é a nossa",
          frase:
            "Queria ser um gás nobre, mas um gás nobre eu não posso ser. Porque um gás nobre se estabiliza com 8 elétrons, e eu me estabilizo só com vc.",
        },
      ],
    },
    {
      categoria: "Cantadas Boas",
      cantadas: [
        {
          titulo: "Seu pai é padeiro?",
          frase:
            "Me passa seu Instagram? É que a minha mãe falou para eu seguir o meu sonho.",
        },
        {
          titulo: "Já vai no Maps que eu quero cada destino com você",
          frase: "Você não é GPS quebrado, mas me deixa sem rumo.",
        },
        {
          titulo: "É bom tu não ter entrado nesse site pelo Google",
          frase: "Seu nome é Google? Porquê você tem tudo que eu procuro.",
        },
        {
          titulo: "Tem que pegar fila, aproveita que tá vazia ;)",
          frase:
            "Onde é que eu deixo o meu currículo para concorrer à vaga de amor da sua vida?",
        },
        {
          titulo: "Que isso meu filho, calma!",
          frase:
            "Se as estrelas fossem tão lindas quanto você, eu passaria noites em claro olhando para elas.",
        },
        {
          titulo: "Eu não era seu tudo?? aff...",
          frase: "Se nada dura para sempre, quer ser meu nada?",
        },
        {
          titulo: "Vi nem o tempo passar, tava olhando para você",
          frase:
            "Um mês atrás eu era apaixonado(a) por você. E parece que estamos no mês passado ainda.",
        },
        {
          titulo: "Se quiser até te dou um óculos",
          frase:
            "Você acredita em amor a primeira vista? Ou eu devo passar aqui de novo",
        },
        {
          titulo: "Me chama de Beijamim...",
          frase:
            "Queria ser um beija-flor, mas beija-flor não posso ser, beija-flor beija várias flores, e eu só quero beijar você",
        },
        {
          titulo: "Sentindo uma mistura de sentimentos aqui",
          frase:
            "Você nunca poderia ser anestesista. Porque é impossivel não sentir nada perto de você.",
        },
        {
          titulo: "Se bem que dinheiro smpre é bem vindo :D",
          frase:
            "Eu não quero seu dinheiro, nem sua herança, eu apenas quero o seu nome, gravado na minha aliança.",
        },
        {
          titulo: "E olha que eu conheço bem Minas Gerais",
          frase:
            "A cidade maravilhosa só se chama Rio de Janeiro pq vc não tinha nascido ainda.",
        },
      ],
    },
    {
      categoria: "Cantadas Engraçadas",
      cantadas: [
        {
          titulo: "É mais difícil de ter doque achar diamante",
          frase:
            "Meu amor é igual ao mapa de Minecraft: infinito e cheio de surpresas.",
        },
        {
          titulo: "Crítica social logo agora?",
          frase: "Meu amor por você é igual à obra do governo. Nunca acaba.",
        },
        {
          titulo: "UUIIII",
          frase: "Eu não sou Casas Bahia, mas prometo dedicação total a você.",
        },
        {
          titulo: "Você tem certeza disso?",
          frase:
            "As rosas são vermelhas, violetas são azuis, eu não sei rimar, mas posso namorar você?",
        },
        {
          titulo: "É melhor torcer para ela não conhecer Zeus",
          frase:
            "Eu queria ser grego, mas grego eu não posso ser, porque grego tem várias deusas e minha única deusa é você.",
        },
        {
          titulo: "Espero que diga que sim, joelho ralado ainda doeria menos",
          frase:
            "Você tem um band-aid? Porque ralei meu joelho caindo de amores por você",
        },
      ],
    },
  ];

  const closeFrase = () => {
    setModal("");
    setCopy(false);
  };

  const closeCategory = () => {
    setOpenCategory(false);
  };

  const changeCategory = (cat) => {
    let lista = [...category];
    // console.log(lista);
    if (lista.map((y) => y.nome !== cat)) {
      lista.push({ nome: cat });
    } else {
      console.log("hi");
      lista.filter((x) => x.nome !== cat);
    }
    lista.map((y) => console.log(y.nome, cat));
    setCategory(lista);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      <Head>
        <title>Correio Elegante - Frases</title>
      </Head>
      <div className="fundo-primario">
        {/* <div className="container">
          <button
            className="btn-destaque"
            onClick={() => setOpenCategory(true)}
          >
            Categorias
          </button>
        </div> */}
        {frasesJson &&
          frasesJson.map((destaque, index) => (
            <section
              className="mb-5 mt-0 container"
              id={destaque.categoria}
              key={index}
            >
              <div className="d-flex justify-content-center align-items-center mt-0">
                <h2 className="title-frases">{destaque.categoria}</h2>
              </div>
              <div className="row">
                {destaque.cantadas.map((cantada, index) => (
                  <Card
                    key={index}
                    onClick={() =>
                      setModal({ titulo: cantada.titulo, frase: cantada.frase })
                    }
                  >
                    {cantada.frase}
                  </Card>
                ))}

                <Card
                  onClick={() =>
                    setModal({
                      titulo: "frase:",
                      frase:
                        "eu só preciso de duas coisas para conviver com a minha família: calmante e terapia",
                    })
                  }
                >
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ maxWidth: 300, overflow: "hidden" }}
                      src="./img/image-phrase.jpeg"
                      alt=""
                    />
                  </div>
                </Card>
              </div>
            </section>
          ))}
        {openCategory && (
          <>
            <div className="blur" onClick={closeCategory} />
            <div className="bg-white rounded p-4 my-modal">
              <div className="refrao">
                <h5 className="mb-3 d-flex justify-content-center font-weight-normal refrao">
                  Escolha as categorias que gostaria de ver:
                </h5>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center my-5">
                {frasesJson &&
                  frasesJson.map((categoria, index) => (
                    <div
                      key={index}
                      className={`categoria-option $"{
                        category.map((x) => x.nome == categoria.categoria)
                          ? "bg-success"
                          : "bg-white"
                      }"`}
                      onClick={() => changeCategory(categoria.categoria)}
                    >
                      {categoria.categoria}
                    </div>
                  ))}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn-destaque">Salvar</button>
                {/* <button
                  className="btn-destaque"
                  onClick={() => setCategory(false)}
                >
                  Cancelar
                </button> */}
              </div>
            </div>
          </>
        )}
        {modal && (
          <>
            <div className="blur" onClick={closeFrase} />
            <div className="bg-white rounded p-4 my-modal">
              <h5 className=" d-flex justify-content-center font-weight-normal refrao text-center">
                {modal.titulo}
              </h5>
              <p className="my-5 text-center">{modal.frase}</p>
              <button className=" copy" onClick={() => execCopy()}>
                <img src="./img/copy.png" alt="Copy" /> Copiar
              </button>
              {copy && (
                <span className="ml-2" style={{ fontFamily: "Raleway" }}>
                  {" "}
                  Copiado
                </span>
              )}
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default frases;
