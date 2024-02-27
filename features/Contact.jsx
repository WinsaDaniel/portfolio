function Contact() {
  return (
    <div>
      <h1
        id="Contact"
        className="mt-4 mb-4 text-3xl justify-center sm:text-xl md:text-lg lg:text-base"
      >
        Reach Me
      </h1>
      <p className="mb-2 ">
        Feel free. You are welcome for comments, feedbacks, and working
        together.
      </p>
      <div className="container gap-4 mb-4">
        <form
          target="_blank"
          action="https://formsubmit.co/b921f685f00b514e21ddbcc02d4fc069"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group ">
            <textarea
              placeholder="Your Message"
              className="form-control mb-3"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-teal-600 btn-lg btn-dark btn-block"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
