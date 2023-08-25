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
      <div className="h-auto w-full bg-light">
        <Container>
          <div className="flex flex-col gap-10 pt-[6rem] mx-14">
        <div>
          <label
            htmlFor="statusFilter"
            className="block font-bold mb-2 text-2xl text-black"
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
        <div className="grid md:grid-cols-4 gap-9 mb-9">
          {filterProject.map((item) => (
            <Link key={item.id} href={`/projectDescription/${item.id}`}>
              <div
                key={item.id}
                className=" bg-white md:h-[400px] w-[300px]flex-col justify-start items-start shadow-xl rounded-tl-lg rounded-b-lg overflow-hidden"
              >
                <img src={item.image_1} alt="" className="hidden md:block"/>
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
                <p className="truncate w-64 text-sm">{item.description_1}</p>
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
