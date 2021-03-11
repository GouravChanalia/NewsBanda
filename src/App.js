import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from './components/Card'
import './styles/appStyle.css'

const App = () => {

  // eslint-disable-next-line
  const [news, setNews] = useState([])

  //The Heart Of this App, API call
  useEffect( () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const url = `https://newsapi.org/v2/everything?q=technology&sortBy=popularity&pageSize=99&apiKey=${API_KEY}`

    axios
    .get(url)
    .then( (response) => setNews(response.data.articles) )


  } , [])

  return (
    <>
    <div className="navbar">
      <h1 className="logo">Tech News</h1>
    </div>
    <div className="cards-container">
    {
      news.map( (news,index) => <Card key={index} news={news}/> )
    }
    </div>
    </>
  )

}

export default App;
