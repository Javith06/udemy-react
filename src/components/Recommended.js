import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Recommended()
{
    return(
    <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
        
            <div className="course-card">
                <img src={c1} alt="Python Data Visualisation Course"></img>
                <h3>2024 Python Data Visualisation</h3>
                <p>Joseph Murphy</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹469 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c2} alt="Web Development Bootcamp"></img>
                <h3>2024 Web Development Bootcamp</h3>
                <p>James Clear</p>
                <p>3.8 ⭐⭐⭐</p>
                <p>₹599 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c3} alt="Azure AZ-900 Class"></img>
                <h3>2024 Azure AZ-900 Class</h3>
                <p>Cillian Murphy</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                        <img src={c4} alt="ASP.NET with C#"></img>
                        <h3>2024 ASP.NET with C#</h3>
                        <p>Travis Scott</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹499 <del>₹1999</del></p>
                    </div>
        
                </div>
            </div>
            )
}

export default Recommended