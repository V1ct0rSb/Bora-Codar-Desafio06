import "./styles.css";

import { FaPlane } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Cartão de embarque</h1>

      <div className="container-card">
        <div className="upside">
          <div class="wrapper">
            <div class="box">
              <p>Voo</p>
              <p>
                <span>R$995</span>
              </p>
            </div>

            <div class="box2">
              <p>Data</p>
              <p>
                <span>23/05/2023</span>
              </p>
            </div>
          </div>

          <div class="wrapper2">
            <div class="box3">
              <p>São Paulo, Brasil</p>
              <p>
                <span>GRU</span>
              </p>
              <p>17:00</p>
            </div>

            <div class="emoji">
              <FaPlane />
            </div>

            <div class="box4">
              <p>São Francisco, EUA</p>
              <p>
                <span>SFO</span>
              </p>
              <p>04:48¹</p>
            </div>
          </div>
        </div>

        <div className="middle">
          <div class="box5">
            <p>Passageiro</p>
            <p>
              <span>Rodrigo Terron</span>
            </p>
          </div>

          <div class="box6">
            <p>Assento</p>
            <p>
              <span>28A</span>
            </p>
          </div>
        </div>

        <div className="bottom">
          <div class="wrapper3">
            <p className="span1">Embarque</p>
            <p>
              <span className="span2">16:15</span>
            </p>

            <div class="box7">
              <p>Terminal</p>
              <p>
                <span>2</span>
              </p>
            </div>

            <div class="box8">
              <p>Portão</p>
              <p>
                <span>15</span>
              </p>
            </div>
          </div>

          <div class="code">
            <img src="qrCode.png" alt="QR Code" />
            <p className="span3">Grupo de embarque: 3</p>
          </div>

          <div class="wrapper4">
            <p>
              <span>Atenção:</span> o portão fecha 16:45
            </p>
          </div>
        </div>

        <p className="footer">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </p>
      </div>
    </div>
  );
}
