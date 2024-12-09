

function Services() {
  const services = [
    { title: "UI/UX", description: "Description of UI/UX Design." },
    { title: "Web Design", description: "Description of Web Design." },
    { title: "App Design", description: "Description of App Design." },
    { title: "Graphic Design", description: "Description of Graphic Design." },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold">Services</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
          luctus.
        </p>
        <div className="row mt-4">
          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div className="card p-3 shadow-sm">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
