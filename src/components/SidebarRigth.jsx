function ItemStories({ name, profileImage, bg }) {
  return (
    <a className="link-stories" href="#">
      <li className="frame-storie">
        <div
          className="img-storie1 img-storie"
          style={{
            background: `url('${bg}')`,
          }}
        >
          <img
            className="profile-photo"
            src={profileImage}
            alt="foto de perfil de un usuario"
          />
          <h3 className="profile-name">{name}</h3>
        </div>
        <div className="storie-borde"></div>
      </li>
    </a>
  );
}

function Stories() {
  return (
    <div className="stories">
      <h2 className="tittle-stories">Stories</h2>
      <ul className="stories-sqare">
        <ItemStories
          name="Kierra Gentry"
          profileImage="https://my-daily-bootcamp.netlify.app/assets/stories/profile%201.jpg"
          bg="https://my-daily-bootcamp-rojo.netlify.app/assets-stories/State-1.jpg"
        />
        <ItemStories
          name="Bradyn Krammer"
          profileImage="https://my-daily-bootcamp.netlify.app/assets/stories/profile%202.jpg"
          bg="https://my-daily-bootcamp-rojo.netlify.app/assets-stories/State-2.jpg"
        />
        <ItemStories
          name="Pierre Kox"
          profileImage="https://my-daily-bootcamp.netlify.app/assets/stories/profile%203.jpg"
          bg="https://my-daily-bootcamp-rojo.netlify.app/assets-stories/State-3.jpg"
        />
      </ul>
    </div>
  );
}

function ItemSection({
  title,
  parraf,
  redsocial,
  bg,
  image1,
  image2,
  image3,
  participants,
}) {
  return (
    <div className="notice-single">
      <article
        className="notice-article notice-article1"
        style={{
          background: `url('${bg}')`,
        }}
      >
        <h3 className="notice-tittle">{title}</h3>
        <p className="notice-text">{parraf}</p>
        <a className="notice-button" href={redsocial} target="_blank">
          Explore All
        </a>
      </article>

      <footer className="notice-footer">
        <div className="notice-avatars">
          <img className="avatar avatar1" src={image1} alt="photo 1" />
          <img className="avatar avatar2" src={image2} alt="photo 2" />
          <img className="avatar avatar3" src={image3} alt="photo 3" />
        </div>
        <span className="participants-text">{participants}</span>
      </footer>
    </div>
  );
}

function Section() {
  return (
    <div className="notice-section">
      <ItemSection
        title="BOOTCAMP X"
        parraf="Learn working in a real environment"
        redsocial="https://twitter.com/condef5"
        bg="https://my-daily-bootcamp.netlify.app/assets/companies/company-bootcampx.jpg"
        image1="https://my-daily-bootcamp.netlify.app/assets/companies/profile-1.jpg"
        image2="https://my-daily-bootcamp.netlify.app/assets/companies/profile-2.jpg"
        image3="https://my-daily-bootcamp.netlify.app/assets/companies/profile-3.jpg"
        participants="12 Participants"
      />
      <ItemSection
        title="MALI"
        parraf="Join events near you for free"
        redsocial="https://mali.pe/"
        bg="https://my-daily-bootcamp.netlify.app/assets/companies/company-art.jpg"
        image1="https://my-daily-bootcamp.netlify.app/assets/companies/profile-4.jpg"
        image2="https://my-daily-bootcamp.netlify.app/assets/companies/profile-5.jpg"
        image3="https://my-daily-bootcamp.netlify.app/assets/companies/profile-6.jpg"
        participants="18 Participants"
      />
    </div>
  );
}

function ItemFollowP({ link, image, namePerfil }) {
  return (
    <div className="follow-date">
      <div className="info">
        <a className="link-follow" href={link} target="_blank">
          <img
            src={image}
            alt="foto de perfil de un usuario"
            className="instructor-profile"
          />
          <p>{namePerfil}</p>
          <img
            src="https://my-daily-bootcamp.netlify.app/assets/icons/twitter-check.svg"
            alt="check"
          />
        </a>
      </div>
      <button className="follow-1">
        <b>Follow</b>
      </button>
    </div>
  );
}
function FollowP() {
  return (
    <div className="Follow-P">
      <h3>Who to Follow</h3>

      <div className="follow">
        <ItemFollowP
          link="https://twitter.com/condef5"
          image="https://my-daily-bootcamp.netlify.app/assets/instructors/condef5.jpeg"
          namePerfil="@condef5"
        />
        <ItemFollowP
          link="https://twitter.com/yummta"
          image="https://my-daily-bootcamp.netlify.app/assets/instructors/yummta.jpeg"
          namePerfil="@yummta"
        />
      </div>
    </div>
  );
}

function SidebarRigth() {
  return (
    <div className="sidebar-right">
      <Stories />
      <Section />
      <FollowP />
      <div className="footer">Bootcamp X © 2022</div>
    </div>
  );
}

export default SidebarRigth;
