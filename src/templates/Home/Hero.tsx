import Link from 'next/link';

import { Background } from '../../components/background/Background';
import { CreateAndJoinButtons } from '../../components/createAndJoin/CreateAndJoinButtons';
import { HeroOneButton } from '../../components/hero/HeroOneButton';
import { NavbarTwoColumns } from '../../components/navigation/NavbarTwoColumns';
import { Section } from '../../layout/Section';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <Section>
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>GitHub</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section>
        <HeroOneButton
          title={
            <>
              <span className="text-primary-500">Welcome to Tambola!</span>
            </>
          }
          description="Play Tambola online"
        />
      </Section>
      <CreateAndJoinButtons />
    </Background>
  );
};

export { Hero };
