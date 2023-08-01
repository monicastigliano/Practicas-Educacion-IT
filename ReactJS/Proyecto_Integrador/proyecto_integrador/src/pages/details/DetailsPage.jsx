import { useParams } from "react-router-dom";

import { NavBar, ItemDetails } from "../../components";
import { BackButton, AddToCartButton } from "../../components/buttons";

const itemsMock = [
  {
    id: 1,
    image: "/Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg",
    title: "Anteojos 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 1500,
  },
  {
    id: 2,
    image: "/Fotos/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg",
    title: "Anteojos 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 5500,
  },
  {
    id: 3,
    image: "/Fotos/Anteojos/noah-black-1p3N5SHz0Hk-unsplash.jpg",
    title: "Anteojos 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 1000,
  },
];

export default function DetailsPage() {
  const { id } = useParams();

  const item = itemsMock.find((item) => item.id == id);

  return (
    <div>
      <NavBar />

      <BackButton />

      <main>
        <ItemDetails item={item} />

        <AddToCartButton />
      </main>
    </div>
  );
}
