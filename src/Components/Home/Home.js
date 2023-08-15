import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
// import { Helmet } from 'react-helmet-async';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
      return (
            <div >
                  {/* <Helmet>
                        <title>Home - Home Cooking</title>
                  </Helmet> */}
                  {/* <PageTitle title="Home"></PageTitle> */}
                  <Banner></Banner>


                  {/* <About></About> */}
                  <Services></Services>
                  <Contact></Contact>

            </div>
      );
};

export default Home;