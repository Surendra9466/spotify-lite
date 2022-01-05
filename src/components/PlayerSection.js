import React, { useEffect } from 'react';
import '../css/PlayerSection.scss';

const PlayerSection = () => {
    useEffect(() => {
        let url =  localStorage.getItem('img');
        console.log(url);
        
    }, [])
    return (
        <div className='player-wrapper bg-sky-500'>
            <div className='song-info'>
                <div className='cover-img'></div>
                <div className='song-artist-info'>
                    <div className='song-name'></div>
                    <div className='artist-name'></div>
                </div>
                <div className='favourite-icon'></div>
            </div>
            <div className='player-controler'></div>
            <div className='player-volume'></div>
        </div>
    )
}

export default PlayerSection
