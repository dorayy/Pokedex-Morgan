import { Helmet } from "react-helmet-async";
import SvgContactModal from "../components/SectionComp/Svg5";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "../App.css";

function Home() {
  const { isShowing, toggle } = useModal();
  const [alert, isAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ga8h6c8",
        "template_s31g51h",
        e.target,
        "user_8IDpf382p0MV2sACiAtLF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    isAlert(true);
  };

  setTimeout(() => {
    isAlert(false);
  }, 3000);
  return (
    <>
      {
        <Helmet>
          <title>Home page</title>
        </Helmet>
      }
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact me</h1>
        </div>
      </header>

      <div className="App">
        <button className="button-default" onClick={toggle}>
          Show Modal
        </button>
        <Modal
          sendEmail={sendEmail}
          alert={alert}
          isShowing={isShowing}
          hide={toggle}
        />
      </div>
    </>
  );
}

const alertReturn = () => (
  <div className="border-purple-500 bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4  leading-tight">
    <p>
      Le message a bien été envoyé , je vous recontact après lecture de votre
      mail !
    </p>
  </div>
);

export default Home;

const Modal = ({ sendEmail, isShowing, hide, alert }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <SvgContactModal />

                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form className="w-full max-w-sm" onSubmit={sendEmail}>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      name="name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      name="email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      name="subject"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Message
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      name="message"
                    />
                  </div>
                </div>
                {alert && alertReturn()}
                <br />
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    <input
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};
