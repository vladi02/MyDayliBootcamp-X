function ItemStories({ name, profileImage, bg }) {
  return (
    <a class="link-stories" href="#">
      <li class="frame-storie">
        <div
          class="img-storie1 img-storie"
          style={{
            background: `url('${bg}')`,
          }}
        >
          <img
            class="profile-photo"
            src={profileImage}
            alt="foto de perfil de un usuario"
          />
          <h3 class="profile-name">{name}</h3>
        </div>
        <div class="storie-borde"></div>
      </li>
    </a>
  );
}

function Stories() {
  return (
    <div class="stories">
      <h2 class="tittle-stories">Stories</h2>
      <ul class="stories-sqare">
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
    <div class="notice-single">
      <article
        class="notice-article notice-article1"
        style={{
          background: `url('${bg}')`,
        }}
      >
        <h3 class="notice-tittle">{title}</h3>
        <p class="notice-text">{parraf}</p>
        <a class="notice-button" href={redsocial} target="_blank">
          Explore All
        </a>
      </article>

      <footer class="notice-footer">
        <div class="notice-avatars">
          <img class="avatar avatar1" src={image1} alt="photo 1" />
          <img class="avatar avatar2" src={image2} alt="photo 2" />
          <img class="avatar avatar3" src={image3} alt="photo 3" />
        </div>
        <span class="participants-text">{participants}</span>
      </footer>
    </div>
  );
}

function Section() {
  return (
    <div class="notice-section">
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
    <div class="follow-date">
      <div class="info">
        <a class="link-follow" href={link} target="_blank">
          <img
            src={image}
            alt="foto de perfil de un usuario"
            class="instructor-profile"
          />
          <p>{namePerfil}</p>
          <img
            src="https://my-daily-bootcamp.netlify.app/assets/icons/twitter-check.svg"
            alt="check"
          />
        </a>
      </div>
      <button class="follow-1">
        <b>Follow</b>
      </button>
    </div>
  );
}
function FollowP() {
  return (
    <div class="Follow-P">
      <h3>Who to Follow</h3>

      <div class="follow">
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
    <div class="sidebar-right">
      <Stories />
      <Section />
      <FollowP />
      <div class="footer">Bootcamp X © 2022</div>
    </div>
  );
}

export default SidebarRigth;
