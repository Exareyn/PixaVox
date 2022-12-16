import "./Create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = event => {
    setInput(event.target.value);
 };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (input === "") {
        return;
      }
      else {
        navigate("/view")
      }
    }
  };

  return (
    <div className="create-container">
      <div className="create-content">
        <div className="upload-container">
          <div className="upload-inner">
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              style={{ color: "#2b55b4", fontSize: "60px" }}
            />
            <div>
              <span style={{ color: "#000000", fontSize: "2.5rem" }}>
                Glisser & déposer une image ici <br />
              </span>
              <span style={{ color: "#000000", fontSize: "2rem" }}>
                ou
                <span style={{ color: "#2b55b4" }}> chercher une image </span>
                depuis l'appareil
              </span>
            </div>
          </div>
          <div className="upload-button">
            <span className="upload-button-text">Upload</span>
          </div>
        </div>
        <div className="separator-container">
          <div className="vertical-ligne-separator"></div>
          <div className="round-separator">
            <span style={{ fontSize: "4.8rem" }}>OU</span>
          </div>
        </div>
        <div className="text-input-container">
          <div className="text-input-title-container">
            <span style={{ fontSize: "4.8rem" }}>Generateur depuis texte</span>
          </div>
          <div className="text-input">
            <input
              type="text"
              placeholder="Une Balle"
              className="custom-input"
              onKeyDown={handleKeyDown}
              value={input}
              onChange={onChangeHandler}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#2b55b4", fontSize: "40px" }}
              className="generate-text-icon"
              onClick={() => navigate("/view")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
