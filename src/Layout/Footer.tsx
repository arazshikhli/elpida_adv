import { Box, Typography, Link } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333", // Цвет фона футера
        color: "#fff", // Цвет текста
        padding: "20px",
        textAlign: "center",
        marginTop: "auto", // Для фиксации футера внизу страницы
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} Elpida Advertising
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WhatsAppIcon sx={{ fill: "green", marginLeft: "20px" }} /> +994 55
            344 15 51
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WhatsAppIcon sx={{ color: "green", marginLeft: "20px" }} /> +994 77
            416 63 17
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon
              sx={{ fill: "green", marginLeft: "20px", marginRight: "10px" }}
            />
            arazaraz777@gmail.com
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon
              sx={{ fill: "green", marginLeft: "20px", marginRight: "10px" }}
            />
            info_elpida_adv@mail.ru
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Link href="#" color="inherit" underline="hover">
          <InstagramIcon
            sx={{
              width: "100px",
              transition: "all 0.7s",
              "&:hover": {
                fill: "red",
              },
            }}
          />
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <FacebookIcon
            sx={{
              width: "100px",
              transition: "all 0.7s",
              "&:hover": {
                fill: "blue",
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};
