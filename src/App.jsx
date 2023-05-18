import React from 'react'
import { Header } from './components/display/Header/Header'
import { Main } from './components/display/Main/Main'
import { Recommendations } from './components/display/Rcommendations/Recommendations'

export const App = () => {
  return (
    <div className='wrapper'>

          <Header />

          <Main />

          <Recommendations />

    </div>
  )
}
