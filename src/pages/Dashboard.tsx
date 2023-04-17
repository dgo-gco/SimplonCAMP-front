import React from "react";
import { CampingDetails } from "../components/CampingDashboard/CampingDetails";
import { CampingInput } from "../components/CampingInput";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex bg-red-50 gap-9 ">
        <CampingInput />
        <CampingDetails />
      </div>
    </>
  );
};
