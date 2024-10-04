import React from "react";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max:md:m-5">
          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 5am"}
            date={"3 nov"}
            content={"i have to complete my all the assingment"}
            tags={"#learning"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2B85FF] hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
    </>
  );
};

export default Home;
