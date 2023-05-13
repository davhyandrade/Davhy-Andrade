import { Context } from '@/context/layout';
import { FormEvent, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import Close from 'public/images/modal/vector-close.svg'

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

export default function ModalEmail({ dialog }: any) {
  const { isActiveModalEmail, handleCloseModalEmail } = useContext(Context);

  function handleKeyPressDialog(event: any) {
    if (event.key === 'Escape') {
      handleCloseModalEmail();
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <GlobalStyles isActiveModalEmail={isActiveModalEmail} />
      <dialog onKeyDown={handleKeyPressDialog} ref={dialog}>
        <div className="position">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Send Message</h1>
              <Close oncli />
            </div>
            <div className="field-input">
              <label htmlFor="input-from">From:</label>
              <input id="input-from" type="email" required />
            </div>
            <div className="field-input">
              <label htmlFor="input-subject">Subject:</label>
              <input id="input-subject" type="text" required />
            </div>
            <textarea required></textarea>
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
