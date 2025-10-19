import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { type FAQItem } from "@/types/content";

type FAQAccordionProps = {
  faqs: FAQItem[];
  type?: "single" | "multiple";
};

export function FAQAccordion({ faqs, type = "single" }: FAQAccordionProps) {
  return (
    <Accordion type={type} className="w-full space-y-2">
      {faqs.map((faq, index) => (
        <AccordionItem value={faq.slug ?? `faq-${index}`} key={faq.slug ?? index}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

