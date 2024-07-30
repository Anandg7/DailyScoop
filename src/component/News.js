import React, { useEffect,useState} from 'react'
import Items from './Items'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
   
  const[articles,setarticles]=useState([]);
  const[loading,setloading]=useState(true);
  const[totalResults,settotalResults]=useState(0);
  const[page,setpage]=useState(1);

  const update= async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey} &page=${page}&pageSize=
      ${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(60);
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);
    props.setProgress(100);
  }

   useEffect( ()=>{
      update();
   },[])

  // const handleprev = async () => {
  //   setpage(page-1);
  //   update();
  // }

  // const handlenext = async () => {
  //   setpage(page+1);
  //   update();
  // }

  const fetchMoreData= async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=
    ${props.pageSize}`;
    setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    setloading(false);
  }

    return (
        <>
        <h1 className="text-center" style={{margin :'35px ,0px ',marginTop : '90px'}}>Newmonkey- Top Headline</h1>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container my-3">
          <div className=" row">
            {articles.map((element,index) => {
              return <div className="col-md-4" key={`${element.url}-${index}`}>
                <Items title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>;
            })}
          </div>

        </div>
      </InfiniteScroll></>

      )
      News.defaultProps = {
        pageSize: 8,
        category: 'general',
      }
    
      News.propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }

}

export default News
