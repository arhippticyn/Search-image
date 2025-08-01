import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import axios from "axios";
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

axios.defaults.baseURL = "https://pixabay.com/api"

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    value: '',
    isLoading: false,
    showModal: false,
    modalImage: ''
  }


handleImageClick = (largeImageURL) => {
  setTimeout(() => {
    this.setState({ showModal: true, modalImage: largeImageURL });
  }, 0);
};


  closeModal = () => {
    this.setState({showModal: false, modalImage: ''})
  }

handleSubmit = async (value) => {
  this.setState({ value, page: 1, images: [], isLoading: true });

  try {
    const response = await axios.get(
      `/?q=${value}&page=1&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    this.setState({ isLoading: false });
  }
};


  loadMore = async () => {
      const nextPage = this.state.page + 1
      this.setState({ isLoading: true})
    try {
      const response = await axios.get(`/?q=${this.state.value}&page=${nextPage}&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`)
    
    this.setState(prevState => ({
      images: [...prevState.images, ...response.data.hits],
      page: nextPage
    }))
    }
    
    catch {
      console.log(Error)
    }
finally {
    this.setState({ isLoading: false });
  }

  }


  render() {

      if (!Array.isArray(this.state.images)) {
    return null; 
  }
      return (
    <div className="App">
      <Searchbar onSubmit={this.handleSubmit} />


      {this.state.isLoading && <Loader /> }
      
<ImageGallery images={this.state.images} onImageClick={this.handleImageClick} />

{this.state.showModal && (
  <Modal image={this.state.modalImage} onClose={this.closeModal} />
)}

      {this.state.images.length > 0 && (
        <Button onClick={this.loadMore} />
      )}

    </div>
  );
  }
}

export default App;
