import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import Person3Icon from "@mui/icons-material/Person3";
import AppsIcon from "@mui/icons-material/Apps";
import SchoolIcon from "@mui/icons-material/School";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import BusinessIcon from "@mui/icons-material/Business";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export function LetterMotion() {
  const navigate = useNavigate();
  const styles = {
    height: "30%",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2017/11/19/13/03/panorama-2962730_960_720.jpg)",
    backgroundSize: "contain",
    border: "solid thick white",
  };
  const styles2 = {
    height: "30%",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg)",
    backgroundSize: "contain",
    border: "solid thin white",
  };

  const styles3 = {
    height: "30%",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2019/10/07/10/30/programming-4532296_960_720.jpg)",
    backgroundSize: "cover",
    height: "58%",
    alignSelf: "flex-end",
    border: "solid thin white",
  };
  const styles4 = {
    width: "20px",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2017/08/04/17/56/application-2580867_960_720.jpg)",
    backgroundSize: "contain",
    border: "solid thin white",
  };
  const styles5 = {
    width: "20px",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2016/06/15/14/13/newspaper-1458998_960_720.jpg)",
    backgroundSize: "contain",
    border: "solid thin white",
  };

  const styles6 = {
    height: "58%",
    alignSelf: "flex-end",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2018/05/19/10/05/destination-3413087_960_720.jpg)",
    backgroundSize: "contain",
    border: "solid thin white",
  };

  return (
    <Box className="MainDiv">
      <motion.p
        initial={{ y: -1600 }}
        animate={{ y: -2 }}
        transition={{ duration: 2 }}
      >
        <Grid className="LetterMotion" gap={"5px 5px"} container spacing={2}>
          <Grid item className="GridItem" sx={styles} md={12} xs={12}>
            <Button
              onClick={() => navigate("/About")}
              startIcon={<Person3Icon />}
              class="button-75"
              role="button"
            >
              <span class="text">Lakshmi Narashimman. M</span>
            </Button>
            <Button
              onClick={() => navigate("/About")}
              startIcon={<Person3Icon />}
              class="button-75"
              role="button"
            >
              <span class="text">About</span>
            </Button>
          </Grid>

          <Grid className="GridItem" item xs={12} md={2.9} sx={styles3}>
            <Button
              onClick={() => navigate("/Skills")}
              startIcon={<SchoolIcon />}
              class="button-75"
              role="button"
            >
              <span class="text">Expertise Skills</span>
            </Button>
          </Grid>
          <Grid
            container
            gap={"5px 5px"}
            spacing={2}
            sx={{
              marginBottom: "20px",
              height: "60%",
              width: "20px",
              justifyContent: "space-around",
              alignSelf: "flex-end",
            }}
            item
            xs={12}
            md={5.9}
          >
            <Grid
              className="GridItem"
              sx={styles2}
              margin={"10px"}
              item
              md={11}
            >
              {" "}
              <Button
                onClick={() => navigate("/Project")}
                startIcon={<AppsIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">Project Done</span>
              </Button>
            </Grid>
            <Grid
              className="GridItem"
              margin={"4px"}
              item
              xs={2}
              md={4.4}
              sx={styles4}
            >
              {" "}
              <Button
                onClick={() => navigate("/Resume")}
                startIcon={<DocumentScannerIcon />}
                class="button-75"
                role="button"
              >
                <span class="text">Resume</span>
              </Button>
            </Grid>
            <Grid className="GridItem" margin={"10px"} item md={7} sx={styles5}>
              {" "}
              <Button
                onClick={() => navigate("/Experience")}
                startIcon={<Diversity1Icon />}
                class="button-75"
                role="button"
              >
                <span class="text">Work Experience</span>
              </Button>
            </Grid>
          </Grid>

          <Grid className="GridItem" sx={styles6} item xs={12} md={2.9}>
            <Button
              onClick={() => navigate("/Address")}
              startIcon={<BusinessIcon />}
              class="button-75"
              role="button"
            >
              <span class="text">Address</span>
            </Button>
          </Grid>
        </Grid>
      </motion.p>
    </Box>
  );
}
