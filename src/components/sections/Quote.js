import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quote</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                I volunteer because I believe in the power of collective action
                to make the world a better place. It's my way of contributing
                to positive change in my community and beyond. Through
                volunteering, I aim to inspire others and leave a lasting
                impact on the world.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="images/profile-me.JPG" alt="David Garcia" />
                </div>
                <div className="info">
                  <div className="name">David Garcia</div>
                  <div className="company">Full Stack Web Developer</div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Quote;
