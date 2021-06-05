// import Imagen from './components/Imagen';
import Imagen2 from './components/Imagen2';
import MainFeaturedPost from './components/MainFeaturedPost';
import Header from './components/Header';
import Footer from './components/Footer';
import img from './assets/fondo_oscurojpg.jpg';

function App() {

  const mainFeaturedPost = {
    title: 'Xionara ♡ Maxi',
    description:
      "Algunas de nuestras fotos",
    image: 'https://lh3.googleusercontent.com/id0lOzmpi0xaXLYLNCLZBsYr2oX1IprZ23bqkf7EGyWXSdy3m3TP0P0Qnt75oGpyz4Q8GftzC0pAjrs5PZHlOb-NjZHSZkLh2I8_tfpefeeHTrC9kheUk7-q9IvIUuHQK_MAzbMJn8w=w720',
    imgText: 'main image description',
  };
  return (
    <div style={{ height: "100%", backgroundImage: `url(${img})`, backgroundRepeat: 'repeat', }}>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <div style={{ maxWidth: "500px", minHeight: 1300 }}>
          <Header />
          <MainFeaturedPost post={mainFeaturedPost}/>
          <div style={{ justifyItems: 'center', justifyContent: 'center', alignContent: 'center' }}>

            <Imagen2 />
          </div>
          {/* <Imagen /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
