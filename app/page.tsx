import { Canal } from "@/components/Canal";
import { Conversa } from "@/components/Conversa";
import { Criativos } from "@/components/Criativos";
import { Cta } from "@/components/Cta";
import { Diagnostico } from "@/components/Diagnostico";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Mapa } from "@/components/Mapa";
import { Metodo } from "@/components/Metodo";
import { Nav } from "@/components/Nav";
import { Ordem } from "@/components/Ordem";
import { Palestra } from "@/components/Palestra";
import { Proprietario } from "@/components/Proprietario";
import { Provas } from "@/components/Provas";
import { Ramos } from "@/components/Ramos";
import { SiteProvider } from "@/components/SiteProvider";
import { WhatsFloat } from "@/components/WhatsFloat";

export default function Page() {
  return (
    <SiteProvider>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Ordem />
        <Canal />
        <Mapa />
        <Metodo />
        <Palestra />
        <Ramos />
        <Criativos />
        <Diagnostico />
        <Conversa />
        <Proprietario />
        <Provas />
        <Cta />
      </main>
      <WhatsFloat />
    </SiteProvider>
  );
}
