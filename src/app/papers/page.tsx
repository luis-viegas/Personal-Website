import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  href,
}: {
  title: string
  description: string
  event: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Link download href={href} className="mt-4">
        Download
      </Card.Link>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Scientific Papers',
  description: 'Scientific Papers',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Scientific Papers"
      intro="Despite my industry-focused career, I have always maintained a deep passion for scientific investigation. Over the years, I’ve had the privilege of participating in international software conferences, where I’ve shared insights and engaged with researchers from around the world. This page showcases some of my scientific papers."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="/AST_2025.pdf"
            title="Acceptance Test Generation with Large Language
Models: An Industrial Case Study"
            description="This research explored the power of Large Language Models (LLMs) in automating acceptance testing for web applications. We developed a two-step approach: AutoUAT generates Gherkin-based test scenarios from user stories, while Test Flow converts these scenarios into executable Cypress scripts. Integrated into an industrial setting, these tools improved test coverage, reduced manual effort, and enhanced software quality. With a 95% user approval for AutoUAT and a 92% accuracy rate for Test Flow, our study highlights the potential of AI-driven testing in agile development."
            event="2025 IEEE/ACM International Conference on Automation of Software Test (AST)"
          />
          <Appearance
            href="/GTCorpus_DS23_Paper.pdf"
            title="Decomposing Complex Text Classification Tasks
through Error Analysis: A Study on
Genocide-related Court Hearings"
            description="This study explored the challenges of classifying legal transcripts from genocide-related court hearings using Natural Language Processing (NLP). By analyzing errors in existing models, we uncover the limitations of traditional Transformer-based approaches and demonstrate how targeted pretraining can enhance classification accuracy. Our research identifies key linguistic and contextual challenges in the Genocide Transcript Corpus (GTC) and proposes novel solutions, ultimately improving state-of-the-art results. This work bridges the gap between legal text analysis and modern NLP methodologies, offering insights into better model selection and fine-tuning strategies."
            event="Discovery Science 2023"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
