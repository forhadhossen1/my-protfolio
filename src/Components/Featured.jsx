import { Link } from 'react-router-dom';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed my-20">
            <h2 className='text-3xl font-bold text-white py-12 px-12'>Have a Project ?</h2>
            <p className='text-xl text-white px-12'>
                Clients satisfaction is my first <br />priority and it will be always. <br /> I am available 24/7 you can contact me anytime
            </p>

            <div className='my-12 mx-12'>
                <Link to='/contact'>
                    <button className='btn btn-outline text-red-400 rounded-none my-12'>Contact Me</button>
                </Link>
            </div>
        </div>
    );
};

export default Featured;