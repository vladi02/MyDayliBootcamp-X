import Feed from "./feed";
import SidebarRigth from "./SidebarRigth";
import SiderBarleft from "./SidebarLeft";
function TeamItem({ name, image }) {
  return (
    <div class="date-teams1">
      <a class="link-team" href="#">
        <img class="team-img" src={image} alt="Alden Cantrell" />
        <p class="text-teams">{name}</p>
      </a>
    </div>
  );
}

function Main() {
  return (
    <div>
      <main class="main">
        <SiderBarleft />
        <div class="daily-content">
          <div class="learning-content">
            <a href="javascript:void(0);" onclick="openModal()">
              <form class="learning-form">
                <input
                  type="text"
                  class="learning-input"
                  placeholder="What did you learn today Paul?"
                />
                <span class="menu_item_text menu_item_text_docs">
                  Documentos
                </span>
                <button class="learning-button" type="button">
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        class="arrow"
                        d="M8.23413 19L8.23413 1.08571"
                        stroke="#788292"
                      />
                      <path
                        class="arrow"
                        d="M15.5 8.35142L8.23423 1.08569L0.968505 8.35142"
                        stroke="#788292"
                      />
                    </g>
                  </svg>
                </button>
              </form>
            </a>
          </div>
          <Feed />
        </div>
        <SidebarRigth />
      </main>
    </div>
  );
}
export default Main;
