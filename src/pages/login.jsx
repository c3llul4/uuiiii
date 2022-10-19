import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoged, setIsLoged] = useState(false);
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");

  const validate = () => {
    if (user === "InMind" && password === "correioelegante@123") {
      setIsLoged(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <>
      {!isLoged ? (
        <div className="container fundo-primario">
          <div className="bg-white px-3 py-5 rounded shadow">
            <div className="input-login mb-4">
              <label htmlFor="user">Usuário</label>
              <input
                type="text"
                name="user"
                id="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div className="input-login mb-4">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="btn-login" onClick={validate}>
              ENTRAR
            </button>
          </div>
        </div>
      ) : (
        <div className="container fundo-primario">
          <div className="bg-white px-3 py-5 rounded-shadow">
            <div className="input-login mb-4">
              <label htmlFor="category">Categoria</label>
              <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
            <div className="input-login mb-4">
              <label htmlFor="text">Texto</label>
              <input
                type="text"
                name="text"
                id="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <div className="input-login mb-4">
              <label htmlFor="comment">Comentário</label>
              <input
                type="text"
                name="comment"
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </div>
            <button className="btn-add d-flex justify-content-center align-items-center">
              <img src="./img/add.png" alt="Add" className="me-2" /> Adicionar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
