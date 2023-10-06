"use client";
import {
  AccordionSummary,
  Avatar,
  useTheme,
  Accordion,
  AccordionDetails,
  Typography,
  alpha,
  Box,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import { blue, red } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BasicModal from "./modal";
import FolderList from "./modal";

const AccordianList = ({ title, subTitle, component }) => {
  const [accordianExpanded, setAccordianExpanded] = React.useState(false);
  return (
   <>
    <Accordion
      disableGutters
      sx={{
        marginTop: "20px",
        borderRadius: "5px",
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "20px",
          //   backgroundColor: red,
          //   theme.palette.mode === "dark"
          //     ? theme.palette.grey[700]
          //     : alpha(theme.palette.primary.main, 0.12),
          borderRadius: "5px",
        }}
        aria-controls="panel1d-content"
        id="panel1d-header"
        expandIcon={
          <Avatar
            sx={{
              width: "24px",
              height: "24px",
              border: "1px solid gray",
              backgroundColor: "#fff",
              color: "gray",
              //   backgroundColor: theme.palette.primary.main,
            }}
          >
            {accordianExpanded ? (
              // <ArrowDropUpIcon sx={{ color: theme.palette.grey[0] }} />
              <KeyboardArrowUpIcon />
            ) : (
              // <ArrowDropDownIcon sx={{ color: theme.palette.grey[0] }} />
              <KeyboardArrowDownIcon />
            )}
          </Avatar>
        }
      >
        <Box>
          <Typography
            // variant="subtitle1"
            // className="title"
            sx={{
              padding: "0px 15px",
              fontSize: "20px",
              fontWeight: 600,
              //   color:
              //     theme.palette.mode === "dark"
              //       ? theme.palette.grey[500]
              //       : theme.palette.grey[700],
            }}
          >
            {/* {title} */}
            Basic Information
          </Typography>
          <Typography
             //variant="subtitle1"
            // className="title"
            sx={{
              padding: "0px 15px",
              fontSize: "14px",
              //   color:
              //     theme.palette.mode === "dark"
              //       ? theme.palette.grey[500]
              //       : theme.palette.grey[700],
            }}
          >
            {/* {subTitle} */}
            (Fields cannot be moved into or outside of this group)
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        {/* {component} */}
        {/* <BasicModal/> */}
       
      </AccordionDetails>
     
    </Accordion>
    <FolderList/>
   </>
  );
};

export default AccordianList;
