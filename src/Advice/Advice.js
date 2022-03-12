import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

function Advice() {
  const [advice, setAdvice] = useState([]);
  //   const [num, setNum] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => setAdvice(response.data));
    // .then((response) => setNum(response.data))
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="advice-number">ADVICE #{advice.slip?.id}</h1>
      <h1 className="advice-text">"{advice.slip?.advice}"</h1>
      <hr></hr>
      <div className="button-icon">
        <Button className="button">
          <CasinoIcon
            className="icon"
            onClick={() => {
              fetchData();
            }}
          />
        </Button>
      </div>
    </div>
  );
}
export default Advice;
