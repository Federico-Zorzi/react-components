import defaultImg from "../assets/img/default-img.png";

export default function Card() {
  return (
    <>
      <div className="col">
        <div className="card m-auto rounded-4">
          <img src={defaultImg} className="card-img-top" alt="default-img" />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Titolo del Post</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              laudantium labore dolorem earum, voluptates ipsam, provident
              dignissimos hic rem praesentium quam, consequatur quas consectetur
              nam! Deserunt impedit numquam facilis voluptatibus.
            </p>

            <button type="button" className="btn btn-warning rounded-1">
              LEGGI DI PIÙ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
