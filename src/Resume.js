import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import resume from "../src/resume portfolio/Resume-MLN.png";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { jsPDF } from "jspdf";
export function Resume() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  const DownloadFile = () => {
     window.open(resume, "_blank");
//     const doc = new jsPDF();

//     doc.addImage(resume, "PNG", 10, 5, 170, 270);
//      const blob = doc.output("blob");
//     const url = URL.createObjectURL(blob);

//     window.open(url, "_blank");

//     URL.revokeObjectURL(url);
//     doc.save("Resume.pdf");
  };
  return (
    <div className="Resume">
      <Box className="MainDiv">
        <Button
          startIcon={
            skill ? (
              <KeyboardDoubleArrowUpIcon />
            ) : (
              <KeyboardDoubleArrowDownIcon />
            )
          }
          onClick={() => setSkill(!skill)}
          class="button-75"
          role="button"
        >
          <span class="text">Resume .....{skill ? null : "<Tap once>"}</span>
        </Button>

        {skill && <img src={resume}></img>}

        <Button
          onClick={DownloadFile}
          startIcon={<DownloadingIcon />}
          role="button"
          class="button-back"
          sx={{
            backgroundColor: "orange",
            width: "500px",
            display: "flex",
            left: "540px",
            margin: "10px",
            color: "black",
          }}
        >
          <span class="text">Take</span>
        </Button>

        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowCircleLeftIcon />}
          role="button"
          class="button-back"
        >
          <span class="text">Back</span>
        </Button>
      </Box>
      ;
    </div>
  );
}
