
import storyImage from '../../assets/storyImage.png';
import './Home.css';
import QuoteOfTheDay from '../../components/QuoteOfTheDay';

const Home = () => {
    return (
        <section className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <h2>📚 Welcome to the Interactive StoryBook</h2>
                    <p>
                        We believe that stories spark a child's curious mind,
                        A place to dream, explore, and be uniquely one of a kind.
                        No need to wait or search the shelves in line —
                        The magic lives right here, and it's yours to define.
                    </p>
                    {/* Link to the storybook page */}
                    <a href="/storybook" className="explore-btn">✨ Start Exploring</a>
                </div>
                <div className="home-image">
                    <img src={storyImage} alt="A magical open book with stars and characters flying out" />
                </div>
            </div>
            {/* Section: Daily inspirational quote component */}
            <div className="quote-of-the-day"><QuoteOfTheDay /></div>
        </section>
    )
}

export default Home;