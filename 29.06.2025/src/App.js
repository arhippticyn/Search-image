import React, {useState, useEffect, useMemo, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import axios from "axios";
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

axios.defaults.baseURL = "https://pixabay.com/api"

const App = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [value, setValue] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [ModalImage, setModalImage] = useState('')

const handleImageClick = useCallback((largeImageURL) => {
  setTimeout(() => {
    setShowModal(true)
    setModalImage(largeImageURL)
  }, 0);
}, [])

  const closeModal = () => {
    setShowModal(false)
    setModalImage('')
  }

const handleSubmit = useCallback(async (value) => {
  setValue(value)
  setPage(1)
  setImages([])
  setIsloading(true)

  try {
    const response = await axios.get(
      `/?q=${value}&page=1&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`
    );
    setImages(response.data.hits)
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setIsloading(false)
  }
}, [])

const loadMore = useCallback(async () => {
      const nextPage = setPage(page + 1)
      setIsloading(true)
    try {
      const response = await axios.get(`/?q=${this.state.value}&page=${nextPage}&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`)

    setImages(prev => [...prev, ...response.data.hits])
    setPage(nextPage)
    }
    
    catch {
      console.log(Error)
    }
    finally {
    setIsloading(false)
  }}, [])

  if (!Array.isArray(images)) {
    return null; 
  }
      return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />


      {isLoading && <Loader /> }
      
<ImageGallery images={images} onImageClick={handleImageClick} />

{showModal && <Modal image={ModalImage} onClose={closeModal} />}


      {images.length > 0 && (
        <Button onClick={loadMore} />
      )}

    </div>
  );
}



export default App;
