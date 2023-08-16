import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import projectList from "@/data/projectList";
import Link from "next/link";
import Container from "@/components/layout/Container";
const Projects: React.FC = () => {
  const [selectStatus, setSelectStatus] = useState("all");
  const updateSelectStatus = (newStatus: string) => {
    setSelectStatus(newStatus);
  };
  const filterProject = projectList.filter((item) => {
    if (selectStatus === "all") {
      return true;
    } else {
      return item.status === selectStatus;
    }
  });

  return (
    <Layout>
      <div className="h-[1200px] w-full bg-primary">
        <Container>
          <div className="flex flex-col gap-10 pt-[6rem]">
        <div className="ml-10">
          <label
            htmlFor="statusFilter"
            className="block font-bold mb-2 text-2xl text-white"
          >
            Filter by Status:
          </label>
          <select
            id="statusFilter"
            className="px-4 py-2 border rounded"
            onChange={(e) => updateSelectStatus(e.target.value)}
            value={selectStatus}
          >
            <option value="all">All</option>
            <option value="RUNNING">Running</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {filterProject.map((item) => (
            <Link key={item.id} href={`/projectDescription/${item.id}`}>
              <div
                key={item.id}
                className=" bg-white h-[400px] w-[300px] flex flex-col justify-start items-start shadow-xl mx-10 rounded-tl-lg rounded-b-lg overflow-hidden"
              >
                <img src={item.image_1} alt="" />
                <div className="ml-5">
                <div
                  className={`border-2 border-primary w-2/4 rounded-xl text-center my-5 ${
                    item.status === "RUNNING"
                      ? "text-[#ADE792]"
                      : item.status === "COMPLETED"
                      ? "text-[#F34573]"
                      : ""
                  }`}
                >
                  {item.status}
                </div>
                <h1 className="text-xl font-semibold">{item.heading}</h1>
                <p className="truncate w-64 text-lg">{item.description_1}</p>
              </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Projects;
