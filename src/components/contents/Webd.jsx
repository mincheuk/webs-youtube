import React from 'react';
import { webdText } from '../../data/webd';
import { Link } from 'react-router-dom';

const Webd = () => {
    console.log("Webd component rendered");
    
    return (
        <section id='webd'>
            <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
            <div className='video_inner'>
                {webdText.map((video, key) => (
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
    );
};

export default Webd;