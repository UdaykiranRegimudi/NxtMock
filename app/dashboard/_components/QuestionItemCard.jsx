import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const QuestionItemCard = ({ question }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/pyq/" + question?.mockId);
  };
  return (
      <motion.div
                className={`bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-8 shadow-xl transform-gpu`}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 10,
                  boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
      <h2 className="font-bold text-primary">{question?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">
        {question?.jobExperience} Years of experience
      </h2>
      <h2 className="text-xs text-gray-400">Created At:{question.createdAt}</h2>

      <div className="flex justify-between mt-2 gap-5 ">
        <motion.a onClick={onStart} size="sm"  className="px-8 py-2 text-lg font-semibold border bg-transparent border-indigo-400 text-indigo-700 rounded-lg cursor-pointer"  whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(199, 210, 254, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}>Start</motion.a>
      </div>
    </motion.div>
  );
};

export default QuestionItemCard;
