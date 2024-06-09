import React from 'react'

import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return (
        <section id='developer'>
            <h2>😪 추천 개발자를 소개합니다.</h2>
            <div className='developer_inner overflow'>
                {developerText.map((developer,key)=>(
                    <div className='developer' key={key}>
                        <div className='developer_img play_icon'>
                            <Link to={`/channel/${developer.channelId}`}>   {/* 왜 channel id로 해야 할까... */}
                                <img src={developer.img} alt={developer.name} />
                            </Link>
                        </div>
                        <div className='developer_info'>
                            <Link to={`/channel/${developer.channelId}`}>
                                {developer.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Developer