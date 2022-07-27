import { useEffect, useState } from "react";

const apiUrl = "https://my-daily-bootcamp.herokuapp.com";

async function getPosts() {
  const response = await fetch(apiUrl + "/posts.json");
  return await response.json();
}

function PostItem({ id, author, profile, images, description, date }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  function showModal() {
    setShowMenu(false);
    setShowModalDelete(true);
  }

  function closeModal() {
    setShowModalDelete(false);
  }

  return (
    <div className="public">
      <div className="pop-container">
        <button
          className="public-button"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <img
            src="/src/assets/BUTTON DELETE/dots.svg"
            alt="Menú de Opciones"
          />
        </button>
        <div className="POP" style={{ display: showMenu ? "block" : "none" }}>
          <button onClick={showModal} className="popUp">
            <img src="/src/assets/BUTTON DELETE/basura.svg" />
            <p>Delete</p>
          </button>
        </div>
        <div className="POP" style={{ display: showMenu ? "block" : "none" }}>
          <button className="popUp">
            <img src="/src/assets/BUTTON DELETE/pen-solid.svg" />
            <p>Modificar</p>
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
              src={author.profile_url}
              alt="Foto de perfil del usuario"
            />
          </a>
          <div className="date-text">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <h3>{author.full_name}</h3>
            </a>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <div className="text">
        <p>{description}</p>
      </div>
      {showModalDelete && <DeletePost closeModal={closeModal} id={id} />}
    </div>
  );
}

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <PostItem {...post} key={post.id} />;
      })}
    </div>
  );
}

function DeletePost({ closeModal, id }) {
  // const [deletePost, setDeletePost]=useState([]);
  // useEffect(() => {
  //   setDeletePost().then((data) => setPosts(data));
  // }, []);

  function handleDelete() {
    fetch(apiUrl + "/posts/" + id + ".json", { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        closeModal();
        console.log("vivo eres");
      });
  }

  return (
    <div id="modal-delete" class="modal modalSytelDelete">
      <div className="modal_window clases_window_delete">
        <h3 className="tituloModalDelete">
          Are you sure you want to delete it?
        </h3>
        <button className="modal_close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-footer">
          <button className="button1">Cancel</button>
          <button className="button2" id="delete-post" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
