import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        width: "100%",
        margin: "25px 25px 25px 1px",
        backgroundColor: "#0000cd",
    
    };
    
    const slideStyles = {
        width: "200px",
        height: "280px",
        color: "#fff",
        float: "none",
        margin: "0 auto",
        display: "block",
        borderRadius: "2px",
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: "cover",
        
    };

    const titleStyles = {
        color: "#ffd700",
        height: "20px",
        width: "100%",
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "30px",
    
    }
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "55px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "55px",
        color: "#fff",
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

    const footerStyles = {
        color: "#ffd700",
        fontSize: "16px",
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "30px",
      }

    return (
        <>
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>‹</div>
            <div style={rightArrowStyles} onClick={goToNext}>›</div>
            <div style={slideStyles}>
            </div>
            <div style={titleStyles}>{slides[currentIndex].Name}</div>
            <div style={titleStyles}>{slides[currentIndex].Dates}</div>
            
            <div style={footerStyles}>
                Always a Salthawk * Never Forgotten
            </div>
    </div>
        </>
    )

};

export default ImageSlider;