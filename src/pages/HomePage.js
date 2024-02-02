import Customer from "../component/MainPageComponent/Customers/Customer";
import MegaAbout from "../component/MainPageComponent/MegaAbout/MegaAbout";
import TabAndNav from "../component/MainPageComponent/Nav_Tab/TabAndNav";
import Awards from "../component/MainPageComponent/OurAwards/Awards";
import OurProjects from "../component/MainPageComponent/OurProjects/OurProjects";
import OurSolution from "../component/MainPageComponent/OurSolution/OurSolution";
import Slider from "../component/MainPageComponent/Slider/Slider";
import Slider2 from "../component/MainPageComponent/Slider2/Slider2";
import News from '../component/MainPageComponent/News/News';

function HomePage(){
    return(
        <div >
            <Slider></Slider>
            <MegaAbout></MegaAbout>
            <TabAndNav/>
            <OurSolution></OurSolution>
            <OurProjects></OurProjects>
            <Awards></Awards>
            <Customer></Customer>
            <Slider2></Slider2>
            <News></News>
        </div>
    );
}
export default HomePage;