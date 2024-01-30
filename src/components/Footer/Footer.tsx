import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.grid}>
      <a
        href="/igor_resume_2024.pdf"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Resume<span>-&gt;</span>
        </h2>
        <p>Find a summary of my professional history.</p>
      </a>

      <a
        href="https://www.linkedin.com/in/igorcrd/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          LinkedIn <span>-&gt;</span>
        </h2>
        <p>My full professional history.</p>
      </a>

      <a
        href="https://github.com/IgorCRD"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          GitHub <span>-&gt;</span>
        </h2>
        <p>Code and a lot of PR reviews!</p>
      </a>
    </div>
  );
};
