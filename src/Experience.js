import { Box } from "@mui/material/";
import { Button } from "@mui/material/";

import { motion } from "framer-motion";
import Diversity1Icon from "@mui/icons-material/Diversity1";

import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function Experience() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Experience">
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
          <span class="text">
            Work Experience .....{skill ? null : "<Tap once>"}
          </span>
        </Button>

        {skill ? (
          <div>
            {" "}
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <Button
                startIcon={<Diversity1Icon />}
                class="button-experience"
                role="button"
              >
                <span class="text">
                  Worked as <span class="css-v52121">SITE ENGINEER</span> in{" "}
                  <span class="css-v52121">SWAMINAATHAN CONSTUCTIONS</span> (Jun
                  2018 - Aug 2021) and handled multiple site works with reputed
                  organisation to provide unique designs.
                </span>
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
