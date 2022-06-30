import Slider from '../Slider';
import Timer from '../Timer';

const HomePage = ()=>{
    return (
        <>
      <div className="container my-5 text-center bg-dark text-light">
          <h1 className="font-weight-bold">Welcome to ABC CTF </h1>
          <p className="h4 py-2 font-weight-bold">Get Ready to Compete with your peers and win exciting prices!!!</p>
          <p className="h5 py-1 font-weight-light">ABC CTF is a beginner freindly CTF to test your existing skills and make you learn new things.
         All beginners who are interested in Cyber Security are invited here.</p>
          <p className="h5 py-1 font-weight-light">Whether you've just started your hacker journey or you're just looking for some new challenges, the ABC CTF has something for you.If this is your first CTF, check out the about page</p>
      </div>


        <div className="container my-5 bg-dark text-light text-center">
      <Timer/>
      </div>

      <div className="container py-5 my-5 bg-dark">
      <Slider/>
      </div>
        </>
    )
}

export default HomePage;