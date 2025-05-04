"use client"
import React, { useEffect, useState } from 'react'
import API from '../services/API'

export default function HomePage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    API.get('/movie/popular').then(response => {
      setMovies(response.data.results);
    })
  },[])
  console.log(movies)
  
  
  
  return (   
    <div>

    </div>
  )
}
