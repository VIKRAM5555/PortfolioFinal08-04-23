import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import BusinessIcon from "@mui/icons-material/Business";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function Address() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Address">
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
          <span class="text">Address .....{skill ? null : "<Tap once>"}</span>
        </Button>

        {skill ? (
          <div>
            {" "}
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              <Button
                startIcon={<BusinessIcon />}
                class="button-75"
                role="button"
                href="https://github.com/VIKRAM5555"
              >
                <span class="text">GitHub Link</span>
              </Button>
            </motion.p>
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.4 }}
            >
              <Button
                startIcon={<BusinessIcon />}
                class="button-75"
                role="button"
                href="https://app.netlify.com/teams/vikram5555/sites"
              >
                <span class="text">Netlify Link</span>
              </Button>
            </motion.p>
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.6 }}
            >
              <Button
                startIcon={<BusinessIcon />}
                class="button-75"
                role="button"
                href="https://drive.google.com/file/d/1VAkr_L7EG9jbR-9pMZ67jDzwmgxV3RvR/view?usp=share_link"
              >
                <span class="text">Resume Google Drive Link</span>
              </Button>
            </motion.p>
          </div>
        ) : null}

        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowCircleLeftIcon />}
          role="button"
          class="button-back"
        >
          <span class="text">Back</span>
        </Button>
      </Box>
    </div>
  );
}
