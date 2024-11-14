import React from 'react';
import Header from '@/components/header/header';
import Banner from '@/components/banner/banner';
import Themes from '@/components/themes/themes';
import MiniWorks from '@/components/miniWorks/miniWorks';
import Cours from '@/components/cours/cours';
import Footer from '@/components/footer/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Themes />
      <MiniWorks />
      <Cours />
      <Footer />
      {}
      <main>
      </main>
    </div>
  );
};

export default HomePage;