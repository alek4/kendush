import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <div className="h-screen bg-slate-600">
      <Wrapper className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8 md:mb-auto">
          <h1>FELPE E T-SHIT</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            nemo optio in reprehenderit labore cum est obcaecati iusto quod
            placeat perspiciatis corporis animi, ipsam molestiae delectus ea!
            Ipsa, quasi sapiente.
          </p>
        </div>
        <GridProducts></GridProducts>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}
