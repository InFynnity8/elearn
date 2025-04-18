import { useEffect, useState } from "react";
import { IoIosClose, IoIosOpen } from "react-icons/io";
// import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import biologyCover from "../ui/assets/bookcover/biology_textbook.png";
import chemistryCover from "../ui/assets/bookcover/chemistry.jpg";
import mathCover from "../ui/assets/bookcover/maths.png.jpg";
import physicsCover from "../ui/assets/bookcover/physics1.jpg";
// import coreMaths from "../../assets/bookcover/coremaths.png";
// import interScience from "../../assets/bookcover/interscience-removebg-preview.png";
// import social from "../../assets/bookcover/social.jpg";
// import english from "../../assets/bookcover/english.jpg";
import geo from "../ui/assets/bookcover/geog.webp";
import agric from "../ui/assets/bookcover/Agric.png";
import ICT from "../ui/assets/bookcover/ICT-removebg-preview.png";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const covers = [
  biologyCover,
  chemistryCover,
  physicsCover,
  mathCover,
  geo,
  agric,
  ICT,
];

type PdfFile = {
  name: string;
  path: string;
};

const PdfList = () => {
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isScrollable, setIsScrollable] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  // const {subject} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.electronAPI.getPdfs().then((pdfList: PdfFile[]) => {
      setPdfs(pdfList);
      if (pdfList.length > 0) {
        setSelectedPdf(pdfList[0].path); // Default to first PDF
      }
    });
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:items-start items-center">
      {/* PDF Reader */}
      <div
        className={`w-full ${
          sidebar ? "xl:w-[calc(100%-274px)]" : "xl:w-full"
        }`}
      >
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer hover:text-blue-400 flex items-center justify-start m-2"
        >
          <MdArrowBack />
          <p>Go Back</p>
        </div>
        {selectedPdf && (
          <div className="flex flex-col items-center p-4">
            {/* Pagination Controls */}
            <div className="w-full mb-4 flex justify-between">
              <div className="flex items-center flex-1 justify-start">
                <Button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber((prev) => prev - 1)}
                  className="mr-2"
                >
                  Prev
                </Button>

                <Button
                  disabled={pageNumber >= (numPages || 1)}
                  onClick={() => setPageNumber((prev) => prev + 1)}
                >
                  Next
                </Button>
              </div>
              <Button
                onClick={() => setIsScrollable((prev) => !prev)}
                className={`hover:text-white ${
                  isScrollable
                    ? "text-white bg-blue-400"
                    : "text-blue-500 bg-white"
                }`}
              >
                Paginate
              </Button>
              <div className="w-[100px] flex flex-1 items-center justify-end">
                Page{" "}
                <Input
                  value={pageNumber}
                  onChange={(e) => setPageNumber(Number(e.target.value))}
                  type="text"
                  className="bg-background w-15 mx-2"
                  placeholder="Type page number here"
                />
                of {numPages}
              </div>
            </div>
            <Document
              file={selectedPdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              className="w-full flex justify-center items-center flex-col"
            >
              {isScrollable ? (
                Array.from({ length: numPages }, (_, index) => (
                  <Page key={index} pageNumber={index + 1} className="mb-4" />
                ))
              ) : (
                <Page
                  pageNumber={pageNumber}
                  className="justify-center w-full flex "
                />
              )}
            </Document>
          </div>
        )}
      </div>

      {/* PDF List */}
      {!sidebar ? (
        <Button
          onClick={() => setSidebar(true)}
          className="rounded-l-[50%]  z-50 fixed top-[100px] right-0 bg-blue-400 opacity-25 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          <IoIosOpen size={20} className="text-white" />
        </Button>
      ) : (
        <div className="w-full bg-background overflow-auto h-screen xl:fixed xl:right-0 xl:w-[270px]">
          <div className="h-17 flex items-center justify-between font-medium text-[17px] w-full px-5 border-b-[1px] border-t-[1px]">
            <h1>Books</h1>
            <IoIosClose
              size={20}
              className="hover:cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </div>
          {pdfs.map((pdf, index) => (
            <div key={pdf.name}>
              <button
                className={`block h-20 w-full border-b-[1px] p-2 text-left ${
                  selectedPdf === pdf.path
                    ? "bg-blue-500 text-white"
                    : "bg-background"
                }`}
                onClick={() => {
                  setSelectedPdf(pdf.path);
                  setPageNumber(1);
                }}
              >
                <div className="flex items-center  h-full w-full">
                  <img
                    src={covers[index]}
                    alt="cover"
                    width={50}
                    height={50}
                    className="mr-2"
                  />
                  <div className="truncate h-full flex items-center w-full">
                    <h1 className="truncate leading-5 w-full">
                      {pdf.name.slice(0, -4)}
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfList;
