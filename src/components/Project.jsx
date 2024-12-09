

function Projects() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold">My Projects</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus luctus.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150" // Ganti URL dengan gambar asli Anda
              alt="Project 1"
              className="img-fluid mb-3 rounded"
            />
            <h5>Project 1</h5>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150" // Ganti URL dengan gambar asli Anda
              alt="Project 2"
              className="img-fluid mb-3 rounded"
            />
            <h5>Project 2</h5>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150" // Ganti URL dengan gambar asli Anda
              alt="Project 3"
              className="img-fluid mb-3 rounded"
            />
            <h5>Project 3</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
