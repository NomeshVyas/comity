import React, { useState } from "react";
import AboutContext from "./aboutContext";
import useApi from "../../Hooks/useApi";
import { apiAboutUrl } from "../../services/api.url";

const AboutState = (props) => {
  // Calling all about data api
  const getAllAboutService = useApi(apiAboutUrl.aboutAllData);
  const [allAbouts, setAllAbouts] = useState([]);

  const getAllAbout = async () => {
    const res = await getAllAboutService.call();
    if (res?.response?.result?.abouts) 
        setAllAbouts(res.response.result.abouts);
  };

  // Calling delete api and handle delete button
  const getDeleteAboutService = useApi(apiAboutUrl.deleteAbout);

  const handleDelete = async (id) => {
    const res = await getDeleteAboutService.call({
      aboutId: id,
    });
    getAllAbout();
    console.log(res);
  };

  // Calling create new about section api and handing create button
  const [aboutCreate, setAboutCreate] = useState({
    content: "",
    showThis: true,
  });

  const getCreateAboutService = useApi(apiAboutUrl.createAbout);

  const handleCreate = async () => {
    const res = await getCreateAboutService.call(aboutCreate);
    console.log(res);
    getAllAbout();
    setAboutCreate({
      content: "",
      showThis: true,
    });
  };

  // Handling edit about section
  const [openEditModal, setOpenEditModal] = useState(false);

  const [editAbout, setEditAbout] = useState({
    content: "",
    showThis: true,
  });

  const handleEditButton = (about) => {
    setEditAbout(about);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

//   Calling update about api and handing update button
  const getUpdateAboutService = useApi(apiAboutUrl.updateAbout);

  const handleUpdate = async (about) => {
    const res = await getUpdateAboutService.call(about);
    console.log(about);
    getAllAbout();
    console.log(res.response);
    setOpenEditModal(false);
}

const handleDeleteInModal = (id) => {
    handleDelete(id);
    setOpenEditModal(false);
  }

  return (
    <AboutContext.Provider
      value={{
        allAbouts,
        getAllAbout,
        handleDelete,
        aboutCreate,
        handleCreate,
        setAboutCreate,
        openEditModal,
        setOpenEditModal,
        handleEditButton,
        editAbout,
        setEditAbout,
        closeEditModal,
        handleUpdate,
        handleDeleteInModal,
      }}
    >
      {props.children}
    </AboutContext.Provider>
  );
};

export default AboutState;
