import React from 'react'
import "./../LoginSign/Logout.css"
import load from "./../assets/profile.jpg"
import back2 from "./../assets/back6.avif"
import back1 from "./../assets/pic1.webp"
function Logout() {
  return (
    <div>


<div class="card-container"style={{  backgroundImage: `url(${back1})`, backgroundSize: 'cover' }}>

<div class="upper-container" style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
    <div class="image-container" >
        <img src={load} />
    </div>
</div>

<div class="lower-container" style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
    <div>
        <h3>User Name</h3>
        
    </div>
    <div>
        <p>Are you sure want to logout??</p>
    </div>
    <div>
        <a href="#" class="btn">Yes</a>
        <a href="#" class="btn">No</a>
    </div>
</div>

</div>
    </div>
  )
}

export default Logout