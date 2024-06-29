import React from "react";
import api from "../api/api";
import Row from "../components/Row/Row";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav"

const NetflixShowCont = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchUrl={api.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row title="Trending" fetchUrl={api.fetchTrending} />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
    </div>
  );
};

export default NetflixShowCont;
