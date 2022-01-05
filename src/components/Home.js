import React from 'react'
import Auth from './Auth'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import PlayerSection from './PlayerSection'
import useFetch from './useFetch';
import '../css/Home.scss';
const url = '/me';
const Home = ({ token }) => {
    const { loading, data } = useFetch(url, token);
    const [flag, setFlag] = React.useState(false);

    if (loading) return <h1>Loading</h1>

    return (
        <div className='home h-screen'>
            <div className='upper-section flex h-89 w-screen'>
                <Sidebar />
                <MainContent data={data} token={token} />
            </div>
            <PlayerSection />
        </div >
    )

}

export default Home
