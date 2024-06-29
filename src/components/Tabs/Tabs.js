import React from "react";
import "./Tabs.css";
import { Link } from "react-router-dom";
import { tabLabels } from "./constant";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANYTIME, WATCH_ANYWHERE, PICK_YOUR_PRICE } = tabLabels;
  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANYTIME,
            activeTabName === CANCEL_AT_ANYTIME,
            "fa fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fa fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fa fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANYTIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANYTIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide Netflix isn't for you - no problem. Cancel
                    Anytime
                  </p>
                  <Link to="/netflix-show-content" className="btn btn-lg">
                    Watch Free for 30 days
                  </Link>
                </div>
                <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">Watch Your show on any device.</p>
                <Link to="/netflix-show-content" className="btn btn-lg">
                  Watch Free for 30 days
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt=""
                  />
                  <p className="text-md">Watch on your TV</p>
                  <p className="text-dark">
                    Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                    players and more
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt=""
                  />
                  <p className="text-md">
                    Watch instantly or download for later
                  </p>
                  <p className="text-dark">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt=""
                  />
                  <p className="text-md">Use any computer</p>
                  <p className="text-dark">Watch right on Netflix.com.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PICK_YOUR_PRICE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PICK_YOUR_PRICE && "show"
              }`}
            >
              <div className="text-center">
                <p className="text-lg">
                  Choose one plan and watch everything on Netflix
                </p>
                <Link className="btn btn-lg" to="/netflix-show-content">
                  Watch Free for 30 days
                </Link>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after free trail ends on [Date]</td>
                    <td>16.3$</td>
                    <td>20.4$</td>
                    <td>24.8$</td>
                  </tr>
                  <tr>
                    <td>Hd Available</td>
                    <td>
                      <i className="fa fa-times"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Multiple Screens</td>
                    <td>
                      <i className="fa fa-times"></i>
                    </td>
                    <td>
                      <i className="fa fa-times"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screen Sharing</td>
                    <td>
                      <i className="fa fa-times"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Tabs;
