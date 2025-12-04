import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import Link from './components/Link';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
const App = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Form />
      <Link />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App