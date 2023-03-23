import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import datarequests from '../Datarequests'

const Home = () => {
    return (
        <>
            <Layout />
            <Section rowID='1' title="Upcoming" fetchURL={datarequests.requestUpcoming} />
            <Section rowID='2' title="Popular" fetchURL={datarequests.requestPopular} />
            <Section rowID='3' title="Trending" fetchURL={datarequests.requestTrending} />
            <Section rowID='4' title="Top Rated" fetchURL={datarequests.requestTopRated} />
        </>
    )
}

export default Home