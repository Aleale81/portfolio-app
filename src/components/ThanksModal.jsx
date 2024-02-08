import { Button, Mask, Modal } from "react-daisyui"
import thanksIcon from "../assets/icons/thank-you.gif"
const linkedinLink = "https://www.linkedin.com/in/alessandra-scarpellini"


const ThanksModal = ({visible, handleModal, userName}) => {
    return (
        <Modal.Legacy open={visible} className="shadow-md shadow-accent">
        <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2" onClick={handleModal}>
          ✕
        </Button>
        <Modal.Header className="font-bold text-primary">Thank you so much {userName}!</Modal.Header>
        <Modal.Body>
        <p>Your message means a lot to me.<br/> I'll get back to you as soon as possible.<br/> In the meantime, feel free to explore more of my portfolio or connect with me on <a href={linkedinLink} target="_blank" className="text-cyan-400">LinkedIn</a>.<br/> Looking forward to chatting soon!</p>
        <p className="flex justify-end">
        <Mask src={thanksIcon} className="w-12 h-12 mt-2" variant="circle"/>
        </p>
        </Modal.Body>
      </Modal.Legacy>
    )
}

export default ThanksModal