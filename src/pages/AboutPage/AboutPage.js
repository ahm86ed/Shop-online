import { Link, Outlet } from 'react-router-dom';

export default function AboutPage() {
    return (
        <main>
            <h1>About Us</h1>
            <ul>
                <li>
                    <Link to='/about-us'>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to='/about-us/mission'>
                        Our Mission
                    </Link>
                </li>
                <li>
                    <Link to='/about-us/policy'>
                        Privacy Policy
                    </Link>
                </li>
            </ul>

            <Outlet />
        </main>
    );
}