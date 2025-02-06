import AppCarousel from "../../components/blocks/AppCarousel";
import ImgOne from "../../assets/img/img_1.jpg";
import ImgTwo from "../../assets/img/img_2.jpg";
import ImgThree from "../../assets/img/img_3.jpg";

const Home = () => {
  return (
    <section>
      <AppCarousel height="60vh" images={[ImgOne, ImgTwo, ImgThree]} />
    </section>
  );
};

export default Home;
