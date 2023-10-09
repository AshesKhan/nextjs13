// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button
//         onClick={handleOpen}
//         sx={{ border: "1px solid green", mr: "5px", color: "green" }}
//       >
//         Open modal
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Alert
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Are you sure you want to delete Criteria?
//           </Typography>
//           <Box sx={{ mt: "10px" }}>
//             <Button
//               sx={{ border: "1px solid green", mr: "5px", color: "green" }}
//             >
//               Cancel
//             </Button>
//             <Button sx={{ border: "1px solid red", color: "red" }}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////
"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Badge, Box, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js
import Profile from "../../../public/vercel.svg";
import Image from "next/image";

// interface ListItemData {
//   icon: JSX.Element;
//   primaryText: string;
//   secondaryText: string;
//   link: string; // Add a 'link' property for the destination URL
// }

const items = [
  {
    icon: Profile,
    primaryText: "Hannah Montana",
    secondaryText: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    link: "/login",
    date: "Feb 15, 2023",
    badgeContents: "2",
  },
  {
    icon: <WorkIcon />,
    primaryText: "Mickey",
    secondaryText: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    link: "/work",
    date: "Feb 15, 2020",
    badgeContents: "10",
  },
  {
    icon: <BeachAccessIcon />,
    primaryText: "Vacation",
    secondaryText: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    link: "/vacation",
    date: "Feb 15, 2022",
    badgeContents: "1",
  },
];

export default function FolderList() {
  return (
    <Box>
      {items.map((item, index) => (
        <List key={index} sx={{ bgcolor: "background.paper" }}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={item.link}
          >
            <Card
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                padding:"10px",
              }}
              sx={{mb:2,}}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  {/* <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        alt="profile"
                      /> */}
                  <Avatar
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                    // width={100}
                    // height={100}
                    sx={{ width: 50, height: 50 }}
                    alt="profile"
                  />
                  <Box>
                    <Typography>{item.primaryText}</Typography>
                    <Typography>{item.secondaryText}</Typography>
                  </Box>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Badge
                    badgeContent={item.badgeContents}
                    color="primary"
                    sx={{ float: "right" }}
                  ></Badge>

                  <Typography sx={{ mt: "10px" }}>{item.date}</Typography>
                </Box>
              </Box>
            </Card>
          </Link>
        </List>
      ))}
    </Box>
  );
}
