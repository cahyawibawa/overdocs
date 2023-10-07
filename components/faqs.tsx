import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// REMINDER: we can create a contentlayer document and the faq into it
const faqsConfig: Record<'q' | 'a', string>[] = [
  {
    q: 'What is OverDocs?',
    a: '<strong>OverDocs</strong> is an Indonesian frontend documentation hub',
  },
  {
    q: 'Which technologies are covered?',
    a: 'OverDocs focuses on popular frontend technologies like  NextJs 13, Vite, and Astro.',
  },
  {
    q: 'Is the content up-to-date?',
    a: 'Yes, our content is regularly updated to keep you informed about the latest trends',
  },
  {
    q: 'How can I help?',
    a: "We're always looking for new contributors!😉. You can star our project on <a href='https://github.com/openstatusHQ/openstatus'>GitHub</a>, or contribute to it. ",
  },
];

export function FAQs() {
  return (
    <div className='grid gap-1'>
      <h2 className='text-foreground font-cal text-center text-2xl'>FAQ</h2>
      <Accordion type='single' collapsible className='w-full'>
        {faqsConfig.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>
              <div
                className='prose prose-sm'
                dangerouslySetInnerHTML={{ __html: a }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
