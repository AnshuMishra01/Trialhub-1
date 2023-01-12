import React from 'react'
import Cards from './Cards';
import { useState,useEffect } from 'react';

const Pagination = ({API,numberOfPostsPerPage}) => {

const [currentPage,setCurrentPage] = useState(1);
const [totalPages,setTotalPages] = useState(0);
let totalPosts;
let currentPagePost ;
const postsPerPage =numberOfPostsPerPage;
const [currentPosts,setCurrentPosts] =useState([]);

// calling Api as per the props provided by App.js file
// we can also take an object array as prop , if App.js is doing the api call thing.
useEffect (() => {
  fetch(API)
  .then(response => response.json())
  .then((response) => {
    // console.log(response);
    totalPosts = response;
    setTotalPages(Math.ceil(totalPosts.length / postsPerPage ));
    let lastIndex = (currentPage*postsPerPage) ;    
    let startIndex = lastIndex - postsPerPage; 
    currentPagePost = totalPosts.slice(startIndex , lastIndex);
    setCurrentPosts(currentPagePost);
    
  }) },[currentPage] )

//funtion for nextPage
const nextPage = () =>{
let pageNum = (currentPage + 1) ;
if(pageNum > totalPages){
   pageNum = (currentPage + 1) % totalPages ;
}
setCurrentPage(pageNum);
}

// function for prevPage
const prevPage = () =>{
let pageNum = (currentPage - 1) 
// page 1 is base
if(pageNum <= 1){
  pageNum = 1;
}
setCurrentPage(pageNum);
}

return (
<div className = "pagination">
<div className="posts flex basis-3 space-x-8 space-y-10 flex-wrap justify-center items-center flex-row">

{/* change div.posts for positioning cards as desired*/}
{/* we can also use grid */}
{
  // cards for renderingthe details
  currentPosts.map((post) =>(
    <>
  <Cards title={post.title} url={post.url}/>
  </>
  ))
}
</div>
<br/>
      <div className="buttons flex justify-center items-center">
      
      <button onClick ={() => prevPage()} className="prev rounded-md border-black border-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button>

      <div className="pages mx-4 ">
        {currentPage } - {totalPages}
      </div>

      <button onClick ={() => nextPage()} className="next rounded-md border-black border-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </button>

      </div>
    </div>
  )
}

export default Pagination;
