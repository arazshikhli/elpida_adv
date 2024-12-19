import { Box, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, DialogContent,Grid2 } from "@mui/material";
import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { sliderData } from "./assets/sliderData";
import "../style.css";
import hommeStand from "./assets/homme-stand.jpeg";
import madoStand from "./assets/mado-stand.jpeg";
import socarStand from "./assets/socar-stand.jpeg";
import homme from "./assets/homme.png";
import mado from "./assets/mado.png";
import socar from "./assets/socar.png";
import './style.css'
import {galleryImages} from './assets/2/data'

interface IgalleryImage{
  imageUrl:string;
  alt:string
}
const images: IDialog[] = [
  { imageUrl: hommeStand, name: "homme" },
  { imageUrl: madoStand, name: "mado" },
  { imageUrl: socarStand, name: "socar" },
];
interface ISlide {
  imageUrl: string;
}
interface IDialog {
  imageUrl: string;
  name: "mado" | "socar" | "homme";
}
interface IDialogState {
  socar: boolean;
  homme: boolean;
  mado: boolean;
}
export const GalleryPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:600px) and (max-width:960px)"
  );
  const [openDialogs, setOpenDialogs] = useState<IDialogState>({
    socar: false,
    homme: false,
    mado: false,
  });

  // Функция для открытия диалога
  const handleOpenDialog = (dialogName: keyof IDialogState) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: true }));
  };

  // Функция для закрытия диалога
  const handleCloseDialog = (dialogName: keyof IDialogState) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: false }));
  };
  // Determine the number of slides to show based on screen size
  const slidesPerView = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        backgroundImage: "url('/gallery/bg-gallery.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box
        sx={{
          flex: 5,
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          justifyContent: "center", // Centers Swiper horizontally
          alignItems: "center", // Centers Swiper vertically
        }}
      >
        <Typography
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "30px",
            letterSpacing: "2px",
            fontWeight: "600",
            fontFamily: "Playwrite GB S, cursive",
          }}
        >
          İşlərimizdən
        </Typography>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay, Pagination, Navigation]}
          style={{
            width: "600px", // Adjust to control Swiper width
            height: "400px", // Adjust to control Swiper height
          }}
        >
          {sliderData &&
            sliderData.map((slideItem: ISlide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%", // Fill the SwiperSlide height
                  }}
                >
                  <img
                    className="imageClass"
                    src={slideItem.imageUrl}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }} // Adjust to fit the image
                  />
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          {images.map((image: IDialog) => {
            return (
              <img
                src={image.imageUrl}
                width={300}
                height={300}
                onClick={() => handleOpenDialog(image.name)}
                style={{ cursor: "pointer" }}
              />
            );
          })}
  
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <img src={homme} width={200} />
          <img src={mado} width={200} />
          <img src={socar} width={200} />

          <Dialog
            open={openDialogs.socar}
            onClose={() => handleCloseDialog("socar")}
            maxWidth="xl"
          >
            <DialogContent>
              <img
                src={socarStand}
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>
          <Dialog
            open={openDialogs.homme}
            onClose={() => handleCloseDialog("homme")}
            maxWidth="xl"
          >
            <DialogContent>
              <img
                src={hommeStand}
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>

          <Dialog
            open={openDialogs.mado}
            onClose={() => handleCloseDialog("mado")}
            maxWidth="xl"
          >
            <DialogContent>
              <img
                src={madoStand}
                alt="Full Screen"
                style={{ width: "100%", height: "calc(100vh - 100px)" }}
              />
            </DialogContent>
          </Dialog>
        </Box>
       <Box 
       
       sx={{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        textAlign:'center',
        minHeight:'300px',
        marginTop:'5px'
       }}>
        <Typography sx={{
          fontSize:'30px',
          letterSpacing:'3px',
          fontWeight:'800',
          fontFamily:'Poppins, sans-serif',
          marginTop:'10px'
        }}>DİGƏR İŞLƏRİMİZ:</Typography>
       <Grid2 
       container
       spacing={2}
       >
        {galleryImages.map((image:IgalleryImage)=>{
          return <Card 
          sx={{
            width:'300px'
          }}
          >
              <CardMedia
               component="img"
               height="194"
               image={image.imageUrl}
               alt="Paella dish"
              />
          </Card>
        })}
       </Grid2>
       </Box>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};
