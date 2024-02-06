import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import email from "../assets/static-icons/email-icon.png";
import linkedin from "../assets/static-icons/linkedin-icon.png";
import gitHubStatic from "../assets/static-icons/github-icon.png";
import { Button, Card, Form, Hero, Input, Mask, Textarea } from "react-daisyui";
const mailto = "mailto:scaalessandra@icloud.com"
const linkedinLink = "https://www.linkedin.com/in/alessandra-scarpellini"
const githubLink = "https://github.com/Aleale81"

const ContactsPage = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    //lg:text-left

    <Hero>
      <Hero.Content className="flex-col align-center lg:flex-row-reverse p-0">
        <div className="text-center ">
          <h1 className="text-primary text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500">
            Contact
          </h1>
          <p className="py-6">
            Feel free to rech out to me using this form or one of the
          </p>
          <div className="flex justify-evenly lg:mt-10">
            <a
              href={mailto}
              target="_blank"
              className="inline-block"
            >
              <Mask src={email} className=" w-9 h-9" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              className="inline-block"
            >
              <Mask src={linkedin} className=" w-9 h-9" />
            </a>

            <a
              href={githubLink}
              target="_blank"
              className="inline-block"
            >
              <Mask src={gitHubStatic} className=" w-9 h-9" />
            </a>
          </div>
        </div>
        <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Card.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Label title="Email" />
              <Input
                type="email"
                placeholder="email"
                className="input-bordered shadow-inner shadow-secondary"
                name="user_email"
                required
              />
              <Form.Label title="Name" />
              <Input
                type="text"
                placeholder="name"
                className="input-bordered shadow-inner shadow-secondary"
                name="user_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <Form.Label title="Message" />
              <Textarea
                type="text"
                placeholder="message"
                className="shadow-inner shadow-secondary"
                name="message"
                required
              />
              <div className="mt-6">
                <Button type="submit" color="primary">
                  Send
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Hero.Content>
    </Hero>
  );
};

export default ContactsPage;
