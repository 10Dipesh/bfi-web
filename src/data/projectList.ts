import { __String } from "typescript";

export interface IContent {
  id: string;
  heading: string;
  image_1: string;
  status: string;
  description_1: string;
  image_2: string;
  description_2: string;
}

const projectList: IContent[] = [
  {
    id: "1",
    heading: "Project Khulekhani-1",
    image_1: "/images/image_6.jpg",
    status: 'COMPLETED',
    description_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
    image_2: "/images/image_3.jpg",
    description_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
  },
  {
    id: "2",
    heading: "Project Khulekhani-2",
    image_1: "/images/image_6.jpg",
    status: 'RUNNING',
    description_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
    image_2: "/images/image_3.jpg",
    description_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
  },
  {
    id: "3",
    heading: "Project Khulekhani-3",
    image_1: "/images/image_6.jpg",
    status: 'RUNNING',
    description_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit",
    image_2: "/images/image_3.jpg",
    description_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
  },
  {
    id: "4",
    heading: "Project Khulekhani-4",
    image_1: "/images/image_6.jpg",
    status: 'RUNNING',
    description_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
    image_2: "/images/image_3.jpg",
    description_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
  },
  {
    id: "5",
    heading: "Project Khulekhani-5",
    image_1: "/images/image_6.jpg",
    status: 'COMPLETED',
    description_1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
    image_2: "/images/image_3.jpg",
    description_2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem itaque saepe incidunt quae pariatur odit similique labore unde in inventore, excepturi doloribus qui tenetur veritatis! Quo perferendis natus sit.",
  },
];

export default projectList;
