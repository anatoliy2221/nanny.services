import { Button } from '../components/button/Button';
import IconComponent from '../components/iconComponent/IconComponent';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/pages.css';

export const Home = () => {
    return (
        <section className='homeContainer'>
            <Navigation />
            <div className='titleWrapper'>
                <h1 className='homeTitle'>Make Life Easier for the Family:</h1>
                <h3 className='homeSubTitle'>Find Babysitters Online for All Occasions</h3>
                <Button className='btnGetStarted'>Get started
                    <IconComponent width={18} height={18} iconName={'iconArrowUp'} />
                </Button>
            </div>
        </section>
    )
}
