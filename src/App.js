import logo from './logo.svg';
import './App.css';
import Lifecycle from './components/LifeCycle';
import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieListWrapper from './components/MovieListWrapper';
import MoviePage from './components/MoviePage';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import AddMovie from './components/AddMovie';
import FavouriteProvider from './context/favourite';



function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <FavouriteProvider>
        <Routes>
          <Route path="/" element={<MoviePage/>} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/detail/:movieId" element={<MovieDetailPage />} />
          <Route path="/add-movie" element={<AddMovie />} />

        </Routes>
        </FavouriteProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
