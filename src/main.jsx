import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Favoritos from './pages/Favoritos.jsx'



  const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {index: true, element: <Home />},
        {path: '/movies', element: <MovieListPage />},
        {path: '/movies/:id', element: <MovieDetailPage />},
        {path: '/genre', element: <GenreListPage />},
        {path: '/genre/:id', element: <MovieByGenrePage />},
        {path: '/favoritos', element: <Favoritos/>},
        {path: '*', element: <PageNotFound />}
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)