import { useEffect, useState } from "react";
import { Card, CardFooter } from "../../../components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
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
import { MdArrowBack } from "react-icons/md";
import QuizTimer from "@/components/QuizTimer";
import { toast } from "sonner";

const biology = [
  {
    questionText:
      "Which type of intermolecular force is responsible for the anomalously high boiling point of hydrogen fluoride?",
    answerOptions: [
      { answerText: "Van der Waals forces", isCorrect: false },
      { answerText: "Hydrogen bonding", isCorrect: true },
      { answerText: "Dipole-dipole interactions", isCorrect: false },
      { answerText: "Covalent bonding", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Hydrogen bonding",
    answerIndex: 1,
  },
  {
    questionText:
      "In mitochondrial electron transport, what is the role of cytochrome c?",
    answerOptions: [
      {
        answerText: "It directly phosphorylates ADP to form ATP",
        isCorrect: false,
      },
      {
        answerText: "It transfers electrons between complex III and complex IV",
        isCorrect: true,
      },
      {
        answerText: "It functions as the primary electron donor",
        isCorrect: false,
      },
      {
        answerText: "It regulates proton flow across the membrane",
        isCorrect: false,
      },
    ],
    isAnswered: false,
    answer: "It transfers electrons between complex III and complex IV",
    answerIndex: 1,
  },
  {
    questionText:
      "Which DNA repair mechanism is primarily used to correct thymine dimers caused by UV radiation?",
    answerOptions: [
      { answerText: "Base excision repair", isCorrect: false },
      { answerText: "Nucleotide excision repair", isCorrect: true },
      { answerText: "Mismatch repair", isCorrect: false },
      { answerText: "Non-homologous end joining", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Nucleotide excision repair",
    answerIndex: 1,
  },
  {
    questionText:
      "What is the theoretical maximum efficiency of ATP synthesis per glucose molecule in aerobic respiration?",
    answerOptions: [
      { answerText: "36 ATP", isCorrect: false },
      { answerText: "38 ATP", isCorrect: true },
      { answerText: "32 ATP", isCorrect: false },
      { answerText: "40 ATP", isCorrect: false },
    ],
    isAnswered: false,
    answer: "38 ATP",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following proteins is involved in chromosomal condensation during mitosis?",
    answerOptions: [
      { answerText: "Cohesin", isCorrect: false },
      { answerText: "Condensin", isCorrect: true },
      { answerText: "Histone H1", isCorrect: false },
      { answerText: "Topoisomerase II", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Condensin",
    answerIndex: 1,
  },
  {
    questionText:
      "In quantum biology, which enzyme is proposed to use quantum tunneling to enhance reaction rates?",
    answerOptions: [
      { answerText: "Hexokinase", isCorrect: false },
      { answerText: "Dehydrogenase", isCorrect: false },
      { answerText: "Lysozyme", isCorrect: false },
      { answerText: "Oxidoreductase", isCorrect: true },
    ],
    isAnswered: false,
    answer: "Oxidoreductase",
    answerIndex: 3,
  },
  {
    questionText:
      "Which amino acid is most likely to be found in the active site of an enzyme catalyzing acid-base reactions?",
    answerOptions: [
      { answerText: "Glycine", isCorrect: false },
      { answerText: "Histidine", isCorrect: true },
      { answerText: "Proline", isCorrect: false },
      { answerText: "Methionine", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Histidine",
    answerIndex: 1,
  },
  {
    questionText:
      "In the lac operon, what happens when both glucose and lactose are present in high concentrations?",
    answerOptions: [
      { answerText: "The lac operon is fully activated", isCorrect: false },
      {
        answerText: "The lac operon is repressed due to catabolite repression",
        isCorrect: true,
      },
      {
        answerText: "Transcription occurs at a constant low level",
        isCorrect: false,
      },
      {
        answerText: "Beta-galactosidase production is increased",
        isCorrect: false,
      },
    ],
    isAnswered: false,
    answer: "The lac operon is repressed due to catabolite repression",
    answerIndex: 1,
  },
  {
    questionText:
      "Which physical principle explains how enzymes lower the activation energy of biochemical reactions?",
    answerOptions: [
      { answerText: "Le Chatelier’s principle", isCorrect: false },
      { answerText: "Transition state stabilization", isCorrect: true },
      { answerText: "Pauli exclusion principle", isCorrect: false },
      { answerText: "Heisenberg uncertainty principle", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Transition state stabilization",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following elements is most abundant in the Earth's crust and also plays a crucial role in ATP hydrolysis?",
    answerOptions: [
      { answerText: "Calcium", isCorrect: false },
      { answerText: "Magnesium", isCorrect: true },
      { answerText: "Iron", isCorrect: false },
      { answerText: "Potassium", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Magnesium",
    answerIndex: 1,
  },
  {
    questionText:
      "Which enzyme is responsible for unwinding the DNA helix during replication?",
    answerOptions: [
      { answerText: "DNA polymerase", isCorrect: false },
      { answerText: "Helicase", isCorrect: true },
      { answerText: "Ligase", isCorrect: false },
      { answerText: "Topoisomerase", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Helicase",
    answerIndex: 1,
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
    isAnswered: false,
    answer: "Nucleolus",
    answerIndex: 2,
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
    isAnswered: false,
    answer: "Electron transport chain",
    answerIndex: 2,
  },
  {
    questionText: "What is the primary function of the myelin sheath?",
    answerOptions: [
      { answerText: "Transmit electrical impulses", isCorrect: false },
      { answerText: "Protect neurons from damage", isCorrect: false },
      { answerText: "Increase the speed of nerve impulses", isCorrect: true },
      { answerText: "Produce neurotransmitters", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Increase the speed of nerve impulses",
    answerIndex: 2,
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
    isAnswered: false,
    answer: "Protein synthesis",
    answerIndex: 3,
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
    isAnswered: false,
    answer: "Oxygen",
    answerIndex: 2,
  },
  {
    questionText: "Which part of the brain regulates balance and coordination?",
    answerOptions: [
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: true },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Thalamus", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Cerebellum",
    answerIndex: 1,
  },
  {
    questionText: "Which type of mutation results in a premature stop codon?",
    answerOptions: [
      { answerText: "Missense mutation", isCorrect: false },
      { answerText: "Nonsense mutation", isCorrect: true },
      { answerText: "Silent mutation", isCorrect: false },
      { answerText: "Frameshift mutation", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Nonsense mutation",
    answerIndex: 1,
  },
  {
    questionText: "Which hormone stimulates red blood cell production?",
    answerOptions: [
      { answerText: "Erythropoietin", isCorrect: true },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Erythropoietin",
    answerIndex: 0,
  },
  {
    questionText: "What is the main function of surfactant in the lungs?",
    answerOptions: [
      { answerText: "Transport oxygen", isCorrect: false },
      { answerText: "Reduce surface tension in alveoli", isCorrect: true },
      { answerText: "Remove carbon dioxide", isCorrect: false },
      { answerText: "Increase mucus production", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Reduce surface tension in alveoli",
    answerIndex: 1,
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
    isAnswered: false,
    answer: "B cells",
    answerIndex: 1,
  },
  {
    questionText:
      "Which part of the nephron is primarily responsible for filtration?",
    answerOptions: [
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Glomerulus", isCorrect: true },
      { answerText: "Collecting duct", isCorrect: false },
      { answerText: "Distal tubule", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Glomerulus",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following enzymes is responsible for transcribing DNA into RNA?",
    answerOptions: [
      { answerText: "DNA polymerase", isCorrect: false },
      { answerText: "RNA polymerase", isCorrect: true },
      { answerText: "Helicase", isCorrect: false },
      { answerText: "Ligase", isCorrect: false },
    ],
    isAnswered: false,
    answer: "RNA polymerase",
    answerIndex: 1,
  },
  {
    questionText:
      "What is the main function of the sarcoplasmic reticulum in muscle cells?",
    answerOptions: [
      { answerText: "Produce ATP", isCorrect: false },
      { answerText: "Store and release calcium ions", isCorrect: true },
      { answerText: "Transport oxygen", isCorrect: false },
      { answerText: "Synthesize proteins", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Store and release calcium ions",
    answerIndex: 1,
  },
  {
    questionText: "Which phase of the cell cycle includes DNA replication?",
    answerOptions: [
      { answerText: "G1 phase", isCorrect: false },
      { answerText: "S phase", isCorrect: true },
      { answerText: "G2 phase", isCorrect: false },
      { answerText: "M phase", isCorrect: false },
    ],
    isAnswered: false,
    answer: "S phase",
    answerIndex: 1,
  },
  {
    questionText:
      "Which neurotransmitter is primarily responsible for muscle contraction?",
    answerOptions: [
      { answerText: "Dopamine", isCorrect: false },
      { answerText: "Serotonin", isCorrect: false },
      { answerText: "Acetylcholine", isCorrect: true },
      { answerText: "GABA", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Acetylcholine",
    answerIndex: 2,
  },
  {
    questionText: "What is the function of telomerase?",
    answerOptions: [
      { answerText: "Unwind DNA for replication", isCorrect: false },
      { answerText: "Prevent chromosome shortening", isCorrect: true },
      { answerText: "Repair damaged DNA", isCorrect: false },
      { answerText: "Facilitate protein synthesis", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Prevent chromosome shortening",
    answerIndex: 1,
  },
  {
    questionText:
      "Which structure in the human brain is responsible for regulating circadian rhythms?",
    answerOptions: [
      { answerText: "Hypothalamus", isCorrect: true },
      { answerText: "Amygdala", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Pons", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Hypothalamus",
    answerIndex: 0,
  },
  {
    questionText:
      "Which of the following is a function of the liver in glucose metabolism?",
    answerOptions: [
      { answerText: "Converting glucose to glycogen", isCorrect: true },
      { answerText: "Producing insulin", isCorrect: false },
      { answerText: "Breaking down glycogen to amino acids", isCorrect: false },
      { answerText: "Absorbing glucose from the intestines", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Converting glucose to glycogen",
    answerIndex: 0,
  },
  {
    questionText:
      "Which molecule is directly responsible for transferring amino acids to the ribosome during translation?",
    answerOptions: [
      { answerText: "mRNA", isCorrect: false },
      { answerText: "rRNA", isCorrect: false },
      { answerText: "tRNA", isCorrect: true },
      { answerText: "DNA", isCorrect: false },
    ],
    isAnswered: false,
    answer: "tRNA",
    answerIndex: 2,
  },
  {
    questionText:
      "Which immune cells are primarily responsible for the rapid response in the innate immune system?",
    answerOptions: [
      { answerText: "B cells", isCorrect: false },
      { answerText: "T cells", isCorrect: false },
      { answerText: "Neutrophils", isCorrect: true },
      { answerText: "Plasma cells", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Neutrophils",
    answerIndex: 2,
  },
  {
    questionText:
      "What type of joint is found between the vertebrae of the spine?",
    answerOptions: [
      { answerText: "Fibrous joint", isCorrect: false },
      { answerText: "Cartilaginous joint", isCorrect: true },
      { answerText: "Synovial joint", isCorrect: false },
      { answerText: "Hinge joint", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Cartilaginous joint",
    answerIndex: 1,
  },
  {
    questionText:
      "Which cellular organelle is responsible for breaking down waste materials and cellular debris?",
    answerOptions: [
      { answerText: "Mitochondria", isCorrect: false },
      { answerText: "Lysosomes", isCorrect: true },
      { answerText: "Peroxisomes", isCorrect: false },
      { answerText: "Ribosomes", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Lysosomes",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following best describes an operon in bacterial gene regulation?",
    answerOptions: [
      { answerText: "A cluster of genes regulated together", isCorrect: true },
      {
        answerText: "A single gene coding for multiple proteins",
        isCorrect: false,
      },
      {
        answerText: "A sequence that enhances transcription",
        isCorrect: false,
      },
      {
        answerText: "A regulatory protein that binds to DNA",
        isCorrect: false,
      },
    ],
    isAnswered: false,
    answer: "A cluster of genes regulated together",
    answerIndex: 0,
  },
  {
    questionText:
      "Which enzyme is responsible for generating ATP in the mitochondria?",
    answerOptions: [
      { answerText: "ATP synthase", isCorrect: true },
      { answerText: "Pyruvate kinase", isCorrect: false },
      { answerText: "Hexokinase", isCorrect: false },
      { answerText: "Glucose-6-phosphatase", isCorrect: false },
    ],
    isAnswered: false,
    answer: "ATP synthase",
    answerIndex: 0,
  },
  {
    questionText:
      "Which protein complex is responsible for recognizing and degrading misfolded proteins in cells?",
    answerOptions: [
      { answerText: "Lysosome", isCorrect: false },
      { answerText: "Proteasome", isCorrect: true },
      { answerText: "Ribosome", isCorrect: false },
      { answerText: "Peroxisome", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Proteasome",
    answerIndex: 1,
  },
];

const physics = [
  {
    questionText:
      "Which fundamental force is responsible for holding atomic nuclei together?",
    answerOptions: [
      { answerText: "Gravitational force", isCorrect: false },
      { answerText: "Electromagnetic force", isCorrect: false },
      { answerText: "Strong nuclear force", isCorrect: true },
      { answerText: "Weak nuclear force", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Strong nuclear force",
    answerIndex: 2,
  },
  {
    questionText:
      "What is the escape velocity from Earth's surface approximately?",
    answerOptions: [
      { answerText: "7.9 km/s", isCorrect: false },
      { answerText: "11.2 km/s", isCorrect: true },
      { answerText: "3.6 km/s", isCorrect: false },
      { answerText: "25.2 km/s", isCorrect: false },
    ],
    isAnswered: false,
    answer: "11.2 km/s",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following best explains why an astronaut appears weightless in orbit?",
    answerOptions: [
      { answerText: "There is no gravity in space", isCorrect: false },
      {
        answerText: "The astronaut is in free fall around Earth",
        isCorrect: true,
      },
      {
        answerText: "The astronaut's mass is reduced in space",
        isCorrect: false,
      },
      { answerText: "There is no air resistance in space", isCorrect: false },
    ],
    isAnswered: false,
    answer: "The astronaut is in free fall around Earth",
    answerIndex: 1,
  },
  {
    questionText:
      "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
    answerOptions: [
      { answerText: "Boyle's Law", isCorrect: true },
      { answerText: "Charles's Law", isCorrect: false },
      { answerText: "Gay-Lussac's Law", isCorrect: false },
      { answerText: "Avogadro's Law", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Boyle's Law",
    answerIndex: 0,
  },
  {
    questionText:
      "What is the primary reason for the sky appearing blue during the day?",
    answerOptions: [
      { answerText: "Rayleigh scattering", isCorrect: true },
      { answerText: "Mie scattering", isCorrect: false },
      { answerText: "Reflection from oceans", isCorrect: false },
      { answerText: "Absorption by oxygen", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Rayleigh scattering",
    answerIndex: 0,
  },
  {
    questionText:
      "In a vacuum, all electromagnetic waves travel at the same speed. What is this speed?",
    answerOptions: [
      { answerText: "3 × 10^6 m/s", isCorrect: false },
      { answerText: "3 × 10^8 m/s", isCorrect: true },
      { answerText: "3 × 10^10 m/s", isCorrect: false },
      { answerText: "3 × 10^12 m/s", isCorrect: false },
    ],
    isAnswered: false,
    answer: "3 × 10^8 m/s",
    answerIndex: 1,
  },
  {
    questionText:
      "Which phenomenon explains the bending of light when it passes from one medium to another?",
    answerOptions: [
      { answerText: "Reflection", isCorrect: false },
      { answerText: "Refraction", isCorrect: true },
      { answerText: "Diffraction", isCorrect: false },
      { answerText: "Dispersion", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Refraction",
    answerIndex: 1,
  },
  {
    questionText: "Which type of wave requires a medium to propagate?",
    answerOptions: [
      { answerText: "Electromagnetic waves", isCorrect: false },
      { answerText: "Sound waves", isCorrect: true },
      { answerText: "Gamma rays", isCorrect: false },
      { answerText: "X-rays", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Sound waves",
    answerIndex: 1,
  },
  {
    questionText:
      "Which quantity is conserved in an elastic collision but not necessarily in an inelastic collision?",
    answerOptions: [
      { answerText: "Momentum", isCorrect: false },
      { answerText: "Kinetic energy", isCorrect: true },
      { answerText: "Mass", isCorrect: false },
      { answerText: "Angular momentum", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Kinetic energy",
    answerIndex: 1,
  },
  {
    questionText: "What is the SI unit of electric charge?",
    answerOptions: [
      { answerText: "Newton", isCorrect: false },
      { answerText: "Coulomb", isCorrect: true },
      { answerText: "Joule", isCorrect: false },
      { answerText: "Tesla", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Coulomb",
    answerIndex: 1,
  },
];

const chemistry = [
  {
    questionText:
      "Which subatomic particle is responsible for an element’s chemical properties?",
    answerOptions: [
      { answerText: "Neutron", isCorrect: false },
      { answerText: "Proton", isCorrect: false },
      { answerText: "Electron", isCorrect: true },
      { answerText: "Photon", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Electron",
    answerIndex: 2,
  },
  {
    questionText:
      "Which type of chemical bond involves the transfer of electrons?",
    answerOptions: [
      { answerText: "Covalent bond", isCorrect: false },
      { answerText: "Ionic bond", isCorrect: true },
      { answerText: "Hydrogen bond", isCorrect: false },
      { answerText: "Metallic bond", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Ionic bond",
    answerIndex: 1,
  },
  {
    questionText: "What is the pH of a neutral solution at 25°C?",
    answerOptions: [
      { answerText: "0", isCorrect: false },
      { answerText: "7", isCorrect: true },
      { answerText: "14", isCorrect: false },
      { answerText: "10", isCorrect: false },
    ],
    isAnswered: false,
    answer: "7",
    answerIndex: 1,
  },
  {
    questionText:
      "Which gas is most commonly produced during the reaction of an acid with a metal?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Nitrogen", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: true },
      { answerText: "Carbon dioxide", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Hydrogen",
    answerIndex: 2,
  },
  {
    questionText: "What is the chemical formula for ammonia?",
    answerOptions: [
      { answerText: "NH₄", isCorrect: false },
      { answerText: "NO₃", isCorrect: false },
      { answerText: "NH₃", isCorrect: true },
      { answerText: "N₂O", isCorrect: false },
    ],
    isAnswered: false,
    answer: "NH₃",
    answerIndex: 2,
  },
  {
    questionText:
      "Which type of reaction involves the breakdown of a compound into simpler substances?",
    answerOptions: [
      { answerText: "Synthesis reaction", isCorrect: false },
      { answerText: "Decomposition reaction", isCorrect: true },
      { answerText: "Combustion reaction", isCorrect: false },
      { answerText: "Neutralization reaction", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Decomposition reaction",
    answerIndex: 1,
  },
  {
    questionText:
      "Which of the following is an example of an allotrope of carbon?",
    answerOptions: [
      { answerText: "Graphite", isCorrect: true },
      { answerText: "Carbon monoxide", isCorrect: false },
      { answerText: "Methane", isCorrect: false },
      { answerText: "Carbonate", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Graphite",
    answerIndex: 0,
  },
  {
    questionText:
      "Which law states that mass is neither created nor destroyed in a chemical reaction?",
    answerOptions: [
      { answerText: "Boyle's Law", isCorrect: false },
      { answerText: "Law of Conservation of Mass", isCorrect: true },
      { answerText: "Dalton’s Law", isCorrect: false },
      { answerText: "Avogadro’s Law", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Law of Conservation of Mass",
    answerIndex: 1,
  },
  {
    questionText:
      "What is the primary reason noble gases are chemically inert?",
    answerOptions: [
      { answerText: "They have high densities", isCorrect: false },
      {
        answerText: "They have a complete outer electron shell",
        isCorrect: true,
      },
      { answerText: "They are highly electronegative", isCorrect: false },
      { answerText: "They readily gain electrons", isCorrect: false },
    ],
    isAnswered: false,
    answer: "They have a complete outer electron shell",
    answerIndex: 1,
  },
  {
    questionText:
      "What is the oxidation state of sulfur in sulfuric acid (H₂SO₄)?",
    answerOptions: [
      { answerText: "+2", isCorrect: false },
      { answerText: "+4", isCorrect: false },
      { answerText: "+6", isCorrect: true },
      { answerText: "-2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "+6",
    answerIndex: 2,
  },
];

const emathematics = [
  {
    questionText: "Solve for x: 2x² - 5x - 3 = 0",
    answerOptions: [
      { answerText: "x = 3, x = -1/2", isCorrect: true },
      { answerText: "x = -3, x = 1/2", isCorrect: false },
      { answerText: "x = 5, x = -3", isCorrect: false },
      { answerText: "x = -5, x = 3", isCorrect: false },
    ],
    isAnswered: false,
    answer: "x = 3, x = -1/2",
    answerIndex: 0,
  },
  {
    questionText: "Find the derivative of f(x) = 3x³ - 5x² + 2x - 7.",
    answerOptions: [
      { answerText: "9x² - 10x + 2", isCorrect: true },
      { answerText: "6x² - 5x + 2", isCorrect: false },
      { answerText: "9x² - 5x + 2", isCorrect: false },
      { answerText: "3x² - 10x + 2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "9x² - 10x + 2",
    answerIndex: 0,
  },
  {
    questionText: "If A = [ 2  3 ] and B = [ 1  -1 ], what is A + B?",
    answerOptions: [
      { answerText: "[3 2]", isCorrect: true },
      { answerText: "[3 -2]", isCorrect: false },
      { answerText: "[-1 2]", isCorrect: false },
      { answerText: "[3 -1]", isCorrect: false },
    ],
    isAnswered: false,
    answer: "[3 2]",
    answerIndex: 0,
  },
  {
    questionText:
      "Find the sum of the first 10 terms of the arithmetic sequence 3, 7, 11, 15, ...",
    answerOptions: [
      { answerText: "360", isCorrect: false },
      { answerText: "210", isCorrect: true },
      { answerText: "260", isCorrect: false },
      { answerText: "300", isCorrect: false },
    ],
    isAnswered: false,
    answer: "210",
    answerIndex: 1,
  },
  {
    questionText:
      "The probability of an event occurring is 0.2. What is the probability that it does NOT occur?",
    answerOptions: [
      { answerText: "0.8", isCorrect: true },
      { answerText: "0.2", isCorrect: false },
      { answerText: "0.5", isCorrect: false },
      { answerText: "0.1", isCorrect: false },
    ],
    isAnswered: false,
    answer: "0.8",
    answerIndex: 0,
  },
  {
    questionText:
      "If sinθ = 3/5, find cosθ assuming θ is in the first quadrant.",
    answerOptions: [
      { answerText: "4/5", isCorrect: true },
      { answerText: "3/4", isCorrect: false },
      { answerText: "5/3", isCorrect: false },
      { answerText: "1/2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "4/5",
    answerIndex: 0,
  },
  {
    questionText: "Solve for x: log₂(x) + log₂(4) = 3",
    answerOptions: [
      { answerText: "4", isCorrect: false },
      { answerText: "2", isCorrect: true },
      { answerText: "16", isCorrect: false },
      { answerText: "8", isCorrect: false },
    ],
    isAnswered: false,
    answer: "2",
    answerIndex: 1,
  },
  {
    questionText: "Find the area of a triangle with base 8cm and height 5cm.",
    answerOptions: [
      { answerText: "40 cm²", isCorrect: false },
      { answerText: "20 cm²", isCorrect: true },
      { answerText: "25 cm²", isCorrect: false },
      { answerText: "15 cm²", isCorrect: false },
    ],
    isAnswered: false,
    answer: "20 cm²",
    answerIndex: 1,
  },
  {
    questionText: "Find the modulus of the complex number 3 + 4i.",
    answerOptions: [
      { answerText: "5", isCorrect: true },
      { answerText: "4", isCorrect: false },
      { answerText: "3", isCorrect: false },
      { answerText: "7", isCorrect: false },
    ],
    isAnswered: false,
    answer: "5",
    answerIndex: 0,
  },
  {
    questionText: "Find the determinant of the matrix: | 2  3 | | 4  5 |.",
    answerOptions: [
      { answerText: "2", isCorrect: false },
      { answerText: "-4", isCorrect: false },
      { answerText: "-1", isCorrect: false },
      { answerText: "-2", isCorrect: true },
    ],
    isAnswered: false,
    answer: "-2",
    answerIndex: 3,
  },
];

const english = [
  {
    questionText: "Choose the correct word to complete the sentence: She is very good _____ mathematics.",
    answerOptions: [
      { answerText: "at", isCorrect: true },
      { answerText: "in", isCorrect: false },
      { answerText: "on", isCorrect: false },
      { answerText: "with", isCorrect: false },
    ],
    isAnswered: false,
    answer: "at",
    answerIndex: 0,
  },
  {
    questionText: "Identify the part of speech of the underlined word: She **quickly** ran to the market.",
    answerOptions: [
      { answerText: "Adverb", isCorrect: true },
      { answerText: "Verb", isCorrect: false },
      { answerText: "Adjective", isCorrect: false },
      { answerText: "Noun", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Adverb",
    answerIndex: 0,
  },
  {
    questionText: "Choose the sentence with correct punctuation.",
    answerOptions: [
      { answerText: "When she arrived, he was already gone.", isCorrect: true },
      { answerText: "When she arrived he was already gone.", isCorrect: false },
      { answerText: "When, she arrived he was already gone.", isCorrect: false },
      { answerText: "When she arrived he, was already gone.", isCorrect: false },
    ],
    isAnswered: false,
    answer: "When she arrived, he was already gone.",
    answerIndex: 0,
  },
  {
    questionText: "Choose the correct expression: He has lived here _____ five years.",
    answerOptions: [
      { answerText: "for", isCorrect: true },
      { answerText: "since", isCorrect: false },
      { answerText: "from", isCorrect: false },
      { answerText: "during", isCorrect: false },
    ],
    isAnswered: false,
    answer: "for",
    answerIndex: 0,
  },
  {
    questionText: "Which of the following is a synonym of 'benevolent'?",
    answerOptions: [
      { answerText: "Kind", isCorrect: true },
      { answerText: "Cruel", isCorrect: false },
      { answerText: "Jealous", isCorrect: false },
      { answerText: "Angry", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Kind",
    answerIndex: 0,
  },
  {
    questionText: "Identify the tense in the sentence: 'She had eaten before I arrived.'",
    answerOptions: [
      { answerText: "Past perfect", isCorrect: true },
      { answerText: "Simple past", isCorrect: false },
      { answerText: "Present perfect", isCorrect: false },
      { answerText: "Future perfect", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Past perfect",
    answerIndex: 0,
  },
  {
    questionText: "Choose the correct indirect speech: He said, 'I am tired.'",
    answerOptions: [
      { answerText: "He said that he was tired.", isCorrect: true },
      { answerText: "He said that he is tired.", isCorrect: false },
      { answerText: "He said that I was tired.", isCorrect: false },
      { answerText: "He said I am tired.", isCorrect: false },
    ],
    isAnswered: false,
    answer: "He said that he was tired.",
    answerIndex: 0,
  },
  {
    questionText: "Choose the correct option to complete the sentence: Neither the teacher nor the students _____ absent.",
    answerOptions: [
      { answerText: "are", isCorrect: false },
      { answerText: "were", isCorrect: false },
      { answerText: "is", isCorrect: true },
      { answerText: "have been", isCorrect: false },
    ],
    isAnswered: false,
    answer: "is",
    answerIndex: 2,
  },
  {
    questionText: "Choose the correct antonym for 'expand'.",
    answerOptions: [
      { answerText: "Contract", isCorrect: true },
      { answerText: "Grow", isCorrect: false },
      { answerText: "Enlarge", isCorrect: false },
      { answerText: "Multiply", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Contract",
    answerIndex: 0,
  },
  {
    questionText: "What figure of speech is used in this sentence: 'The wind whispered through the trees'?",
    answerOptions: [
      { answerText: "Personification", isCorrect: true },
      { answerText: "Metaphor", isCorrect: false },
      { answerText: "Simile", isCorrect: false },
      { answerText: "Hyperbole", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Personification",
    answerIndex: 0,
  },
];

const interscience = [
  {
    questionText: "What is the main function of the mitochondria in a cell?",
    answerOptions: [
      { answerText: "Energy production", isCorrect: true },
      { answerText: "Protein synthesis", isCorrect: false },
      { answerText: "Photosynthesis", isCorrect: false },
      { answerText: "Cell division", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Energy production",
    answerIndex: 0,
  },
  {
    questionText: "Which of these is NOT a method of heat transfer?",
    answerOptions: [
      { answerText: "Compression", isCorrect: true },
      { answerText: "Conduction", isCorrect: false },
      { answerText: "Convection", isCorrect: false },
      { answerText: "Radiation", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Compression",
    answerIndex: 0,
  },
  {
    questionText: "Which gas is given off during photosynthesis?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Nitrogen", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Oxygen",
    answerIndex: 0,
  },
  {
    questionText: "The boiling point of water at sea level is?",
    answerOptions: [
      { answerText: "100°C", isCorrect: true },
      { answerText: "212°C", isCorrect: false },
      { answerText: "90°C", isCorrect: false },
      { answerText: "0°C", isCorrect: false },
    ],
    isAnswered: false,
    answer: "100°C",
    answerIndex: 0,
  },
  {
    questionText: "What is the correct order of the planets from the sun?",
    answerOptions: [
      { answerText: "Mercury, Venus, Earth, Mars", isCorrect: true },
      { answerText: "Venus, Mercury, Earth, Mars", isCorrect: false },
      { answerText: "Earth, Mars, Mercury, Venus", isCorrect: false },
      { answerText: "Mars, Earth, Venus, Mercury", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Mercury, Venus, Earth, Mars",
    answerIndex: 0,
  },
  {
    questionText: "Which component of blood is responsible for clotting?",
    answerOptions: [
      { answerText: "Platelets", isCorrect: true },
      { answerText: "Red blood cells", isCorrect: false },
      { answerText: "White blood cells", isCorrect: false },
      { answerText: "Plasma", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Platelets",
    answerIndex: 0,
  },
  {
    questionText: "Which of the following is a chemical change?",
    answerOptions: [
      { answerText: "Burning of paper", isCorrect: true },
      { answerText: "Melting of ice", isCorrect: false },
      { answerText: "Boiling of water", isCorrect: false },
      { answerText: "Breaking of glass", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Burning of paper",
    answerIndex: 0,
  },
  {
    questionText: "Which organ removes urea from the blood?",
    answerOptions: [
      { answerText: "Kidney", isCorrect: true },
      { answerText: "Liver", isCorrect: false },
      { answerText: "Heart", isCorrect: false },
      { answerText: "Lungs", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Kidney",
    answerIndex: 0,
  },
  {
    questionText: "What type of circuit has only one path for current to flow?",
    answerOptions: [
      { answerText: "Series circuit", isCorrect: true },
      { answerText: "Parallel circuit", isCorrect: false },
      { answerText: "Open circuit", isCorrect: false },
      { answerText: "Closed circuit", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Series circuit",
    answerIndex: 0,
  },
  {
    questionText: "Which part of the plant is responsible for photosynthesis?",
    answerOptions: [
      { answerText: "Leaf", isCorrect: true },
      { answerText: "Root", isCorrect: false },
      { answerText: "Stem", isCorrect: false },
      { answerText: "Flower", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Leaf",
    answerIndex: 0,
  },
];

const socialstudies = [
  {
    questionText: "Which of the following is a core value of democracy?",
    answerOptions: [
      { answerText: "Respect for human rights", isCorrect: true },
      { answerText: "Military rule", isCorrect: false },
      { answerText: "Dictatorship", isCorrect: false },
      { answerText: "Censorship", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Respect for human rights",
    answerIndex: 0,
  },
  {
    questionText: "The extended family system is common in which type of society?",
    answerOptions: [
      { answerText: "Traditional society", isCorrect: true },
      { answerText: "Industrial society", isCorrect: false },
      { answerText: "Digital society", isCorrect: false },
      { answerText: "Modern society", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Traditional society",
    answerIndex: 0,
  },
  {
    questionText: "Which of the following is a cause of rural-urban migration?",
    answerOptions: [
      { answerText: "Search for jobs", isCorrect: true },
      { answerText: "Poor roads in cities", isCorrect: false },
      { answerText: "Low cost of living in villages", isCorrect: false },
      { answerText: "Noise pollution", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Search for jobs",
    answerIndex: 0,
  },
  {
    questionText: "What is the main aim of the United Nations?",
    answerOptions: [
      { answerText: "Promote world peace", isCorrect: true },
      { answerText: "Spread capitalism", isCorrect: false },
      { answerText: "Support one nation only", isCorrect: false },
      { answerText: "Colonize poor countries", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Promote world peace",
    answerIndex: 0,
  },
  {
    questionText: "Civic responsibility of a citizen includes:",
    answerOptions: [
      { answerText: "Voting during elections", isCorrect: true },
      { answerText: "Evading taxes", isCorrect: false },
      { answerText: "Destroying public property", isCorrect: false },
      { answerText: "Avoiding national service", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Voting during elections",
    answerIndex: 0,
  },
  {
    questionText: "Which of the following is an agent of socialization?",
    answerOptions: [
      { answerText: "Family", isCorrect: true },
      { answerText: "Bank", isCorrect: false },
      { answerText: "Court", isCorrect: false },
      { answerText: "Market", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Family",
    answerIndex: 0,
  },
  {
    questionText: "The main function of the judiciary is to:",
    answerOptions: [
      { answerText: "Interpret laws", isCorrect: true },
      { answerText: "Make laws", isCorrect: false },
      { answerText: "Enforce laws", isCorrect: false },
      { answerText: "Break laws", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Interpret laws",
    answerIndex: 0,
  },
  {
    questionText: "What is population density?",
    answerOptions: [
      { answerText: "Number of people per unit area", isCorrect: true },
      { answerText: "Number of cities in a country", isCorrect: false },
      { answerText: "Birth rate in a year", isCorrect: false },
      { answerText: "Death rate in a year", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Number of people per unit area",
    answerIndex: 0,
  },
  {
    questionText: "The term 'culture' refers to:",
    answerOptions: [
      { answerText: "The way of life of a people", isCorrect: true },
      { answerText: "The food eaten in cities", isCorrect: false },
      { answerText: "Modern fashion styles", isCorrect: false },
      { answerText: "Type of economy", isCorrect: false },
    ],
    isAnswered: false,
    answer: "The way of life of a people",
    answerIndex: 0,
  },
  {
    questionText: "Which of the following promotes national unity?",
    answerOptions: [
      { answerText: "Respect for other ethnic groups", isCorrect: true },
      { answerText: "Discrimination", isCorrect: false },
      { answerText: "Religious intolerance", isCorrect: false },
      { answerText: "Tribalism", isCorrect: false },
    ],
    isAnswered: false,
    answer: "Respect for other ethnic groups",
    answerIndex: 0,
  },
];

const coremathematics = [
  {
    questionText: "Solve for x: 3x - 7 = 2x + 5",
    answerOptions: [
      { answerText: "x = 12", isCorrect: true },
      { answerText: "x = -12", isCorrect: false },
      { answerText: "x = 2", isCorrect: false },
      { answerText: "x = -2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "x = 12",
    answerIndex: 0,
  },
  {
    questionText: "Evaluate: 2(3² + 4) - 5",
    answerOptions: [
      { answerText: "17", isCorrect: false },
      { answerText: "13", isCorrect: false },
      { answerText: "19", isCorrect: true },
      { answerText: "23", isCorrect: false },
    ],
    isAnswered: false,
    answer: "19",
    answerIndex: 2,
  },
  {
    questionText: "Factorize: x² - 9x + 20",
    answerOptions: [
      { answerText: "(x - 4)(x - 5)", isCorrect: true },
      { answerText: "(x - 2)(x - 10)", isCorrect: false },
      { answerText: "(x + 4)(x + 5)", isCorrect: false },
      { answerText: "(x - 1)(x - 20)", isCorrect: false },
    ],
    isAnswered: false,
    answer: "(x - 4)(x - 5)",
    answerIndex: 0,
  },
  {
    questionText: "Simplify: (2x/3) ÷ (4x/9)",
    answerOptions: [
      { answerText: "3/2", isCorrect: true },
      { answerText: "2/3", isCorrect: false },
      { answerText: "3x/2x", isCorrect: false },
      { answerText: "6x", isCorrect: false },
    ],
    isAnswered: false,
    answer: "3/2",
    answerIndex: 0,
  },
  {
    questionText: "Find the median of: 3, 7, 9, 11, 15",
    answerOptions: [
      { answerText: "9", isCorrect: true },
      { answerText: "11", isCorrect: false },
      { answerText: "7", isCorrect: false },
      { answerText: "15", isCorrect: false },
    ],
    isAnswered: false,
    answer: "9",
    answerIndex: 0,
  },
  {
    questionText: "Find the mode of the following scores: 5, 8, 8, 6, 7, 8, 5",
    answerOptions: [
      { answerText: "8", isCorrect: true },
      { answerText: "5", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: false },
    ],
    isAnswered: false,
    answer: "8",
    answerIndex: 0,
  },
  {
    questionText: "If tanθ = 3/4, what is sinθ in a right-angled triangle?",
    answerOptions: [
      { answerText: "3/5", isCorrect: true },
      { answerText: "4/5", isCorrect: false },
      { answerText: "5/3", isCorrect: false },
      { answerText: "3/4", isCorrect: false },
    ],
    isAnswered: false,
    answer: "3/5",
    answerIndex: 0,
  },
  {
    questionText: "What is the gradient of the line joining the points (1, 2) and (4, 8)?",
    answerOptions: [
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
      { answerText: "1", isCorrect: false },
      { answerText: "6", isCorrect: false },
    ],
    isAnswered: false,
    answer: "2",
    answerIndex: 0,
  },
  {
    questionText: "Solve the inequality: 2x - 3 > 5",
    answerOptions: [
      { answerText: "x > 4", isCorrect: true },
      { answerText: "x < 4", isCorrect: false },
      { answerText: "x > 2", isCorrect: false },
      { answerText: "x < 2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "x > 4",
    answerIndex: 0,
  },
  {
    questionText: "Find the simple interest on GHC 800 at 5% per annum for 3 years.",
    answerOptions: [
      { answerText: "GHC 120", isCorrect: true },
      { answerText: "GHC 100", isCorrect: false },
      { answerText: "GHC 130", isCorrect: false },
      { answerText: "GHC 80", isCorrect: false },
    ],
    isAnswered: false,
    answer: "GHC 120",
    answerIndex: 0,
  },
  {
    questionText: "Evaluate: (2/5) ÷ (4/7)",
    answerOptions: [
      { answerText: "7/10", isCorrect: true },
      { answerText: "8/20", isCorrect: false },
      { answerText: "2/20", isCorrect: false },
      { answerText: "10/7", isCorrect: false },
    ],
    isAnswered: false,
    answer: "7/10",
    answerIndex: 0,
  },
  {
    questionText: "Simplify: √(49/16)",
    answerOptions: [
      { answerText: "7/4", isCorrect: true },
      { answerText: "4/7", isCorrect: false },
      { answerText: "14", isCorrect: false },
      { answerText: "3.5", isCorrect: false },
    ],
    isAnswered: false,
    answer: "7/4",
    answerIndex: 0,
  },
  {
    questionText: "Solve for x: 3(x - 2) = 2x + 4",
    answerOptions: [
      { answerText: "x = 10", isCorrect: true },
      { answerText: "x = -10", isCorrect: false },
      { answerText: "x = 4", isCorrect: false },
      { answerText: "x = -4", isCorrect: false },
    ],
    isAnswered: false,
    answer: "x = 10",
    answerIndex: 0,
  },
  {
    questionText: "Convert 45° to radians.",
    answerOptions: [
      { answerText: "π/4", isCorrect: true },
      { answerText: "π/3", isCorrect: false },
      { answerText: "π/6", isCorrect: false },
      { answerText: "2π/3", isCorrect: false },
    ],
    isAnswered: false,
    answer: "π/4",
    answerIndex: 0,
  },
  {
    questionText: "Find the gradient of the line joining (2, 3) and (6, 11).",
    answerOptions: [
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "1", isCorrect: false },
    ],
    isAnswered: false,
    answer: "2",
    answerIndex: 0,
  },
  {
    questionText: "Factor completely: x² - 9",
    answerOptions: [
      { answerText: "(x - 3)(x + 3)", isCorrect: true },
      { answerText: "(x - 9)(x + 1)", isCorrect: false },
      { answerText: "(x - 1)(x + 9)", isCorrect: false },
      { answerText: "(x + 3)²", isCorrect: false },
    ],
    isAnswered: false,
    answer: "(x - 3)(x + 3)",
    answerIndex: 0,
  },
  {
    questionText: "Solve the inequality: 2x - 3 < 5",
    answerOptions: [
      { answerText: "x < 4", isCorrect: true },
      { answerText: "x > 4", isCorrect: false },
      { answerText: "x < 1", isCorrect: false },
      { answerText: "x > 1", isCorrect: false },
    ],
    isAnswered: false,
    answer: "x < 4",
    answerIndex: 0,
  },
  {
    questionText: "Find the value of x in the triangle if sin(x) = 0.5 and 0° < x < 90°",
    answerOptions: [
      { answerText: "30°", isCorrect: true },
      { answerText: "45°", isCorrect: false },
      { answerText: "60°", isCorrect: false },
      { answerText: "90°", isCorrect: false },
    ],
    isAnswered: false,
    answer: "30°",
    answerIndex: 0,
  },
  {
    questionText: "If the mean of 4 numbers is 8, what is their total?",
    answerOptions: [
      { answerText: "32", isCorrect: true },
      { answerText: "12", isCorrect: false },
      { answerText: "24", isCorrect: false },
      { answerText: "16", isCorrect: false },
    ],
    isAnswered: false,
    answer: "32",
    answerIndex: 0,
  },
  {
    questionText: "A bag contains 3 red balls and 5 blue balls. What is the probability of picking a red ball?",
    answerOptions: [
      { answerText: "3/8", isCorrect: true },
      { answerText: "5/8", isCorrect: false },
      { answerText: "3/5", isCorrect: false },
      { answerText: "2/5", isCorrect: false },
    ],
    isAnswered: false,
    answer: "3/8",
    answerIndex: 0,
  },
];




const Quizlet = () => {
  const navigate = useNavigate();
  const { subject } = useParams();
  const [finished, setFinished] = useState(false)
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  // const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState(
    subject === "biology"
      ? biology
      : subject === "physics"
      ? physics
      : subject === "chemistry"
      ? chemistry
      : subject === "integrated Science"
      ? interscience
      : subject === "core Mathematics"
      ? coremathematics
      : subject === "english"
      ? english
      : subject === "social Studies"
      ? socialstudies
      : emathematics
  );
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number | null>
  >({});

  const questionNav = (index: number) => {
    setQuestionNumber(index);
  };

  const handleSelectedAnswer = (index: any, isCorrect: boolean) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionNumber]: index, // Store selected index for the current question
    }));

    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionNumber ? { ...question, isAnswered: true } : question
      )
    );
  };
  console.log(selectedAnswers);

  const handleNext = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleFinish = () => {
    quizQuestions.map((question, ind) => {
      if (question.answerIndex === selectedAnswers[ind]) {
        setScore((prevScore) => prevScore + 1);
      }
    });
    setFinished(true)
  };

  const handleClearChoice = () => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionNumber]: null, // Clear the selected index for the current question
    }));
    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionNumber
          ? { ...question, isAnswered: false }
          : question
      )
    );
  };

  const handleReview = () => {
    setIsReviewMode(true);
    setQuestionNumber(0);
    setFinished(false) 
  };

  const handleDone = () => {
    setQuizQuestions(
      subject === "biology"
        ? biology
        : subject === "physics"
        ? physics
        : subject === "chemistry"
        ? chemistry
        : emathematics
    );
    setQuestionNumber(0);
    setScore(0);
    setIsReviewMode(false);
    setSelectedAnswers({});
    setFinished(false) 
  };

  const handleTimeUp = () => {
    toast.info("Time Up")
    handleFinish()
    handleReview()
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer hover:text-blue-400 flex items-center justify-between"
        >
            <MdArrowBack />
            <p>Go Back</p>
        </div>
          {(!isReviewMode || finished) && <QuizTimer duration={quizQuestions.length * 10} onTimeUp={handleTimeUp} />}
      </div>
      <div className="flex items-center xl:items-start justify-between xl:flex-row flex-col">
        {/* Display question*/}
        <div className="flex-1 w-full">
          <h1 className="my-2 font-medium text-[16px] text-blue-400 capitalize">
            {subject} Quiz
          </h1>
          <Card className="p-4 my-4">
            {isReviewMode && (
              <div className="w-full flex items-center justify-between">
                <h1 className="text-gray-400">
                  Review Mode{" "}
                  <span className="text-black font-medium"> Score {score}</span>
                </h1>
                <Button
                  className="bg-black text-white cursor-pointer hover:bg-black"
                  onClick={handleDone}
                >
                  Retake Quiz
                </Button>
              </div>
            )}
            <h1>{quizQuestions[questionNumber].questionText}</h1>
            <div className="flex flex-col">
              {quizQuestions[questionNumber].answerOptions.map(
                (option, index) => (
                  <Button
                    className={`${
                      selectedAnswers[questionNumber] === index
                        ? "bg-black hover:bg-black text-white"
                        : "bg-muted text-black"
                    } ${
                      isReviewMode
                        ? option.isCorrect
                          ? "bg-green-500 text-white"
                          : selectedAnswers[questionNumber] === index &&
                            "bg-red-500"
                        : ""
                    } ${
                      isReviewMode && "pointer-events-none"
                    } my-1 cursor-pointer border-b-[1px]  hover:text-white transition-all duration-75`}
                    key={index}
                    onClick={() =>
                      handleSelectedAnswer(index, option.isCorrect)
                    }
                  >
                    {option.answerText}
                  </Button>
                )
              )}
            </div>
            <CardFooter className="p-0 flex justify-end">
              <Button
                disabled={isReviewMode}
                onClick={handleClearChoice}
                variant="ghost"
                className="text-red-500 hover:text-red-500"
              >
                Clear choice
              </Button>
            </CardFooter>
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
              Question {questionNumber + 1} of {quizQuestions.length}
            </h1>
            {questionNumber < quizQuestions.length - 1 ? (
              <Button
                onClick={() => handleNext()}
                disabled={questionNumber >= quizQuestions.length - 1}
              >
                Next
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    disabled={isReviewMode}
                    onClick={() => handleFinish()}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    Finish
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-full flex flex-col justify-center items-center">
                  <AlertDialogHeader className="w-full flex justify-center items-center">
                    <AlertDialogTitle>Score</AlertDialogTitle>
                    <AlertDialogDescription className="w-full flex justify-center items-center">
                      { score === quizQuestions.length ? "Excellent!": score > quizQuestions.length / 2
                        ? "You did well!" : "Better luck next time!"}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <p>
                    {" "}
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {navigate(-1); setFinished(false) } }>
                      Go Back
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleReview()}>
                      Review
                    </AlertDialogAction>
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
              {quizQuestions.map((question, i) => (
                <Card
                  className={`${
                    question.isAnswered &&
                    "bg-green-400 text-white hover:text-green-400 hover:bg-muted"
                  } ${
                    questionNumber === i && "border-b-2 border-slate-700"
                  } hover:bg-muted flex items-center justify-center h-15 w-17 cursor-pointer font-medium text-[16px]`}
                  onClick={() => questionNav(i)}
                  key={i}
                >
                  {i + 1}
                </Card>
              ))}
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  disabled={isReviewMode}
                  variant="ghost"
                  onClick={() => handleFinish()}
                  className=" text-blue-400 w-fit p-0"
                >
                  Finish attempt
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full flex flex-col justify-center items-center">
                <AlertDialogHeader className="w-full flex justify-center items-center">
                  <AlertDialogTitle>Score</AlertDialogTitle>
                  <AlertDialogDescription className="w-full flex justify-center items-center">
                    You can do better
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <p className="text-[20px]">
                  {" "}
                  You scored {score} out of {quizQuestions.length}
                </p>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => {navigate(-1); setFinished(false)}}>
                  Go Back
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleReview()}>
                    Review
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizlet;
