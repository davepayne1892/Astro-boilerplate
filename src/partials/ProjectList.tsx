import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Conversational testing"
        description="An attempt to shift testing down the pyramid as opposed to the following project. This project allows QA to add parameters and branching scripts which mimic conversational flow implementations in a Dialogflow CX agent. The test project then flattens the trees into separate tests and runch through each as a unique session, asserting on agent responses and metadata as appropriate."
        link="/"
        img={{
          src: 'public/assets/images/chat.png',
          alt: 'Speech Bubbles',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
            <Tags color={ColorTags.GREEN}>google-sdk</Tags>
            <Tags color={ColorTags.YELLOW}>vitest</Tags>
          </>
        }
      />
      <Project
        name="End to end testing of inbound contact centre communications"
        description="Utilising various dialogflow cx clients we are able to create a Dialogflow CX agent to play the role of a customer calling in to the contact centre. By placing the calls through the twilio sdk and connecting the call to the Dialogflow CX agent, we are able to interact with DTMF systems, communicate with Virtual Agents, and even hold a conversation with a real human agent."
        link="/"
        img={{ src: 'public/assets/images/robot.png', alt: 'Chatbot' }}
        category={
          <>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
            <Tags color={ColorTags.GREEN}>google-sdk</Tags>
            <Tags color={ColorTags.RED}>twilio-sdk</Tags>
            <Tags color={ColorTags.YELLOW}>vitest</Tags>
          </>
        }
      />
      <Project
        name="REST API Acceptance Test MonoRepo"
        description="MonoRepos are great for acceptance testing. In this project we create a base REST client atop node-fetch, which can be extended with endpoint specific handlers. This enables us to create a type safe, easy to use, and maintainable REST API aceptance test solution across many different RESTful APIs."
        link="/"
        img={{ src: 'public/assets/images/hydra.png', alt: 'Hydra' }}
        category={
          <>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
            <Tags color={ColorTags.VIOLET}>MonoRepo</Tags>
            <Tags color={ColorTags.ORANGE}>Mocha</Tags>
            <Tags color={ColorTags.ORANGE}>Chai</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
