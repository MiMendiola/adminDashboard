import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* Question 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas vel ratione, eos esse iure in, reiciendis deleniti quam obcaecati eligendi ipsa consequuntur fugit minus sint repellendus molestiae illum distinctio commodi enim et saepe minima tempora. Fugiat commodi numquam, itaque quas quae repellat enim, sequi corporis ratione, rem ad deserunt.
            </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas vel ratione, eos esse iure in, reiciendis deleniti quam obcaecati eligendi ipsa consequuntur fugit minus sint repellendus molestiae illum distinctio commodi enim et saepe minima tempora. Fugiat commodi numquam, itaque quas quae repellat enim, sequi corporis ratione, rem ad deserunt.
            </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Your favorite Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas vel ratione, eos esse iure in, reiciendis deleniti quam obcaecati eligendi ipsa consequuntur fugit minus sint.
            </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas vel ratione, eos esse iure in, reiciendis deleniti quam obcaecati eligendi ipsa consequuntur fugit minus sint repellendus molestiae illum distinctio commodi enim et saepe minima tempora.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;



