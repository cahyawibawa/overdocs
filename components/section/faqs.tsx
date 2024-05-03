import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  CardContainer,
  CardDescription2,
  CardHeader,
  CardTitle3,
} from '../ui/card'

// REMINDER: we can create a contentlayer document and the faq into it
const faqsConfig: Record<'q' | 'a', string>[] = [
  {
    q: 'What technologies does Overdocs utilize?',
    a: 'Overdocs harnesses a powerful stack including Next.js 14, Drizzle, Neon, Lucia Auth, Resend, React Email, Shadcn/ui, and Stripe. These seamlessly integrated technologies accelerate your development and Saas journey.',
  },
  {
    q: 'How can Overdocs benefit my project?',
    a: 'Overdocs serves as a Saas boilerplates , empowering your project with a robust stack designed for efficiency and scalability. Whether you&apos;re a solo developer or a team, Overdocs streamlines your development process, allowing you to focus on building and launching your product with ease.',
  },
  {
    q: 'Is Overdocs suitable for beginners?',
    a: 'Absolutely! Overdocs is designed to cater to developers of all skill levels. With its user-friendly interface and comprehensive documentation, beginners can quickly get started and leverage its powerful features to kickstart their projects.',
  },
  {
    q: 'Can I customized the project?',
    a: 'Yes, Overdocs is highly customizable. Its modular design allows you to tailor it to your project&apos;s requirements seamlessly. Whether it&apos;s adjusting the UI components or integrating additional functionalities, Overdocs provides the flexibility you need to make it your own.. ',
  },
]

export function FAQs() {
  return (
    <CardContainer>
      <CardHeader>
        {/* <CardIcon icon="message-circle" /> */}
        <CardTitle3>FAQs</CardTitle3>
        <CardDescription2>
          What you want to know about Overdocs.
        </CardDescription2>
      </CardHeader>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqsConfig.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>
                <div
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: a }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </CardContainer>
  )
}
