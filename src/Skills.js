import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";

import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
export function Skills() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Skills">
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
            Expertise Skill .....{skill ? null : "<Tap once>"}
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
                startIcon={<SchoolIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">React JS</span>
              </Button>
            </motion.p>
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              <Button
                startIcon={<SchoolIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">Node JS</span>
              </Button>
            </motion.p>
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.4 }}
            >
              <Button
                startIcon={<SchoolIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">MySQL</span>
              </Button>
            </motion.p>
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1.6 }}
            >
              <Button
                startIcon={<SchoolIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">Mongo DB</span>
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
