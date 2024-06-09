import React from 'react'
import { todayText } from '../../data/Today'
import { Link } from 'react-router-dom'

//하나의 페이지만 불러옴
const Today = () => {
    return (
        <section id='today'>
            <div className='today_inner'>
                <div className='today_thumb play_icon'>       {/*영상 부분 */}
                    <Link to={todayText[0].page}> {/*클릭 시 '링크'를 타고 다른 주소로 이동할 때 사용*/}
                        <img src={todayText[0].img} alt={todayText[0].title} />
                    </Link>
                </div>
                <div className='today_text'>         {/*텍스트 부분*/}
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={todayText[0].page}>
                            {todayText[0].title}
                        </Link>
                    </h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'> 
                        <span className='author'>           {/* span은 줄바꿈을 하지 않는다*/}
                            <Link to={`/channel/${todayText[0].channelId}`}> {/*문자열과 변수 결합 시 사용...? */}
                                {todayText[0].author}
                            </Link>
                        </span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today