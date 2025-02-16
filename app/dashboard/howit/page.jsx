import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/ModeToggle";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>How It Works - AI Mock Interview</title>
        <meta
          name="description"
          content="Learn how our AI Mock Interview works."
        />
      </Head>
      <main className="p-8 mt-10 text-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center w-full">How It Works</h1>
          
        </div>
        <section className="space-y-8 max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 1: Prepare for the Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <h1>
                  Begin by selecting the type of interview and providing key details
                  about the job position. This helps customize your interview experience.
                </h1>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 2: Start the AI Interview
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Our AI will ask you a series of questions tailored to your job role and
                  experience. Answer in real-time and receive instant analysis.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 3: Receive Feedback
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  After completing the interview, you'll receive a detailed performance
                  report. This includes strengths, areas of improvement, and personalized tips.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Step 4: Improve and Retry
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Use the feedback to refine your answers and enhance your interview
                  skills. You can retake the interview as many times as needed.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;
