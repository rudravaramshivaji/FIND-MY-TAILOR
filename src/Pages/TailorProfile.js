import { useParams } from "react-router-dom";
import { Navbar, Graph ,Boxes} from "../components";

export default function TailorProfile() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <Boxes/>
      <Graph />
    </>
  );
}
