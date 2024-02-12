import { Button, ChatBubble } from "react-daisyui";

const Experience = ({ experience }) => {
  const bubblePosition = (id) => {
    if (id % 2 === 0) {
      return "true";
    }
  };

  return (
    <ChatBubble end={bubblePosition(experience.id)} className="m-4 md:mt-10 md:mb-10">
      <ChatBubble.Header className="text-secondary text-lg">
        <i className="opacity-70">{experience.period} - </i> {experience.position}
        <br />
      </ChatBubble.Header>
      <ChatBubble.Message className="text-24 shadow-md shadow-accent m-3">
        {experience.description}
      </ChatBubble.Message>
      <ChatBubble.Footer className="opacity-1">
        Learnings:{" "}
        {experience.learnings.map((learning, index) => {
          return (
            <Button
              key={index}
              className="m-0.5 cursor-default"
              color="primary"
              size="xs"
              glass
              variant="outline"
              active="true"
            >
              {learning}
            </Button>
          );
        })}
      </ChatBubble.Footer>
    </ChatBubble>
  );
};

export default Experience;
