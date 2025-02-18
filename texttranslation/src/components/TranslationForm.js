import { useState } from "react";
import axios from "axios";
import styles from "./TranslationForm.module.css";

const TranslationForm = () => {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("fr");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if(!text.trim()) return;
    setLoading(true);
    setTranslatedText("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/translate", {
        text,
        target_lang: targetLang,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.log("Translation Error:", error);
    }

    setLoading(false);
  };
  
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Translator</h2>
      <textarea
        className={styles.textArea}
        placeholder="Translate your Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        className={styles.selectBox}
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </select>
      <button className={styles.button} onClick={handleTranslate} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>
      {loading && <p className={styles.loading}>⏳ Translating...</p>}
      {translatedText && (
        <p className={styles.translationOutput}>{translatedText}</p>
      )}
    </div>
  );
};

export default TranslationForm;
