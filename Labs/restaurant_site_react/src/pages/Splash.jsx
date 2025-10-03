import pyramid from "../assets/images/pyramid.png"
import vr from "../assets/images/virtual-reality.png"


const SplashPage = () => {

    return(
        <>
            <div className="page-home" >
            <div className="container text-center bg-body-tertiary" data-bs-theme="dark">
                <div className="row gy-5">
                    <h1 className="welcome" id="welcome">Welcome To ChronoBite</h1>
                </div>
                <div className="row gy-8">
                    <h2 className="sub welcome" id="welcome2">Step Through the Tastes of Time</h2>
                </div>
                <div className="row align-items-end" id="row1">
                    <div className="col-lg-3 buttons" id="col1_index">
                        <p className="p-0" id="p-roman">Roman Times</p>
                        <i className="fa-solid fa-horse" id="horse"></i>
                        <p className="p" id="p-romanDesc">Flash back to Ancient Rome to immerse yourself in the sights
                            and flavors of the past</p>
                    </div>
                    <div className="col-lg-3 buttons" id="col2">
                        <p className="p-0" id="p-egypt">Ancient Egypt</p>
                        <img src={pyramid} alt="pyramid" id="pyramid"/>
                        <p className="egypt-description">Taste the food eaten by the Pharaohs of Ancient Egypt</p>
                    </div>
                    <div className="col-lg-3 buttons" id="col3">
                        <p className="p-0" id="future">The Future</p>
                        <img src={vr} alt="virtual reality"/>
                        <p className="future-description">Jump into the future and taste the advanced flavors of a new
                            age</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )


}
export default SplashPage;