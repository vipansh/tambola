import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600 pb-4">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
  </div>
);

export { Base };
