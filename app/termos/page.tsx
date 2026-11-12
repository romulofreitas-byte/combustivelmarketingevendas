import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { brandName, company, legalUpdated, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Condições de uso do site ${brandName}, operado pela ${company.legalName}.`,
  alternates: { canonical: "/termos" }
};

export default function TermosPage() {
  return (
    <LegalDocument kicker="Termos" title="Termos de Uso" updated={legalUpdated}>
      <p>
        Estes termos valem para quem acessa {siteUrl.replace("https://", "")}. O site é operado pela{" "}
        {company.legalName}, CNPJ {company.cnpj}, em {company.city}, {company.state}, sob a marca {brandName}.
      </p>
      <h2>O que o site é</h2>
      <p>
        O conteúdo apresenta a assessoria comercial e convida a uma conversa. Não é proposta comercial fechada, não
        garante resultado de venda e não substitui um diagnóstico feito com os dados da indústria.
      </p>
      <h2>Textos e imagens</h2>
      <p>
        Textos, método, peças e fotografias deste site pertencem à {company.legalName}, salvo quando uma marca de
        cliente aparece como referência de trabalho. Essas marcas continuam de seus titulares. Não é permitido copiar,
        baixar para reutilizar, nem republicar o material sem autorização prévia.
      </p>
      <h2>Links externos</h2>
      <p>
        Instagram, YouTube, LinkedIn e WhatsApp abrem serviços de terceiros. O uso lá segue as regras de cada um.
      </p>
      <h2>Uso aceitável</h2>
      <p>
        Não é permitido usar o site para tentar invadi-lo, sobrecarregá-lo ou se passar pela {company.legalName}.
        Podemos alterar o conteúdo e estes termos quando o site mudar. A data no topo indica a versão vigente.
      </p>
    </LegalDocument>
  );
}
