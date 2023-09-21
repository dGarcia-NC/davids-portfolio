import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Projects</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("express")}`}
            onClick={handleFilterKeyChange("express")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="express" />
              Express
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("python")}`}
            onClick={handleFilterKeyChange("python")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="python" />
              Python
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("react")}`}
            onClick={handleFilterKeyChange("react")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="react" />
              React
            </label>
          </div>

          <div
            className={`f_btn ${activeBtn("golang")}`}
            onClick={handleFilterKeyChange("golang")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="golang" />
              Go
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item express */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item express border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/QandA" className="has-popup-image">
                  <img src="images/QandA.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.jpg"
                  className="name has-popup-image"
                >
                  Q&A Backend
                </a>
                <div className="category">Express</div>
              </div>
            </div>
          </div>
          {/* work item react */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item react border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/openTable" className="has-popup-react">
                  <img src="images/OpenTable.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/OpenTable.png"
                  className="name has-popup-image"
                >
                  OpenTable Clone
                </a>
                <div className="category">React and NextJS</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item react border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/FEC-BSB" className="has-popup-react">
                  <img src="images/BSB.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/BSB.png"
                  className="name has-popup-image"
                >
                  Product Detail Page
                </a>
                <div className="category">React and JavaScript</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item react border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/Reading-Rainforest" className="has-popup-react">
                  <img src="images/rr.gif" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/rr.gif"
                  className="name has-popup-image"
                >
                  Book Trading Web App
                </a>
                <div className="category">React and JavaScript</div>
              </div>
            </div>
          </div>
          {/* work item golang */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item golang border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/simpleBank_David" className="has-popup-golang">
                  <img src="images/sb.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/sb.png"
                  className="name has-popup-image"
                >
                  Backend for a Simple Bank
                </a>
                <div className="category">Golang</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item python border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://github.com/dGarcia-NC/recipe-app-api" className="has-popup-python">
                  <img src="images/recipe.gif" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/recipe.gif"
                  className="name has-popup-image"
                >
                  Recipe App API
                </a>
                <div className="category">Python</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
