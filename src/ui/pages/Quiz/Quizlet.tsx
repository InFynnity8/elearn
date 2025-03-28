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
    questionText:
      "Which type of wave requires a medium to propagate?",
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
    questionText:
      "What is the SI unit of electric charge?",
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
    questionText:
      "What is the pH of a neutral solution at 25°C?",
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
    questionText:
      "What is the chemical formula for ammonia?",
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
      { answerText: "They have a complete outer electron shell", isCorrect: true },
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
    questionText:
      "Solve for x: 2x² - 5x - 3 = 0",
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
    questionText:
      "Find the derivative of f(x) = 3x³ - 5x² + 2x - 7.",
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
    questionText:
      "If A = [ 2  3 ] and B = [ 1  -1 ], what is A + B?",
    answerOptions: [
      { answerText: "[3 2]", isCorrect: false },
      { answerText: "[3 2; 3 -2]", isCorrect: false },
      { answerText: "[3 2; -1 2]", isCorrect: false },
      { answerText: "[3 2; 3 -1]", isCorrect: true },
    ],
    isAnswered: false,
    answer: "[3 2; 3 -1]",
    answerIndex: 3,
  },
  {
    questionText:
      "Find the sum of the first 10 terms of the arithmetic sequence 3, 7, 11, 15, ...",
    answerOptions: [
      { answerText: "360", isCorrect: false },
      { answerText: "280", isCorrect: true },
      { answerText: "260", isCorrect: false },
      { answerText: "300", isCorrect: false },
    ],
    isAnswered: false,
    answer: "280",
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
    questionText:
      "Solve for x: log₂(x) + log₂(4) = 3",
    answerOptions: [
      { answerText: "4", isCorrect: false },
      { answerText: "8", isCorrect: true },
      { answerText: "16", isCorrect: false },
      { answerText: "2", isCorrect: false },
    ],
    isAnswered: false,
    answer: "8",
    answerIndex: 1,
  },
  {
    questionText:
      "Find the area of a triangle with base 8cm and height 5cm.",
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
    questionText:
      "Find the modulus of the complex number 3 + 4i.",
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
    questionText:
      "Find the determinant of the matrix: | 2  3 | | 4  5 |.",
    answerOptions: [
      { answerText: "2", isCorrect: false },
      { answerText: "-2", isCorrect: false },
      { answerText: "-1", isCorrect: false },
      { answerText: "-2", isCorrect: true },
    ],
    isAnswered: false,
    answer: "-2",
    answerIndex: 3,
  },
];


const Quizlet = () => {
  const { subject } = useParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState(subject === "biology" ? biology : subject === "physics" ? physics : subject === "chemistry" ? chemistry : emathematics);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number | null>
  >({});

  const questionNav = (index: number) => {
    setAnswered(false);
    setQuestionNumber(index);
  };

  const handleSelectedAnswer = (index: any, isCorrect: boolean) => {
    if (!answered) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionNumber]: index, // Store selected index for the current question
      }));
      setAnswered(true);

      // if (isCorrect) {
      //   setScore((prevScore) => prevScore + 1);
      // }

      // Update isAnswered for the current question
      setQuizQuestions((prevQuestions) =>
        prevQuestions.map((question, qIndex) =>
          qIndex === questionNumber
            ? { ...question, isAnswered: true }
            : question
        )
      );
    }
  };

  const handleNext = () => {
    setAnswered(false);
    setQuestionNumber(questionNumber + 1);
  };

  const handleFinish = () => {
    quizQuestions.map((question, ind) => {
      if (question.answerIndex === selectedAnswers[ind]) {
        setScore((prevScore) => prevScore + 1);
      }
    });
  };

  const handleDone = () => {
    setScore(0)
  }

  return (
    <div className="p-4">
      <div className="flex items-center xl:items-start justify-between xl:flex-row flex-col">
        {/* Display question*/}
        <div className="flex-1">
          <h1 className="my-2 font-medium text-[16px] text-blue-400 capitalize">
            {subject} Quiz
          </h1>
          <Card className="p-4 my-4">
            <h1>{quizQuestions[questionNumber].questionText}</h1>
            <div className="flex flex-col">
              {quizQuestions[questionNumber].answerOptions.map(
                (option, index) => (
                  <Button
                    className={`${
                      selectedAnswers[questionNumber] === index
                        ? "bg-green-500 hover:bg-green-500 text-white"
                        : "bg-muted text-black"
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
                    <AlertDialogTitle>Score</AlertDialogTitle>
                    <AlertDialogDescription className="w-full flex justify-center items-center">
                      You can do better
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <p>
                    {" "}
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => handleDone()}>
                      Close
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDone()}>
                      Done
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
                    question.isAnswered && "bg-green-400 text-white"
                  } hover:bg-muted flex items-center justify-center h-15 w-17 cursor-pointer`}
                  onClick={() => questionNav(i)}
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
