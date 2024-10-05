import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import AddEditNotes from "./AddEditNotes";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
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
        onClick={() => {
          setOpenAddEditModel({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModel.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          onclose={() =>
            setOpenAddEditModel({ isShown: false, type: "add", data: null })
          }
          noteData={openAddEditModel.data}
          type={openAddEditModel.type}
        />
      </Modal>
    </>
  );
};

export default Home;
