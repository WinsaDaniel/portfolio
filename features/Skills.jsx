function Skills() {
  return (
    <>
      <h1
        id="Skills"
        className="mb-4 py-4 px-3 font-bold text-3xl text-stone-800 mt-16"
      >
        Skills
      </h1>
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src="../images/Tailwind.jpg"
              className="d-block mx-auto"
              alt="Tailwind CSS"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/react.jpg"
              className="d-block mx-auto"
              alt="React"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/bootstrap.jpg"
              className="d-block mx-auto"
              alt="Bootstrap"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/css2.jpg"
              className="d-block mx-auto"
              alt="css"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/JS2.jpg"
              className="d-block mx-auto"
              alt="JavaScript"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target=".carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target=".carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Skills;
