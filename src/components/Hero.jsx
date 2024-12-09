

function Hero() {
  return (
    <header className="bg-light py-5">
      <div className="container text-center">
        <h1 className="fw-bold">I am Form Kulon</h1>
        <h2 className="text-primary">Website Developer</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus luctus.
        </p>
        <button className="btn btn-warning text-white mt-3">Hire Me</button>
        <div className="mt-4">
          <a href="#" className="me-3">
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a href="#" className="me-3">
            <i className="bi bi-twitter fs-3"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin fs-3"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
