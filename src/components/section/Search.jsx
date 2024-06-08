import React from 'react'

const Search = () => {
    return (
    <div id='search'>
        <div className='search_inner'>
            <label htmlFor='searchInput'>
                <span className='ir'>검색</span>
            </label>
            <input 
                type='search' 
                name='searchInput' 
                id='searchInput'
                autoComplete='off'  // 자동완성 기능 x
                className='search_input'
                placeholder='검색어를 입력하세요'
            />
        </div>     
    </div>
    )
}

export default Search