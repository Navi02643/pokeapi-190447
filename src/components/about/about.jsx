import React from "react";
import NavBar from "../navbar/NavBar";
import { useTranslation } from "react-i18next";
import perfil from "../../assets/img/perfil.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Aboutme() {
  const { t } = useTranslation();
  return (
    <div className="bg-dark text-white p-5">
      <NavBar />
      <br />
      <Grid container direction="row" justifyContent="space-around">
        <Card style={{ margin: 25 }} sx={{ maxWidth: 350, maxHeight: 450 }}>
          <CardMedia component="img" height="75%" image={perfil} />
        </Card>
        <Card style={{ margin: 25 }} sx={{ maxWidth: 350, maxHeight: 450 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CARLOS IVAN MERCADO MARIN
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {t("info1")}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {t("info2")}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {t("info3")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Aboutme;
