import { Fragment } from "react";
const Clients = () => {
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Volunteer Work</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.saltandlightworks.org/"
                >
                  <img src="/saltlight.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://insightgardenprogram.org/"
                >
                  <img src="/igp.jpeg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdcr.ca.gov/"
                >
                  <img src="/cdcr.jpeg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mujeresadelante.org/"
                >
                  <img src="/mujeres-adelante.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
