import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>David</GradientText> 👋
        </>
      }
      description={
        <>
          I've worked in the QA space for more than ten years, often creating{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            test automation solutions
          </a>{' '}
          to solve complex challenges. <br />I also spend a fair amount of time
          thinking about how to improve the value of the software delivery teams
          that I work with. Sometimes I write these thoughts down in my{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            blog
          </a>
          .
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="public\assets\images\avatartion.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
