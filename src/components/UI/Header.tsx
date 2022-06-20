import "../../styles/components/UI/Header.css";

export const Header = () => {
    return (
        <div className='header'>
            <div className="header__title">
                <h1>Your favourite movies. Explained</h1>
                <p>Figure what happened. Then find out why</p>
            </div>
            <div className='header__img'>
                <div className="img--opacity"></div>
                <img src="/assets/portada.jpg" alt='portada'/>
            </div>
        </div>
    )
}
