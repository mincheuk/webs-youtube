import React from 'react'

import { youtubeText } from '../../data/youtube';
import { Link } from 'react-router-dom'

const Youtube = () => {
    return (
      <section id='youtube'>
      <h2>😱 지금 이 코딩을 영상으로</h2>
      <div className='video_inner'>
          {youtubeText.map((video, key) => (
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

export default Youtube