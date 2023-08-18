export interface IContent {
    id:number;
  icon: string;
  service: string;
  description: string;
}

const servicesList: IContent[] = [
  {
    id:1,
    icon: "/images/project-8.jpg",
    service: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptatibus!",
  },
  {
    id:2,
    icon: "/images/project-8.jpg",
    service: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptatibus!",
  },
  {
    id:3,
    icon: "/images/project-8.jpg",
    service: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptatibus!",
  },
  {
    id:4,
    icon: "/images/project-8.jpg",
    service: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptatibus!",
  },
];
export default servicesList;