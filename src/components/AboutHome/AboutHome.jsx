import "./AboutHome.css";

export default function AboutHome() {
  return (
    <div className="about-home d-flex justify-content-center align-items-center">
      <div className="green-bg d-flex justify-content-center">
        <div className="about-text-container d-flex justify-content-center flex-column text-center">
          <h3>
            <span>ABOUT ALIVE 9.0</span>
          </h3>
          <h6>
            Alive merupakan acara tahunan yang diselenggarakan oleh UMN Medical
            Center. Tiap tahunnya, Alive mengangkat tema kesehatan. Pada tahun
            ini, Alive 9.0 mengangkat tema besar Nutrient Food. Kalau
            dirincikan, sub-tema Alive 9.0 adalah Food and Body (FnB). Tema ini
            diangkat guna meningkatkan pengetahuan publik terhadap betapa
            pentingnya peran nutrisi makanan kepada tubuh.
          </h6>
          <button className="mascot-btn mx-auto">MEET OUR MASCOT!</button>
        </div>
      </div>
    </div>
  );
}
