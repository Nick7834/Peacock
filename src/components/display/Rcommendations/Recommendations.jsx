import React from 'react'
import styles from './Recommendations.module.scss'
import { Search } from '../../ui/Search/Search'
import { Popular } from '../../Popular/Popular'

export const Recommendations = () => {
  return (
    <div className={styles.recommendations}>

      <Search />

      <Popular title={'Popular Movies'} />

      <Popular title={'Watchlists'} />

    </div>
  )
}
