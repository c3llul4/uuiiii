import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Correio Elegante</title>
      </Head>
      <main className="fundo-primario">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8">
              <Link href="/frases">
                <a className="btn-destaque">Escolher frases</a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a
                href=""
                className="link-login d-flex justiyf-content-center align-items-center"
              >
                Login <img src="./img/login.png" alt="Login" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
