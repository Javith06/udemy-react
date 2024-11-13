// <!-- Navbar Section -->

function Navbar(){
    return(
    <div className="navbar">
        <div className="navbar__s1">
            <h1 className="navbar__s1__title">
                <span className="navbar__s1__title--first">Û</span>demy
            </h1>
        </div>
        <div className="navbar__s2">
            <i className="fa-solid fa-magnifying-glass fa-beat"></i>
            <input type="text" placeholder="Search for anything..Tech, Business, Art"></input>
        </div>
        <div className="navbar__s3">
            <p>Courses</p>
          
             <div className="mylearning">
                <p>My Learning </p>
           
            <div className="mylearning__popup">
                <p>You did not purchased anything yet.</p>
            </div> </div>
            <i className="fa-solid fa-cart-shopping fa-bounce"></i>
            <i className="fa-solid fa-bell fa-shake"></i>
            <i className="fa-solid fa-user"></i>
        </div>
    </div>
    )
}

export default Navbar
