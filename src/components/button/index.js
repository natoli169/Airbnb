import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { Container } from "./style";
import { Cancle } from "../../assets/cancle";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    };
  });
  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };

  return (
    <>
      {display && (
        <Container>
          <div className='modal-wrapper'>
            <div className='modal-backdrop'>
              <div className='modal-box'>{props.children}</div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
});

export const RentButton = () => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <Container>
      <button onClick={openModal}>Rent House</button>
      <Modal ref={modalRef}>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui
          doloremque! Assumenda in praesentium, nemo a repellendus perspiciatis.
          Esse alias rem quidem. Earum amet recusandae vel ipsum quam velit
          quia. Excepturi corrupti cum autem. Numquam eveniet harum voluptates
          repellat quas.
        </p>
      </Modal>
    </Container>
  );
};

export const BuyButton = () => {
  const modalRef = useRef();
  const [buyer, setBuyer] = useState({
    email: "",
    phone: "",
    shortMessage: ""
  });
  const { email, phone, shortMessage } = buyer;
  // Handle changes in inputs
  const onChange = e => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    modalRef.current.close();
  };
  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <Container>
      <button onClick={openModal} className='brk-btn'>
        Buy House
      </button>
      <Modal ref={modalRef}>
        <div className='ca' onClick={() => modalRef.current.close()}>
          <Cancle />
        </div>
        <div className='header'>
          <h1 className='title'>Buy House</h1>
        </div>
        <form className='main-form'>
          <div className='buy'>
            <div class='form__group field'>
              <input
                type='email'
                class='form__field'
                placeholder='Email'
                name='email'
                id='email'
                value={email}
                onChange={onChange}
                required
              />
              <label for='email' class='form__label'>
                Email
              </label>
            </div>
            <div class='form__group field'>
              <input
                type='tel'
                class='form__field'
                placeholder='(+xxx-xxxxxxxxx)'
                name='phone'
                pattern='[+]{1}[0-9]{3}-[0-9]{9}'
                onChange={onChange}
                value={phone}
                id='price'
                required
              />
              <label for='price' class='form__label'>
                Phone(+xxx-xxxxxxxxx)
              </label>
            </div>
          </div>
          <textarea
            className='textarea'
            placeholder='Write a short message!'
            value={shortMessage}
            onChange={onChange}
            cols='30'
            rows='5'
          ></textarea>
          <input type='submit' onClick={onSubmit} className='btn' />
        </form>
      </Modal>
    </Container>
  );
};
