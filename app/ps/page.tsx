import React, { ReactElement } from "react";
import Navbar from "../components/Navbar";
import PS from "./ps";
import Footer from "../components/footer/footer";


function index(): ReactElement {
    return (
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <PS/>
            <Footer/>
        </div>
    )
}
export default index;