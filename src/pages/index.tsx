import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const Home: React.FC = () => {
  return (
    <AppLayout name="home">
      <SalesPageSection />
    </AppLayout>
  );
};

export default Home;
