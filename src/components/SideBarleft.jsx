import { useEffect, useState } from "react";

const apiUrl = "https://my-daily-bootcamp.herokuapp.com";

async function getUsers() {
  const response = await fetch(apiUrl + "/users.json");
  return response.json();
}

function CardProfile() {
  return (
    <div className="Profile-card">
      <img
        src="https://my-daily-bootcamp-rojo.netlify.app/img/2.jpg"
        alt="Perfil del usuario"
      />
      <h3>Paul Portillo</h3>
      <span>Software Enginner</span>
      <div className="buttom">
        <a
          href="https://twitter.com/yummta?lang=es"
          target="_blank"
          className="profile-c"
        >
          <b>@yummta</b>
        </a>
        <a
          className="profile-c"
          href="https://www.linkedin.com/jobs/?originalSubdomain=pe"
          target="_blank"
        >
          <b>LinkedIn</b>
        </a>
      </div>
    </div>
  );
}
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

function MyTeam() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="teams">
      <h2>My team</h2>
      <div className="container-team">
        {users.map((user) => {
          return <TeamItem name={user.full_name} image={user.profile_url} />;
        })}
      </div>
    </div>
  );
}

function SideBarleft() {
  return (
    <div className="sidebar-left">
      <CardProfile />
      <MyTeam />
    </div>
  );
}

export default SideBarleft;
