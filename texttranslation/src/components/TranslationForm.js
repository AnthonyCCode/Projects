import { useState } from "react";
import axios from "axios";
import styles from "./TranslationForm.module.css";

const TranslationForm = () => {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("fr");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/translate", {
        text,
        target_lang: targetLang,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.log("Translation Error:", error);
    }
  };

  const setLang = (event) => {
    setTargetLang(event.target.value);
  };

  const setTargetText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Google Extension Translator</h2>
      <textarea
        className={styles.textArea}
        placeholder="Translate your Text..."
        value={text}
        onChange={setTargetText}
      />
      <select
        className={styles.selectBox}
        value={targetLang}
        onChange={setLang}
      >
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </select>
      <button className={styles.button} onClick={handleTranslate}>
        Translate
      </button>
      {translatedText && (
        <p className={styles.translationOutput}>{translatedText}</p>
      )}
    </div>
  );
};

export default TranslationForm;
