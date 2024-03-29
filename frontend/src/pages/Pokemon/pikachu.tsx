export default function pikachuPage() {
    return (
      <div>
        <h1>Welcome</h1>
        <h2>This page use tecnology of ICP and AZLE</h2>
        <div>
          <h1>Login or register</h1>
          <form>
            {/* 2 column grid layout with text inputs for the first and last names */}
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example2">
                    Last name
                  </label>
                </div>
              </div>
            </div>
  
            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
            </div>
  
            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="form3Example4"
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
            </div>
  
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example33"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>
  
            {/* Submit button */}
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-block mb-4"
            >
              Sign up
            </button>
  
            {/* Register buttons */}
            <div className="text-center">
              <p>or sign up with:</p>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
  
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>
  
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>
  
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }