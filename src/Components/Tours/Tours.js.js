
import { Link } from 'react-router-dom';
import SingleTour from "./Tour/SingleTour";

const Tours = (props) => {

  return (
    <div >
    {
        props.data.map(tour => {
          return(
          <div className='card' key={tour.id}>

          <Link to={`/city/${tour.id}`}>

          <SingleTour image={tour.image} name={tour.name}/>
          
          </Link>


          </div>

          )

        })
      }
    </div>
    
      
    
  );
};

export default Tours;  