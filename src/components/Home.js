import profile_pic from '../profile-pic.jpeg'

function Home() {

return (
    <div className="App">
        <main className="App-main">
            <img src={profile_pic} alt={'Tami Olafunmiloye'} className="profile-pic"/>
            <div style={{ backgroundColor: '#fff', marginTop: '.5rem', padding: '.5rem', border: '3px solid black' }}>Hi, I'm Tami Olafunmiloye.</div>
            <div style={{ backgroundColor: '#fff', marginTop: '.75rem', padding: '.5rem', border: '3px solid black' }}>I'm a full stack engineer with experience in finance and media!</div>
            <div style={{ backgroundColor: '#fff', marginTop: '.75rem', padding: '.5rem .75rem', border: '3px solid black' }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.github.com/tamiolaf"> <i className="fab fa-github-square fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.linkedin.com/in/tamiolaf"> <i className="fab fa-linkedin fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.twitter.com/tamiolaf"> <i className="fab fa-twitter-square fa-3x"></i></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:tamiolaf@gmail.com"> <i className="fas fa-envelope-square fa-3x"></i></a>
            </div>
        </main>
    </div>
    )
}

export default Home;