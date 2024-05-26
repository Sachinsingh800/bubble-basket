import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsFormOpen(false); // Close form when closing chatbot
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit form data
      console.log("Form submitted", formData);
      // Reset form
      setFormData({ name: "", email: "", phone: "", question: "" });
      setIsFormOpen(false);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.question) errors.question = "Question is required";
    return errors;
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.header}>
            <h2>
              Hi there{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p>
              Need help? Search our help center for answers or start a
              conversation:
            </p>
          </div>
          {!isFormOpen ? (
            <>
              <div className={styles.conversations}>
                <div className={styles.conversation}>
                  <div className={styles.conversationStatus}>
                    <span className={styles.activeStatus}>Active</span>
                    <span className={styles.conversationTitle}>Unanswered</span>
                  </div>
                  <p>
                    Welcome to our site, if you need help, just start a new
                    conversation!
                  </p>
                </div>
              </div>
              <div className={styles.search}>
                <input type="text" placeholder="Search for answers" />
                <button className={styles.searchButton}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <button
                className={styles.newConversationButton}
                onClick={() => setIsFormOpen(true)}
              >
                New Conversation →
              </button>
              <div className={styles.footer}>
                <a href="#">Add free live chat to your site</a>
              </div>
            </>
          ) : (
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">* Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
                {formErrors.name && (
                  <span className={styles.error}>{formErrors.name}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="question">* Question</label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleFormChange}
                ></textarea>
                {formErrors.question && (
                  <span className={styles.error}>{formErrors.question}</span>
                )}
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          )}
          <button className={styles.closeButton} onClick={toggleChatbot}>
            ×
          </button>
        </div>
      )}
      {!isOpen && (
        <button className={styles.roundButton} onClick={toggleChatbot}>
          <SendIcon />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
