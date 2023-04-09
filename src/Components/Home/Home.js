
import Tours from "../Tours/Tours.js.js"
import Footer from "../Footer/Footer.js"
import Navbar from "../Navbar/Navbar.js";


function Home(props) {
    const data = props.data;
    return (
        <>
            <Navbar />
            <Tours data={props.data} />
            <Footer />
        </>
    );
}

export default Home;