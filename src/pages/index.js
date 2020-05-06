import React from 'react'
import Layout from '../components/layout'
import ImageLoader from '../components/imageLoader/imageLoader'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Brittany McQuinn</title>
        <meta
          name='description' content='Brittany McQuinn is a singer songwriter from the province of New Brunswick in the East Coast of Canada.
        Brittany works actively on solo projects, artist collaborations, and writing/singing lead for her duo with Daniel
        James in a band known as Bleum. Visit to read her story, find her music, and get connected with her business contact.'
        />
        <link rel='canonical' href='https://brittanymcquinn.com' />
      </Helmet>
      <Layout />
      <ImageLoader />
    </div>
  )
}
