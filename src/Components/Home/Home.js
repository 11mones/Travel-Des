import Header from "../Header/Header.js"
import Tours from "../Tour/Tour.js"
import Footer from "../Footer/Footer.js"


function Home(props) {
    const data = props.data;
    return (
        <>
            <Header />
            {
                data.map(tours=>{
                    return (
                        <Tours name = {tours.name} image = {tours.image}/>
                    )
                })
            }
            <Footer />
        </>
    );
}

export default Home;