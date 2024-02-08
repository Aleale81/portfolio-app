import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button, Card, Form, Hero, Input, Mask, Textarea } from "react-daisyui";
import ThanksModal from "../components/ThanksModal"

import email from "../assets/static-icons/email-icon.png";
import linkedin from "../assets/static-icons/linkedin-icon.png";
import gitHubStatic from "../assets/static-icons/github-icon.png";

const mailto = "mailto:scaalessandra@icloud.com"
const linkedinLink = "https://www.linkedin.com/in/alessandra-scarpellini"
const githubLink = "https://github.com/Aleale81"

const ContactsPage = () => {
  const form = useRef();
  const [userName, setUserName] = useState('')
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible(false);
    form.current.reset()
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('FORM', form.current["user_email"].value, form.current["user_name"].value)
    setUserName(form.current["user_name"].value)
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
          setVisible(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <ThanksModal visible={visible} handleModal={handleModal} userName={userName}/>
    <Hero className="rounded-lg shadow-md shadow-accent p-6">
      <Hero.Content className="flex-col align-center lg:flex-row-reverse p-0">
        <div>
          <h1 className="text-accent text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
            Contact
          </h1>
          <p className="py-6">
          Whether you're reaching out to discuss a project, share an idea, or just say hello, I'd love to hear from you! Feel free to fill out the contact form below, connect with me on LinkedIn for a more professional chat, or shoot me an email if that's more your style. No matter how you choose to reach out, I'm excited to connect and explore the possibilities together. Looking forward to hearing from you soon!
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
        <Card className="flex-shrink-0 w-full max-w-sm bg-base-100">
          <Card.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Label title="Email" />
              <Input
                type="email"
                placeholder="email"
                className="input-bordered shadow-inner shadow-accent"
                name="user_email"
                required
              />
              <Form.Label title="Name" />
              <Input
                type="text"
                placeholder="name"
                className="input-bordered shadow-inner shadow-accent"
                name="user_name"
                required
              />
              <Form.Label title="Message" />
              <Textarea
                type="text"
                placeholder="message"
                className="shadow-inner shadow-accent"
                name="message"
                required
              />
              <div className="mt-6">
                <Button type="submit" color="primary" glass variant="outline">
                  Send
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Hero.Content>
    </Hero>
    </>
  );
};

export default ContactsPage;
