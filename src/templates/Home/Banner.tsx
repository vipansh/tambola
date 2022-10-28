import Link from 'next/link';

import { Button } from '../../components/button/Button';
import { CTABanner } from '../../components/cta/CTABanner';
import { Section } from '../../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="To play this game one has to be the host who will start the game and he/she will be responsible for inviting the participants as well."
      subtitle="Start playing tambola"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button type="primary">Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
