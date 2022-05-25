import { useEffect, useState } from 'react';
import "./App.css"
import Tmdb from "./Tmdb"
import  { MovieRow } from './components/MovieRow'
import  { FeatureMovie } from './components/FeatureMovie'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App(){

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader,setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAllData = async ()=>{
      //Pegando a lista de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque
      let originals = list.filter(item=> item.slug === "originals");//Pega a lista de originais
      let randomChosen = Math.floor( Math.random() * originals[0].items.results.length -1 );//Pega uma posição/série aleatoria da lista
      let chosen = originals[0].items.results[randomChosen];//Armazena a série
      
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");//Traz informações da série

      setFeatureData(chosenInfo);

    }

    loadAllData();

  }, [])

  useEffect(()=>{
    const scrollListener = ()=>{
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader (false);
    }

    window.addEventListener('scroll', scrollListener);

    return ()=>{
      window.removeEventListener("scroll", scrollListener);
    }
  }, [])

  return (  
    <div className="page">

      <Header black={blackHeader}/>

      {featureData && <FeatureMovie item={featureData}/>}

      
      <section className="lists">
        {
          movieList.map((item,key)=>{

            return <MovieRow key={key} title={item.title} items={item.items}/>
          })
        }
      </section>

      <Footer/>

      {movieList.length <= 0 && <div className="loading"></div>}
      

    </div>
  )
}