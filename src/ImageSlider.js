import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
        backgroundColor: "#fff",
    
    };
    
    const slideStyles = {
        width: "200px",
        height: "280px",
        color: "#fff",
        borderRadius: "10px",
        border:"#000",  
        borderWidth: "1px",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: "cover",
        
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "55px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "55px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
    };
   
   
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>‹</div>
            <div style={rightArrowStyles} onClick={goToNext}>›</div>
            <div style={slideStyles}></div>
            <div> {slides[currentIndex].title}</div>
            <div> {slides[currentIndex].dates}</div>
        </div>
    )

};

export default ImageSlider;