import { useState } from "react";
import { decode } from "html-entities";

const NewsletterForm = ({ status, message, onSubmitted }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFormSubmit = () => {
    setError(null);
    const isFormValidated = onSubmitted({ EMAIL: email });
    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }
    // Clear the input field after form submission
    setEmail('');
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      {/* --------------Newsletter form input field------------- */}
      <div className="">
        <div className="">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Enter your email address"
            className=" text-slate-500 text-sm"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <button
            className="bg-primary text-sm p-[10px] text-white mt-2"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {/* -----------validation message with styles---------- */}
      <div className="newsletter-form-info">
        {status === "sending" && (
          <div style={{ color: "blue" }}>Sending...</div>
        )}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: decode(message) }}
          />
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
