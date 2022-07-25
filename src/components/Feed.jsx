let posts = [
  {
    id: 1,
    author: "Paul Portillo",
    profile: "https://my-daily-bootcamp-rojo.netlify.app/img/perfil.jpg",
    date: "04 de Julio, 2022",
    description: "aprendi a insertar imagen y icono",
    images: [],
  },
  {
    id: 2,
    author: "Ronaldo Delgado",
    profile: "https://my-daily-bootcamp-rojo.netlify.app/img/perfil.jpg",
    date: "04 de Julio, 2022",
    description: "Aprendimos la jerarquia de clases",
    images: [],
  },
  {
    id: 3,
    author: "Sandrito Hubel",
    profile: "https://my-daily-bootcamp-rojo.netlify.app/img/perfil.jpg",
    date: "04 de Julio, 2022",
    description: "Hoy jugamos lobo",
    images: [],
  },
  {
    id: 4,
    author: "Cucarachita dominguez",
    profile: "https://my-daily-bootcamp-rojo.netlify.app/img/perfil.jpg",
    date: "04 de Julio, 2022",
    description: "Hoy aprendí a usar la target",
    images: "[]",
  },
];

function PostItem({ id, author, profile, images, description, date }) {
  return (
    <div className="public">
      <div className="pop-container">
        <button className="public-button">
          <img
            src="http://127.0.0.1:5500/assets/icons/dots.svg"
            alt="Menú de Opciones"
          />
        </button>
        <div className="POP">
          <button className="popUp">
            <img src="./assets/basura.svg" />
            <p>Delete</p>
          </button>
        </div>
      </div>
      <div className="public-date">
        <div className="date-conte">
          <a
            className="link-public"
            href="https://twitter.com/yummta?lang=es"
            target="_blank"
          >
            <img
              className="date-img"
              src={profile}
              alt="Foto de perfil del usuario"
            />
          </a>
          <div className="date-text">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <h3>{author}</h3>
            </a>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <div className="text">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feed() {
  return (
    <div>
      {posts.map((post) => {
        return <PostItem {...post} />;
      })}
    </div>
  );
}

export default Feed;
