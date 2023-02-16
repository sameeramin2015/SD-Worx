
import React,{useState, useEffect} from 'react';
import "./App.css";
import Items from './Items';


const App =()=> {
  
 
  // useState hook   
  const [articles, setArticles] = useState([]);

    useEffect(()=>{
        const getArticles = async () =>{
            await fetch('https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers')
            .then(res=> res.json())
            .then(data=>{
              setArticles(data.articles)
            })
            
        } 
        
        getArticles()
    }, [])
    
  return (
    
    <div>
      
      {articles.map(article=>{
          return(
            <Items
            country={article.country}
            city={article.city}
            name={article.name}
            dateOfBirth={article.dateOfBirth}
             />
        )
      })}
    </div>
    
   
  )
}

export default App