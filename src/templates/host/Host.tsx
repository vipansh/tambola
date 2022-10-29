import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Hero from './Hero';
import Navbar from './Navbar';

const Host = () => (
  <div className="antialiased text-gray-600 pb-4">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
  </div>
);

export { Host };
