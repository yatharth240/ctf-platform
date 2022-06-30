
const AboutPage = ()=>{

    return (
        <>
        <div className = "container bg-dark text-light my-5">
            <div className = "my-5">
            <h1> About</h1>
            <h4 className="font-weight-light">The ABC CTF is a game designed to let you learn to hack in a safe, rewarding environment. ABC is a free educational site for hackers, run by HackerOne. This CTF is another integral component in our plans to make the world a better place, one bug at a time.</h4>
            </div>

            <div className = "my-5">
            <h1> What is a CTF?</h1>
            <h4 className="font-weight-light">CTF stands for Capture The Flag, a style of hacking event where you have one goal: hack in and find the flag. Flags are placed in various locations -- they might be in a file, in the database, stuck into source code, or otherwise -- and your goal is to hunt them all down. Each flag looks something like ^FLAG^37ae568362f974017fa575f08cd215044cd6bb395c3f5e5e293ee5324ba6769c$FLAG$, so you'll know the instant you see one</h4>
            </div>


            <div className = "my-5">
            <h1> Get Started!</h1>
            <h4 className="font-weight-light">Sign up now and then check out our guide on how to play or just jump right in. Whether you're brand new or a seasoned hacker, you may also want to check out our companion site, Hacker101, where you can learn everything from absolute beginner to advanced hacking techniques.</h4>
            </div>

        </div>
        </>
    )
}

export default AboutPage;