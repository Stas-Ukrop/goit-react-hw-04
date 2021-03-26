import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axiosApi from "./components/service/axiosApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./index.module.css";


function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [massItems, setMassItems] = useState([]);
  const [totalHits, setTotalHits] = useState(1);
  const [modalImg, setModalImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (page === 1) {
      setMassItems([]);
      axiosApiItems();
    }
  }, [page]);
  //запрос
  const axiosApiItems = () => {
    const options = {
      search,
      page,
    };
    axiosApi(options)
      .then((data) => {
        setPage((prev) => {
          return prev + 1;
        });
        setLoading(true);
        setTotalHits(data.totalHits);
        setMassItems((prevState) => {
          return [...prevState, ...data.hits];
        });
      })
      .catch((err) => console.log(err))
      .finally(finallyLoading);
  };

  const finallyLoading = () => {
    if (totalHits === 0) {
      alert("Sorry, but  your  request  incorrect");
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handlerClickPage = () => {
    axiosApiItems();
  };
  const openModal = (e) => {
    console.log(e);
    if (e.target.nodeName === "IMG") {
      setShowModal(true);
      setModalImg(e.target.name);
    }
  };
  return (
    <div className="App">
      <Searchbar search={setSearch} page={setPage} />
      <ImageGallery massItems={massItems} openModal={openModal} />
      {loading ? (
        <Loader
          className={styles.load_center}
          type="Bars"
          color="#646de6"
          height={80}
          width={80}
          timeout={1000}
        />
      ) : (
        <Button
          className={styles.btn_more}
          onClick={() => {
            handlerClickPage();
          }}
        >
          Load more
        </Button>
      )}

      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <img src={modalImg} />
        </Modal>
      )}
    </div>
  );
}

export default App;

