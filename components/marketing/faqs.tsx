import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
} from '../ui/card';

// REMINDER: we can create a contentlayer document and the faq into it
const faqsConfig: Record<'q' | 'a', string>[] = [
  {
    q: 'What is OverDocs?',
    a: 'Overdocs is a comprehensive guide to web development, offering a curated collection of the best resources from reputable sources.',
  },
  {
    q: 'Which technologies are covered?',
    a: 'Overdocs currently focuses on web development, offering a curated collection of resources for tools, tips, tutorials, and articles. However, we are exploring the possibility of expanding our coverage to include mobile development in the future.',
  },
  {
    q: 'Is the content up-to-date?',
    a: 'Yes, our content is regularly updated to keep you informed about the latest trends',
  },
  {
    q: 'Is Overdocs free to use?',
    a: 'Yes, Overdocs is free to use. However, premium features or services may be offered in the future to generate revenue and support the growth and development of Overdocs. ',
  },
];

export function FAQs() {
  return (
    <CardContainer>
      <CardHeader>
        <CardIcon icon='message-circle' />
        <CardTitle>FAQs</CardTitle>
        <CardDescription>What you want to know about Overdocs.</CardDescription>
      </CardHeader>
      <div>
        <Accordion type='single' collapsible className='w-full'>
          {faqsConfig.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>
                <div
                  className='text-muted-foreground'
                  dangerouslySetInnerHTML={{ __html: a }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </CardContainer>
  );
}
