import React, { useEffect,useState } from 'react'
import Card from './Card';
import img from '../assets/03-19-26-213_512.gif'; ///Users/shubhkarman/Documents/ReactApps/my-react-app/src/assets/

const NewsComponent = (props) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetchNews();
        
    

    },[props.search])
    
    async function fetchNews(){
        let data=await fetch(`https://newsapi.org/v2/everything?q=${props.search===true ? props.query : props.query+'india'}&apiKey=6bf9de0d811f4ef6b4233e4b6594f3a2`);
        let parsedData=await data.json();
        setArticles(parsedData.articles);
        console.log(parsedData);
        console.log(articles);
    }
  return (
  <div className='flex items-center justify-center'>
    <div className='grid grid-cols-4 p-2 m-2'>
        {articles.map((card,index)=>{
            return <Card 
            key = {index}
            title = {card.title}
            desc = {card.description}
            imgUrl = {card.urlToImage ? card.urlToImage:img}
            artUrl = {card.url}
            />
        })}
    </div>
    </div>
  )
}

export default NewsComponent