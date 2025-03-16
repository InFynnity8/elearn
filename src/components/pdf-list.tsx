import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type PdfFile = {
  name: string;
  path: string;
};

const PdfList = () => {
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const param = useParams();
  console.log(param);

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
      <div className="w-full xl:w-3/4">
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
              className="w-full flex justify-center items-center"
            >
              <Page
                pageNumber={pageNumber}
                className="justify-center w-full flex "
              />
            </Document>
          </div>
        )}
      </div>

      {/* PDF List */}
      <div className="w-full bg-background overflow-auto h-screen xl:fixed xl:right-0 xl:w-[270px]">
        <div className="h-17 flex items-center justify-between font-medium text-[17px] w-full px-5 border-b-[1px] border-t-[1px]">
          <h1>Books</h1>
          <IoIosClose size={20} className="hover:cursor-pointer" />
        </div>
        {pdfs.map((pdf) => (
          <div key={pdf.name}>
            <button
              className={`block h-20 w-full border-b-[1px] p-2 text-left ${
                selectedPdf === pdf.path
                  ? "bg-blue-500 text-white"
                  : "bg-background"
              }`}
              onClick={() => {setSelectedPdf(pdf.path); setPageNumber(1)}}
            >
              <div className="flex items-start">
                <div className="truncate h-5">
                  <h1 className="leading-5 truncate">
                    {pdf.name.slice(0, -4)}
                  </h1>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfList;
