import './App.css';
import ImageSlider from "./ImageSlider";
import Memorials from "./memorials.json";

function App() {
  
  const slides = Memorials;
  
  const containerStyles = {
    width: "400px",
    height: "600px",
    margin: "0 auto",
    backgroundcolor: "blue",
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
