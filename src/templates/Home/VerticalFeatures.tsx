import { VerticalFeatureRow } from '../../components/feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Play tambola"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Play Online Tambola"
      description="This online game comes in handy when you need to play tambola with your friends. It does not require any physical tickets, boards or a number caller, every thing is built in. Start the game with participants and enjoy."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="12+ Game Rules"
      description="There are more than 12 tambola game rules to play with. Some of the rules that this game features are Star, Corners, Full House, First Line, Middle Line, Last Line, Early Five, Early Seven, King's Corner, Queen's Corner, etc."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Free, No signup required"
      description="Play free tambola online with your friends. No need to install an app, it is directly present in your desktop or phone browser. No need to signup or register. Share the code with your friends and play."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
