import React from "react";
import NavBar from "../navbar/NavBar";
import { useTranslation } from "react-i18next";

function Aboutme() {
  const { t } = useTranslation();
  return (
    <div className="bg-dark text-white p-5">
      <NavBar />
      <br />
      <h5>CARLOS IVAN MERCADO MARIN</h5>
      <p>{t("info1")}</p>
      <p>{t("info2")}</p>
      <p>{t("info3")}</p>
    </div>
  );
}

export default Aboutme;
