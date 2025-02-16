"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { chatSession } from "@/utils/GeminiAIModal";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Question } from "@/utils/schema";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const AddQuestions = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [typeQuestion, setTypeQuestion] = useState("");
  const [company, setCompany] = useState("");
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt = `
    Job Positions: ${jobPosition},
    Job Description: ${jobDesc},
    Years of Experience: ${jobExperience},
    Which type of question: ${typeQuestion},
    This company previous question: ${company},
    Based on this information, please provide 10 interview questions with answers in JSON format.
  `;

    try {
      const result = await chatSession.sendMessage(InputPrompt);
      const MockQuestionJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "")
        .trim();

      if (MockQuestionJsonResp) {
        const resp = await db.insert(Question).values({
          mockId: uuidv4(),
          MockQuestionJsonResp,
          jobPosition,
          jobDesc,
          jobExperience,
          typeQuestion,
          company,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        }).returning({ mockId: Question.mockId });

        if (resp) {
          setOpenDialog(false);
          router.push("/dashboard/pyq/" + resp[0]?.mockId);
        }
      }
    } catch (error) {
      console.error("Failed to parse JSON:", error.message);
      alert("There was an error processing the data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div
        className="p-10 rounded-lg border bg-secondary shadow-lg hover:shadow-2xl transition-all cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        
              <motion.a
                        href="/dashboard"
                        className="px-8 py-4 text-xl font-semibold  text-indigo-700"
                        whileHover={{ 
                          scale: 1.05,
                          
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                      + Add New Question
              </motion.a>
      </div>

      <Dialog open={openDailog}>
        <DialogContent className="rounded-xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-bold">What model questions are you seeking?</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit} className="space-y-4">
                <Input value={jobPosition} placeholder="Job Position" onChange={handleInputChange(setJobPosition)} required />
                <Textarea value={jobDesc} placeholder="Job Description" onChange={handleInputChange(setJobDesc)} required />
                <Input value={typeQuestion} placeholder="Type of Questions" onChange={handleInputChange(setTypeQuestion)} required />
                <Input value={company} placeholder="Company" onChange={handleInputChange(setCompany)} required />
                <Input value={jobExperience} type="number" placeholder="Years of Experience" onChange={handleInputChange(setJobExperience)} required />
                <div className="flex justify-end gap-4">
                  <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <LoaderCircle className="animate-spin" /> : "Generate Questions"}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default AddQuestions;
