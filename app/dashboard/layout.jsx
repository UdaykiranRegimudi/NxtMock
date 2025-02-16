"use client";
import React from "react";
import Header from "./_components/Header";
import logo from "../../public/logo.svg";
import { createContext, useState } from "react";
import { motion } from "framer-motion";
export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  return (
       <motion.section 
                className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 px-6 md:px-0 relative"
                style={{
                  backgroundPosition: `50% ${scrollY * 0.5}px`,
                  minHeight:"100vh",
                  backgroundSize:"cover"
                }}
              >
        <Header logo={logo} />
        <div className="mx-5 md:mx-20 lg:mx-36">
          <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
            {children}
          </WebCamContext.Provider>
        </div>
        </motion.section>
  );
};

export default DashboardLayout;
