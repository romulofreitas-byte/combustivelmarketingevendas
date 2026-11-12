import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { brandName, company, legalUpdated } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${company.legalName} trata dados de quem visita o site ${brandName}.`,
  alternates: { canonical: "/privacidade" }
};

export default function PrivacidadePage() {
  return (
    <LegalDocument kicker="Privacidade" title="Política de Privacidade" updated={legalUpdated}>
      <p>
        Esta política descreve o que acontece com informações de quem visita o site {brandName}, uma vertente da{" "}
        {company.legalName}, CNPJ {company.cnpj}, com sede em {company.city}, {company.state}.
      </p>
      <h2>O que este site faz</h2>
      <p>
        A página é institucional. Não há cadastro, conta, formulário nem área de login. O diagnóstico comercial é
        calculado no próprio navegador e não é enviado a um servidor nosso.
      </p>
      <h2>WhatsApp</h2>
      <p>
        O contato sai do site quando a pessoa escolhe chamar no WhatsApp. A mensagem pronta pode incluir o resultado
        do diagnóstico e a frente mais fraca, dados que ela mesma gerou na página. A conversa segue no WhatsApp, sob
        as regras da Meta, e não fica armazenada neste site.
      </p>
      <h2>Cookies e medição</h2>
      <p>
        Este site não usa cookie de publicidade, pixel, Google Analytics nem outra ferramenta de rastreamento. Por
        isso não há banner de aceite. Se isso mudar, esta política será atualizada antes.
      </p>
      <p>
        A hospedagem pode registrar acessos técnicos, como endereço IP, data, hora e navegador, para manter a página
        no ar e protegê-la. Esses registros não são usados para montar perfil de anúncio.
      </p>
      <h2>Direitos</h2>
      <p>
        A pessoa pode pedir confirmação, acesso, correção ou eliminação de dados pessoais ligados a ela, e pode se
        opor a um uso indevido. O canal é o mesmo WhatsApp indicado no site. O pedido deve permitir identificar a
        conversa ou o acesso a que se refere.
      </p>
      <h2>Crianças</h2>
      <p>O site fala com indústrias e profissionais. Não é dirigido a crianças.</p>
    </LegalDocument>
  );
}
