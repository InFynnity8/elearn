import { IoIosClose } from "react-icons/io";
import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const Lessons = () => {
  return (
    <div className="-m-4 flex h-[110%] ">
      <div className="w-[700px]">
        {/* player */}
        <div className="">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/uBGl2BujkPQ?si=Slrq_Vx5tpq3RqQI"
            title="YouTube video player"
            framedorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* notes */}
        <div className=" w-[700px]">
          <h1 className="font-bold my-2 w-[700px] flex text-center pl-5">Take Notes here</h1>
          <Textarea className="bg-background w-[670px] p-5 h-[240px]" placeholder="Type here ..."/>
        </div>
      </div>

      {/* Table of contents */}
      <div className="bg-background right-0 overflow-scroll fixed h-full">
        <div className=" flex items-center justify-between font-bold text-[17px] w-full px-5 py-2 border-b-[1px] border-t-[1px]">
          <h1>Course content</h1>
          <IoIosClose size={20} className="hover:cursor-pointer" />
        </div>
        <ul>
          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>1. Welcome to tht course</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">17min</p>
            </div>
          </li>
          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>2. Introduction to Human Anatomy</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">25min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>3. Skeletal System: Structure and Function</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">30min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>4. Muscular System and Movement</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">22min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>5. Nervous System: Brain and Nerves</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">28min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>6. Circulatory System: Heart and Blood Vessels</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">35min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>7. Respiratory System: Lungs and Oxygen Exchange</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">20min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>8. Digestive System: Breaking Down Food</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">27min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>9. Endocrine System: Hormones and Regulation</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">18min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>10. Urinary System: Kidneys and Filtration</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">15min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>11. Immune System: Defense Against Pathogens</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">23min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>12. Reproductive System: Human Development</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">19min</p>
            </div>
          </li>

          <li className="px-5 py-2 border-b-[1px]">
            <div className="flex items-center">
              <Input type="checkbox" className="w-4 cursor-pointer mr-2" />
              <h1>13. Conclusion and Final Review</h1>
            </div>
            <div className="px-7 flex items-center">
              <MdOutlineLiveTv />
              <p className="text-gray-400 text-[12px] mx-1">10min</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lessons;
