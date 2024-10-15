const Design = () => {
  return (
    <div className="design__container">
      <div className="design__content">
        <div className="design__logo-section">
          <div className="design__logo-image"></div>
          <div className="design__intro-text">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </div>
        </div>
        <div className="design__form-section">
          <div className="design__heading">
            Let’s get started
            <br />
            with a few simple steps
          </div>
          <div className="design__inputs">
            <div className="design__input-field">
              <label className="design__input-label">Email</label>
              <input className="design__input" />
            </div>
            <br />
            <br />

            <div className="design__input-field">
              <label className="design__input-label">Full Name</label>
              <input className="design__input" />
            </div>
            <br />
            <br />

            <div className="design__input-field">
              <label className="design__input-label">Password</label>
              <input className="design__input" />
            </div>
          </div>

          <div className="design__signup-btn">
            <div className="design__signup-text">Sign up</div>
          </div>

          <div className="design__agreement-section">
            <div className="design__terms">
              By signing up, you agree to our
              <span className="design__terms-link"> Terms of Service.</span>
            </div>
            <div className="design__login">
              Already have an account?
              <span className="design__login-link"> Log in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
