import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";

const questions = [
  {
    questionText:
      "Which enzyme is responsible for unwinding the DNA helix during replication?",
    answerOptions: [
      { answerText: "DNA polymerase", isCorrect: false },
      { answerText: "Helicase", isCorrect: true },
      { answerText: "Ligase", isCorrect: false },
      { answerText: "Topoisomerase", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which organelle is responsible for the synthesis of ribosomal RNA?",
    answerOptions: [
      { answerText: "Mitochondria", isCorrect: false },
      { answerText: "Golgi apparatus", isCorrect: false },
      { answerText: "Nucleolus", isCorrect: true },
      { answerText: "Rough Endoplasmic Reticulum", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which process in cellular respiration directly produces the most ATP?",
    answerOptions: [
      { answerText: "Glycolysis", isCorrect: false },
      { answerText: "Krebs cycle", isCorrect: false },
      { answerText: "Electron transport chain", isCorrect: true },
      { answerText: "Fermentation", isCorrect: false },
    ],
  },
  {
    questionText: "What is the primary function of the myelin sheath?",
    answerOptions: [
      { answerText: "Transmit electrical impulses", isCorrect: false },
      { answerText: "Protect neurons from damage", isCorrect: false },
      { answerText: "Increase the speed of nerve impulses", isCorrect: true },
      { answerText: "Produce neurotransmitters", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is NOT a function of the smooth endoplasmic reticulum?",
    answerOptions: [
      { answerText: "Detoxification", isCorrect: false },
      { answerText: "Lipid synthesis", isCorrect: false },
      { answerText: "Calcium storage", isCorrect: false },
      { answerText: "Protein synthesis", isCorrect: true },
    ],
  },
  {
    questionText:
      "Which molecule serves as the final electron acceptor in the electron transport chain?",
    answerOptions: [
      { answerText: "NADH", isCorrect: false },
      { answerText: "FADH2", isCorrect: false },
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "ATP", isCorrect: false },
    ],
  },
  {
    questionText: "Which part of the brain regulates balance and coordination?",
    answerOptions: [
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: true },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Thalamus", isCorrect: false },
    ],
  },
  {
    questionText: "What is the primary function of tRNA in protein synthesis?",
    answerOptions: [
      { answerText: "Transcribes DNA into mRNA", isCorrect: false },
      { answerText: "Transports amino acids to ribosomes", isCorrect: true },
      { answerText: "Catalyzes peptide bond formation", isCorrect: false },
      { answerText: "Regulates translation", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which phase of mitosis is characterized by chromosome alignment at the cell equator?",
    answerOptions: [
      { answerText: "Prophase", isCorrect: false },
      { answerText: "Metaphase", isCorrect: true },
      { answerText: "Anaphase", isCorrect: false },
      { answerText: "Telophase", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which part of the kidney is responsible for filtration of blood?",
    answerOptions: [
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Collecting duct", isCorrect: false },
      { answerText: "Glomerulus", isCorrect: true },
      { answerText: "Distal tubule", isCorrect: false },
    ],
  },
  {
    questionText: "What type of bond holds the two strands of DNA together?",
    answerOptions: [
      { answerText: "Ionic bond", isCorrect: false },
      { answerText: "Covalent bond", isCorrect: false },
      { answerText: "Hydrogen bond", isCorrect: true },
      { answerText: "Peptide bond", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is an example of a prion disease?",
    answerOptions: [
      { answerText: "Tuberculosis", isCorrect: false },
      { answerText: "Creutzfeldt-Jakob disease", isCorrect: true },
      { answerText: "Influenza", isCorrect: false },
      { answerText: "Hepatitis B", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following hormones is secreted by the anterior pituitary?",
    answerOptions: [
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "Growth hormone", isCorrect: true },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Glucagon", isCorrect: false },
    ],
  },
  {
    questionText: "What is the function of the enzyme telomerase?",
    answerOptions: [
      { answerText: "Repairs mismatched DNA", isCorrect: false },
      { answerText: "Elongates telomeres in dividing cells", isCorrect: true },
      { answerText: "Prevents mRNA degradation", isCorrect: false },
      { answerText: "Synthesizes ribosomal RNA", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following neurotransmitters is primarily inhibitory in the central nervous system?",
    answerOptions: [
      { answerText: "Glutamate", isCorrect: false },
      { answerText: "Dopamine", isCorrect: false },
      { answerText: "GABA", isCorrect: true },
      { answerText: "Acetylcholine", isCorrect: false },
    ],
  },
  {
    questionText: "Which organ is responsible for producing bile?",
    answerOptions: [
      { answerText: "Pancreas", isCorrect: false },
      { answerText: "Liver", isCorrect: true },
      { answerText: "Gallbladder", isCorrect: false },
      { answerText: "Small intestine", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is NOT a component of the innate immune system?",
    answerOptions: [
      { answerText: "Natural killer cells", isCorrect: false },
      { answerText: "T cells", isCorrect: true },
      { answerText: "Macrophages", isCorrect: false },
      { answerText: "Complement proteins", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is responsible for the dark reactions in photosynthesis?",
    answerOptions: [
      { answerText: "Photosystem I", isCorrect: false },
      { answerText: "Calvin cycle", isCorrect: true },
      { answerText: "Electron transport chain", isCorrect: false },
      { answerText: "Cyclic phosphorylation", isCorrect: false },
    ],
  },
  {
    questionText: "Which blood vessel carries oxygenated blood to the heart?",
    answerOptions: [
      { answerText: "Pulmonary vein", isCorrect: true },
      { answerText: "Pulmonary artery", isCorrect: false },
      { answerText: "Superior vena cava", isCorrect: false },
      { answerText: "Aorta", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which structure in the nephron is primarily responsible for reabsorption?",
    answerOptions: [
      { answerText: "Glomerulus", isCorrect: false },
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Proximal convoluted tubule", isCorrect: true },
      { answerText: "Collecting duct", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a function of the hypothalamus?",
    answerOptions: [
      { answerText: "Regulating body temperature", isCorrect: true },
      { answerText: "Controlling voluntary movement", isCorrect: false },
      { answerText: "Producing cerebrospinal fluid", isCorrect: false },
      { answerText: "Initiating reflex actions", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which organelle contains hydrolytic enzymes for intracellular digestion?",
    answerOptions: [
      { answerText: "Golgi apparatus", isCorrect: false },
      { answerText: "Lysosome", isCorrect: true },
      { answerText: "Peroxisome", isCorrect: false },
      { answerText: "Smooth endoplasmic reticulum", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is NOT a characteristic of prokaryotic cells?",
    answerOptions: [
      { answerText: "Presence of a nucleus", isCorrect: true },
      { answerText: "Lack of membrane-bound organelles", isCorrect: false },
      { answerText: "Circular DNA", isCorrect: false },
      {
        answerText: "Binary fission as a method of reproduction",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Which of the following macromolecules serves as the primary energy source for cells?",
    answerOptions: [
      { answerText: "Proteins", isCorrect: false },
      { answerText: "Lipids", isCorrect: false },
      { answerText: "Carbohydrates", isCorrect: true },
      { answerText: "Nucleic acids", isCorrect: false },
    ],
  },
  {
    questionText: "Which type of mutation results in a premature stop codon?",
    answerOptions: [
      { answerText: "Missense mutation", isCorrect: false },
      { answerText: "Nonsense mutation", isCorrect: true },
      { answerText: "Silent mutation", isCorrect: false },
      { answerText: "Frameshift mutation", isCorrect: false },
    ],
  },
  {
    questionText: "Which hormone stimulates red blood cell production?",
    answerOptions: [
      { answerText: "Erythropoietin", isCorrect: true },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main function of surfactant in the lungs?",
    answerOptions: [
      { answerText: "Transport oxygen", isCorrect: false },
      { answerText: "Reduce surface tension in alveoli", isCorrect: true },
      { answerText: "Remove carbon dioxide", isCorrect: false },
      { answerText: "Increase mucus production", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which type of immune cell is responsible for producing antibodies?",
    answerOptions: [
      { answerText: "T cells", isCorrect: false },
      { answerText: "B cells", isCorrect: true },
      { answerText: "Macrophages", isCorrect: false },
      { answerText: "Natural killer cells", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is a characteristic of a k-selected species?",
    answerOptions: [
      { answerText: "High reproductive rate", isCorrect: false },
      { answerText: "Little parental care", isCorrect: false },
      { answerText: "Long lifespan and few offspring", isCorrect: true },
      { answerText: "Rapid population growth", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following cellular structures is responsible for the synthesis of ATP in prokaryotic cells?",
    answerOptions: [
      { answerText: "Mitochondria", isCorrect: false },
      { answerText: "Ribosomes", isCorrect: false },
      { answerText: "Plasma membrane", isCorrect: true },
      { answerText: "Nucleoid", isCorrect: false },
    ],
  },
];

const Quizlet = () => {
  const { subject } = useParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);

  const handleSelectedAnswer = (index: any, isCorrect: boolean) => {
    setAnswered(true);
    setSelectedIndex(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setAnswered(false);
    setQuestionNumber(questionNumber + 1);
  };

  const handleFinish = () => {
    console.log(score);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between xl:flex-row flex-col">
        {/* Display question*/}
        <div className="flex-1">
          <h1 className="my-2 font-medium text-[16px] text-blue-400">
            {subject}
          </h1>
          <Card className="p-4 my-4">
            <h1>{questions[questionNumber].questionText}</h1>
            <div className="flex flex-col">
              {questions[questionNumber].answerOptions.map((option, index) => (
                <Button
                  className={`${
                    answered
                      ? selectedIndex === index
                        ? "bg-green-500 hover:bg-green-500 text-white"
                        : "bg-muted text-black"
                      : "bg-muted text-black"
                  } my-1 cursor-pointer border-b-[1px]  hover:text-white transition-all duration-75`}
                  key={index}
                  onClick={() => handleSelectedAnswer(index, option.isCorrect)}
                >
                  {option.answerText}
                </Button>
              ))}
            </div>
          </Card>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => setQuestionNumber(questionNumber - 1)}
              disabled={questionNumber <= 0}
            >
              Previous
            </Button>
            <h1>
              Question {questionNumber + 1} of {questions.length}
            </h1>
            {questionNumber < questions.length - 1 ? (
              <Button
                onClick={() => handleNext()}
                disabled={questionNumber >= questions.length - 1}
              >
                Next
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button
                    onClick={() => handleFinish()}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    Finish
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-full flex flex-col justify-center items-center">
                  <AlertDialogHeader className="w-full flex justify-center items-center">
                    <AlertDialogTitle>
                      Score
                    </AlertDialogTitle>
                    <AlertDialogDescription className="w-full flex justify-center items-center">
                      You can do better
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                    You scored {score} out of {questions.length}
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setScore(0)}>Close</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setScore(0)}>Done</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
        {/* All questions */}
        <div className="flex-1 flex justify-end">
          <div className="">
            <h1 className="my-2 font-medium text-[16px] text-blue-400">
              Questions
            </h1>
            <div className="grid grid-cols-6 w-fit gap-2">
              {questions.map((q, i) => (
                <Card
                  className="hover:bg-muted flex items-center justify-center h-15 w-17 cursor-pointer"
                  onClick={() => setQuestionNumber(i)}
                  key={i}
                >
                  {i + 1}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizlet;
