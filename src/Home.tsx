import React from "react";
import "./Home.css";
import { Footer, Header } from "./components"
import { HomeRegister } from "./components/HomeRegister"
import { HomeHero } from "./components/HomeHero"
import { HomeAbout } from "./components/HomeAbout"
import { HomeFeatures } from "./components/HomeFeatures"
import { HomeMembers } from "./components/HomeMembers";
import { HomeGiving } from "./components/HomeGiving";
import { HomeAttendance } from "./components/HomeAttendance";
import { HomeExport } from "./components/HomeExport";
import { HomeTestimony } from "./components/HomeTestimony";

export const Home = () => {
    return (
        <>
            <Header />
            <HomeHero />
            <HomeAbout />
            <HomeFeatures />
            <HomeMembers />
            <HomeGiving />
            <HomeAttendance />
            <HomeExport />
            <HomeTestimony />

            <HomeRegister />
            <Footer />
        </>
    );
}
