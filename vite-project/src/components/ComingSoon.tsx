import { Construction, Rocket, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        {/* Animated Construction Icon */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="mb-4"
        >
          <Construction className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto" />
        </motion.div>

        {/* Floating Tools */}
        <div className="relative h-20 mb-8">
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute left-1/4"
          >
            <Wand2 className="h-8 w-8 text-yellow-500" />
          </motion.div>
          
          <motion.div
            animate={{
              x: [0, -15, 15, 0],
              y: [0, 10, -10, 0],
              rotate: [0, -25, 25, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute right-1/4"
          >
            <Rocket className="h-8 w-8 text-blue-500" />
          </motion.div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We're cooking up something great. This feature/page is under construction. Stay tuned!
        </p>
        <Button asChild className="px-6 py-5 h-auto text-2xl font-semibold text-blue-500 bg-[#FFDF20] hover:bg-yellow-400 transition-colors rounded-none">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;