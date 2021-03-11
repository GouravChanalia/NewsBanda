import React from 'react'
import '../styles/cardStyle.css'

const Card = ({news}) => {

    const {title,urlToImage,author,source,description,url} = news

    return (
        <div className="card">
            <div className="contributor-detail">
                <p>By: <small>{source.name}</small></p>
                <p>Author: <small>{author}</small></p>
            </div>
            <img src={urlToImage} alt="news_image" />   
            <h2>{title}</h2>
            <p>{description}</p>
            <hr/>
            <a href={url} target="_blank" rel="noreferrer">Click To Know More</a>
        </div>
    )
}

export default React.memo(Card)