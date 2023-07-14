import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from '../components/content';

const Home = props => {
  return (
    <>
      <Header header={props?.header}></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
};

export default Home;
