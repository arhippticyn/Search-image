import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import axios from "axios";
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

axios.defaults.baseURL = "https://pixabay.com/api"

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    value: ''
  }

  handleSubmit = async (value) => {
    this.setState({value, page: 1, images: []})

    try {
      const response = await axios.get(`/?q=${value}&page=1&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`)
      this.setState({images: response.data.hits})
    }
    catch {
      console.log(Error);
    }
  }

  loadMore = async () => {
      const nextPage = this.state.page + 1
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
  }


  render() {
      return (
    <div className="App">
      <Searchbar onSubmit={this.handleSubmit} />

      <ImageGallery images={this.state.images} />

      {this.state.images.length > 0 && (
        <Button onClick={this.loadMore} />
      )}

    </div>
  );
  }
}

export default App;
