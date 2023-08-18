import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import servicesList from "@/data/servicesList";

const Services: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId: any) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Layout>
      <div className="h-[1000px]">
        <Container>
          <header className="mt-28 px-10">
            <h1 className="text-4xl font-bold my-10">Our Services</h1>
            <p className="text-sm">
              Bright Future International Pvt. Ltd. is a service-oriented
              engineering consulting firm, equipped with resourceful
              professionals representing a broad spectrum of expertise. We have
              a vast resource of technical, managerial and support staff for
              successful conduct of its project. <span className="text-[green]">We provide an entire scope of
              consulting Services in various fields.</span>
            </p>
          </header>
          <section className="h-[800px] bg-light shadow-xl mt-8 flex justify-center items-center">
            <div className="relative grid grid-cols-3 gap-6">
              {servicesList.map((item) => (
                <div
                  className=" w-80 h-80 relative mx-10 shadow-xl"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <img src={item.icon} alt="" />
                  <h1 className="text-center">{item.service}</h1>
                  <motion.div
                    className="w-full h-0 absolute bottom-0 overflow-hidden border-2 bg-light"
                    initial={false}
                    animate={{ height: hoveredItem === item.id ? "100%" : 0 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    <h1 className="text-center">{item.service}</h1>
                    <p>{item.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  );
};

export default Services;
