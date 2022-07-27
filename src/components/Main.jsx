import Feed from "./Feed";
import SidebarRigth from "./SidebarRigth";
import SideBarleft from "./SideBarLeft";
import { useState } from "react";
import Document from "./CreatePostModal";

function TeamItem({ name, image }) {
  return (
    <div className="date-teams1">
      <a className="link-team" href="#">
        <img className="team-img" src={image} alt="Alden Cantrell" />
        <p className="text-teams">{name}</p>
      </a>
    </div>
  );
}

function Main() {
  const [showModalInput, setShowModalInput] = useState(false);

  function OpenModalInput() {
    setShowModalInput(true);
  }

  function closeModalInput() {
    setShowModalInput(false);
  }
  return (
    <div>
      <main className="main">
        <SideBarleft />
        <div className="daily-content">
          <div className="learning-content" onClick={OpenModalInput}>
            <div>
              <div
                style={{ display: showModalInput ? "block" : "flex" }}
                className="learning-form"
              >
                <input
                  type="text"
                  className="learning-input"
                  placeholder="What did you learn today Paul?"
                  pointerEvents="none"
                />
                <button className="learning-button" type="button">
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        className="arrow"
                        d="M8.23413 19L8.23413 1.08571"
                        stroke="#788292"
                      />
                      <path
                        className="arrow"
                        d="M15.5 8.35142L8.23423 1.08569L0.968505 8.35142"
                        stroke="#788292"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Feed />
        </div>
        <SidebarRigth />
      </main>
      {showModalInput && <Document closeModal={closeModalInput} />}
    </div>
  );
}
export default Main;
