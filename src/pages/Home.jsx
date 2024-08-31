import { Button } from '../components/button/Button';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/pages.css';

export const Home = () => {
    return (
        <section className='homeContainer'>
            <Navigation />
            <div className='titleWrapper'>
                <h1 className='homeTitle'>Make Life Easier for the Family:</h1>
                <h3 className='homeSubTitle'>Find Babysitters Online for All Occasions</h3>
                <Button />
            </div>
        </section>
    )
}
