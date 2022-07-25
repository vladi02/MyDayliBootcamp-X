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

function SiderBarleft() {
  return (
    <div class="sidebar-left">
      <div class="Profile-card">
        <img
          src="https://my-daily-bootcamp-rojo.netlify.app/img/2.jpg"
          alt="Perfil del usuario"
        />
        <h3>Paul Portillo</h3>
        <span>Software Enginner</span>
        <div class="buttom">
          <a
            href="https://twitter.com/yummta?lang=es"
            target="_blank"
            class="profile-c"
          >
            <b>@yummta</b>
          </a>
          <a
            href="https://www.linkedin.com/jobs/?originalSubdomain=pe"
            target="_blank"
            class="profile-c"
          >
            <b>LinkedIn</b>
          </a>
        </div>
      </div>

      <div class="teams">
        <h2>My team</h2>
        <div class="container-team">
          <TeamItem
            name={"Alden Cantrell"}
            image={"https://my-daily-bootcamp-rojo.netlify.app/img/1.jpg"}
          />
          <TeamItem
            name="Thomas Crane"
            image="https://my-daily-bootcamp-rojo.netlify.app/img/3.jpg"
          />
          <TeamItem
            name="Miranda Shaffer"
            image="https://my-daily-bootcamp-rojo.netlify.app/img/4.jpg"
          />
          <TeamItem
            name="Alvaro Mcgee"
            image="https://my-daily-bootcamp-rojo.netlify.app/img/5.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default SiderBarleft;
