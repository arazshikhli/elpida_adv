import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import bg from "../web/hosting.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import about1 from "./assets/1.png";
import about2 from "./assets/2.png";
import about3 from "./assets/3.png";
import about4 from "./assets/4.png";
import about5 from "./assets/5.png";
import about6 from "./assets/6.png";
const steps = [
  "Siz mütəxəssis ilə sorğu göndərirsiz",
  "Layihə ilə bağlı məlumatları toplayırıq",
  "Ofisinizə (məkanınıza) gələrək bütün lazımi ölçüləri alırıq",
  "Reklamınızın dizayn-maketini hazırlayıb Sizinlə təsdiqləyirik",
  "Maliyyə hesablanması və detalları hazırlayırıq",
  "Layihənin istehsalı, quraşdırılması",
];
export const AboutPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        backgroundImage: `url('${bg}')`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box
        sx={{
          flex: 6,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="white"
            sx={{
              marginTop: "20px",
              fontSize: {
                xs: "22px",
                md: "24px",
                lg: "28px",
                xl: "36px",
              },
            }}
          >
            Əlaqə
          </Typography>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WhatsAppIcon
              sx={{
                fill: "green",
                marginRight: "20px",
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            >
              {" "}
              +994 55 344 15 51
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WhatsAppIcon
              sx={{
                fill: "green",
                marginRight: "20px",
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            >
              +994 77 416 63 17
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EmailIcon
              sx={{
                fill: "green",
                marginRight: "20px",
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            >
              arazaraz777@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EmailIcon
              sx={{
                fill: "green",
                marginRight: "20px",
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "22px",
                  lg: "24px",
                  xl: "30px",
                },
              }}
            >
              info_elpida_adv@mail.ru
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              xl: "50%",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginTop: "20px",
              fontSize: {
                xs: "16px",
                md: "18px",
                lg: "20px",
                xl: "22px",
              },
            }}
          >
            “Elpida Advertising” reklam şirkəti Azərbaycanda reklam istehsalı və
            quraşdırılması üzrə öz xidmətlərini təklif edir. Vizual reklamın
            hazırlanması və quraşdırılması ilə bağlı bütün fəaliyyət növləri
            üzrə ixtisaslaşmışıq.
          </Typography>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          mt={"40px"}
        >
          <Box
            sx={{
              width: "50%", // Длина линии
              height: "5px", // Толщина линии
              backgroundColor: "white", // Цвет линии
              margin: "10px auto", // Центрирование и вертикальные отступы
            }}
          />
          <Typography
            sx={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Vizual reklamın üstünlükləri
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Məhsulların işlənilməsi və irəli sürülməsi düşünülmüş reklam
            kampaniyasız mümkün deyil. Ətraf mühitdən gələn məlumatın 90 %
            insanlar vizual kanal vasitəsi ilə mənimsədiklərinə görə, vizual
            reklam haqla istehlakçıların diqqətinin cəlb edilməsinin və
            saxlanılmasının ən effektiv vasitəsi sayılır.
          </Typography>
          <Box
            sx={{
              width: "50%", // Длина линии
              height: "5px", // Толщина линии
              backgroundColor: "white", // Цвет линии
              margin: "10px auto", // Центрирование и вертикальные отступы
            }}
          />
          <Typography
            sx={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Elpida Advertising reklam şirkətinin üstünlükləri
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about6}
                srcSet={about6}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Xüsusi istehsal istənilən növ reklam konsturkiyalarını
                  hazırlamağa imkan verir, o cümlədən mürəkkəb və fərdi
                  layihələri.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about5}
                srcSet={about5}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Çevik qiymət siyasəti. Bizim şirkətimizin öz yeri, nəqliyyatı
                  və istehsalatı var. Bunun nəticəsi kimi, biz qiymətdə həmişə
                  endirim edə bilirik.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about2}
                srcSet={about2}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Öz səyyar montaj briqadamız bütün quraşdırma işlərini və
                  reklam konstruksiyaların xidmətini keyfiyyətlə yerinə yetirir.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about4}
                srcSet={about4}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Biz istehsal etdiyimiz reklam məhsullarımıza zəmanət veririk.
                  Bizim əməkdaşlarımız yüksək keyfiyyətli lövhələri istehsal
                  edirlər.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about3}
                srcSet={about3}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>Bakı ərazisində pulsuz çatdırılma.</Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={"150px"}
                src={about1}
                srcSet={about1}
                loading="lazy"
                alt=""
              />

              <CardContent>
                <Typography>
                  Reklam konstruksiyasının pulsuz dizaynı.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "100%", marginTop: "10px" }}>
            <Stepper activeStep={6} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel
                    // Conditionally render label text or icons based on screen size
                    icon={
                      isSmallScreen ? (
                        <Typography sx={{ fontSize: "12px", color: "white" }}>
                          {index + 1}
                        </Typography>
                      ) : undefined
                    }
                  >
                    {!isSmallScreen && (
                      <Typography sx={{ color: "white", fontSize: "14px" }}>
                        {label}
                      </Typography>
                    )}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};
