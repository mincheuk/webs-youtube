import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'

//여러 개의 페이지 출력
const Today = () => {
    return (
        <Main 
            title = "추천 영상"
            description="오늘의 추천 유튜브 영상입니다.">

            <section id='todayPage'>
                <h2>오늘의 추천 영상입니다.</h2>
                {todayText.map((today,key) => ( //반복하여 화면 출력
                                <div className='today_inner' key={key}>
                                <div className='today_thumb play_icon'>       {/*영상 부분 */}
                                    <Link to={today.page}> {/*클릭 시 '링크'를 타고 다른 주소로 이동할 때 사용*/}
                                        <img src={today.img} alt={today.title} />
                                    </Link>
                                </div>
                                <div className='today_text'>         {/*텍스트 부분*/}
                                    <span className='today'>today!</span>
                                    <h3 className='title'>
                                        <Link to={today.page}>
                                            {today.title}
                                        </Link>
                                    </h3>
                                    <p className='desc'>{today.desc}</p>
                                    <div className='info'> 
                                        <span className='author'>           {/* span은 줄바꿈을 하지 않는다*/}
                                            <Link to={`/channel/${today.channelId}`}> {/*문자열과 변수 결합 시 사용...? */}
                                                {today.author}
                                            </Link>
                                        </span>
                                        <span className='date'>{today.date}</span>
                                    </div>
                                </div>
                            </div>
                ))}
            </section>
            Today
        </Main>
    )
}

export default Today