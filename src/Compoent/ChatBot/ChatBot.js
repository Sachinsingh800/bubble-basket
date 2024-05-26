import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
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
          <button className={styles.newConversationButton}>
            New Conversation →
          </button>
          <div className={styles.footer}>
            <a href="#">Add free live chat to your site</a>
          </div>
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
