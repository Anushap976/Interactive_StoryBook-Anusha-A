import './Footer.css';

const Footer = () => {
    return (
        <footer className="storybook-footer">
            <p>🪄 © {new Date().getFullYear()} Interactive StoryBook</p>
            <p>Built for dreamers, thinkers, and storytellers of all kinds 💫</p>
            <p>Thanks for reading! Come back soon — the next chapter awaits... 📖✨</p>
        </footer>
    )
}

export default Footer;