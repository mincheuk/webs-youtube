import React from 'react'
import { websiteText } from '../../data/website';
import { Link } from 'react-router-dom';

const Website = () => {
    return (
        <section id='website'>
        <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
        <div className='video_inner'>
            {websiteText.map((video, key) => (
                <div className='video' key={key}>
                    <div className='video_thumb play_icon'>
                        <Link to={`/video/${video.videoId}`}>
                            {/* video 페이지로 이동하는 코드 */}
                            <img src={video.img} alt={video.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </section>
    )
}

export default Website