import Imagen from './components/Imagen';
import MainFeaturedPost from './components/MainFeaturedPost';
import Header from './components/Header';
import img from './assets/fondo_oscurojpg.jpg';

function App() {

  const mainFeaturedPost = {
    title: 'Xionara ♡ Maxi',
    description:
      "Algunas de nuestras fotos",
    image: 'https://lh3.googleusercontent.com/id0lOzmpi0xaXLYLNCLZBsYr2oX1IprZ23bqkf7EGyWXSdy3m3TP0P0Qnt75oGpyz4Q8GftzC0pAjrs5PZHlOb-NjZHSZkLh2I8_tfpefeeHTrC9kheUk7-q9IvIUuHQK_MAzbMJn8w',
    imgText: 'main image description',
  };
  return (
    <div style={{height: "100%", backgroundImage:`url(${img})`, backgroundRepeat:'repeat',}}>
      <div style={{justifyContent:'center', display: 'flex'}}>
        <div style={{ maxWidth:"500px"}}>
          <Header />
          <MainFeaturedPost post={mainFeaturedPost}/>
          <Imagen />
        </div>
      </div>
    </div>
  );
}

export default App;
