import { Context } from '@/context/layout';
import { FormEvent, useContext, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import Close from 'public/images/modal/vector-close.svg'
import axios from 'axios';
import { toast } from 'react-toastify';

interface IProps {
  isActiveModalEmail: boolean | undefined;
}

const GlobalStyles = createGlobalStyle<IProps>`    
${(props) =>
  props.isActiveModalEmail &&
  `body {
        overflow: hidden;
    }`}
`;

export default function ModalEmail() {
  const { isActiveModalEmail, handleCloseModalEmail, dialog, setIsActiveLoading } = useContext(Context);

  async function sendEmail(event: FormEvent) {
    event.preventDefault();
    handleCloseModalEmail();
    setIsActiveLoading(true);
    
    try {
      const email = await axios.post('/api/modal-email', {
        email: refEmail.current.value,
        subject: refSubject.current.value,
        content: refContent.current.value,
      });
      toast.success(email.data.msg, {
        theme: 'colored',
      });
      setIsActiveLoading(false);
    } catch (error: any) {
      toast.error(error.response.data.msg, {
        theme: 'colored',
      });
      setIsActiveLoading(false);
      console.log(error);
    }
  }

  function handleKeyPressDialog(event: any) {
    if (event.key === 'Escape') {
      handleCloseModalEmail();
    }
  }

  const refEmail = useRef<any>(null);
  const refSubject = useRef<any>(null);
  const refContent = useRef<any>(null);

  return (
    <>
      <GlobalStyles isActiveModalEmail={isActiveModalEmail} />
      <dialog onKeyDown={handleKeyPressDialog} ref={dialog}>
        <div className="position">
          <form onSubmit={sendEmail}>
            <div className="header">
              <h1>Send Message</h1>
              <Close onClick={handleCloseModalEmail} />
            </div>
            <div className="field-input">
              <label htmlFor="input-from">From:</label>
              <input ref={refEmail} id="input-from" type="email" placeholder='you@example.com' required />
            </div>
            <div className="field-input">
              <label htmlFor="input-subject">Subject:</label>
              <input ref={refSubject} id="input-subject" type="text" placeholder='Insert the subject' required />
            </div>
            <textarea ref={refContent} placeholder='Type your message...' required></textarea>
            <div className="footer">
              <div className="position">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
