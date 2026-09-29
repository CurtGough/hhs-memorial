import '../App.css';
import ImageSlider from "./SlideshowSlider";
import Memorials from "../memorials.json";

function App() {
  
  const slides = Memorials;
  
  const containerStyles = {
    width: "400px",
    height: "600px",
    margin: "0 auto",
    marginTop: "100px",
    backgroundcolor: "#0a2493",
  };


  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
