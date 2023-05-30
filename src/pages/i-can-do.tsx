import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Product, categories, Categories } from "@/utils/ProductType";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";

export default function ICanDo({ category }: any) {
  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
        <div className="mb-20 md:mb-auto text-zinc-900">
          <h1 className="text-6xl font-bold mb-5">FELPE & T-SHIRT</h1>
          <p className="text-2xl mb-10">
            In occasione della nostra nuova collaborazione con la Onlus Italiana
            Solidarietà Pace e Sviluppo (SPS) abbiamo creato la nuova linea I
            CAN DO T-shirt/felpe. Parte del ricavato sarà devoluto ai progetti
            di sostegno sanitario e scolastico in favore dei quaranta bambini
            che vivono presso l’associazione beninese Ensemble pour Grandir
            (Ouidah-Benin-Africa occidentale). La Onlus Solidarietà Pace e
            Sviluppo segue e finanzia i progetti umanitari di Ensemble pour
            Grandir dal 2014.
          </p>
          <div className="flex flex-col gap-5 md:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/clothes"
            >
              T-SHIRT & FELPE
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/accessories"
            >
              ACCESSORI
            </NextLink>
          </div>
        </div>
        <GridProducts category={"icando"}></GridProducts>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}
