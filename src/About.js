import { Box } from "@mui/material/";
import { Button } from "@mui/material/";

import { motion } from "framer-motion";
import Diversity1Icon from "@mui/icons-material/Diversity1";

import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function About() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="About">
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
          <span class="text">About .....{skill ? null : "<Tap once>"}</span>
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
                <h1>
                  Hii...this is
                  <span class="css-v52121"> LAKSHMI NARASHIMMAN M</span>, I
                  completed my BE in CIVIL stream.And worked as{" "}
                  <span class="css-v52121">SITE ENGINEER</span>
                  for Three years. But,I was faced with a dilemma in my
                  professional career, do I continue working in this field in a
                  different location, or do I venture out of my{" "}
                  <span class="css-v52121">comfort zone</span>.So I decided to
                  switch my career to this field.
                </h1>
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
