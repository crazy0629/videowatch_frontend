import React from "react";
import { AppLayout } from "@/layouts";
import { MainPageSection } from "@/modules/main";

const Home: React.FC = () => {
  return (
    <AppLayout name="home">
      <MainPageSection />
    </AppLayout>
  );
};

export default Home;
