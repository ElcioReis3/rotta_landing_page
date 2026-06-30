import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ListFaqs } from "../data/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <Badge variant="navy" className="mb-4">
            Dúvidas frequentes
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Perguntas que você pode estar se fazendo
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {ListFaqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
