import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
import c9 from "../assets/images/c9.jpg"
import c10 from "../assets/images/c10.jpg"
import c11 from "../assets/images/c11.jpg"
import c12 from "../assets/images/c12.jpg"



function Topic(){
    return(
    
    <div>
    <div className="topics">
        <h1 className="topics__title">Topics recommended for you</h1>
        <div className="topics__container">
            <p>Website</p>
            <p>JavaScript</p>
            <p>CSS</p>
            <p>MongoDB</p>
            <p>Azure</p>
            <p>AWS</p>
            <p>Docker</p>
            <p>GitHub</p>
            <p>React</p>
        </div>
        </div>
        
        <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c5} alt="Java Complete Bootcamp"></img>
                <h3>Data Science Complete course</h3>
                <p>Abel Tesfaye</p>
                <p>4.6 ⭐⭐⭐⭐</p>
                <p>₹469 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c6} alt="C AND C++ 100days code"></img>
                <h3>Cyber Security Introduction </h3>
                <p>Jack Clear</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹599 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c7} alt="Amazon Web Services Begginer guide"></img>
                <h3>Data Analyst Programme</h3>
                <p>JK Rowling</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c8} alt="Azure Fundamentals 2024"></img>
                <h3>UI UX Designing</h3>
                <p>Stephen Hawking</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c11} alt="Data Structure Algorithm-DSA 2024"></img>
                <h3>2024 Python Data Visualisation</h3>
                <p>Steve Joseph</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹469 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c9} alt="MERN Stack by EMC"></img>
                <h3>2024 Web Development Bootcamp</h3>
                <p>Agnel John</p>
                <p>3.8 ⭐⭐⭐</p>
                <p>₹599 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c10} alt="Azure AZ-900 Class"></img>
                <h3>2024 Azure AZ-900 Class</h3>
                <p>Ryan Gosling</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹449 <del>₹1999</del></p>
            </div>
        
            <div className="course-card">
                <img src={c12} alt="ASP.NET with C#"></img>
                <h3>2024 ASP.NET with C#</h3>
                <p>Angelina Yu</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹1999</del></p>
            </div>
        
        </div>
        </div>
        </div>
        
    )
}

export default Topic



