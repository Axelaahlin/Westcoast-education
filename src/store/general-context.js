import React, { useState } from 'react';

const GeneralContext = React.createContext({
  modalStatus: false, 
  modalContent: '',
  modalContentHandler: () => {},
  showModal: () => {}, 
  hideModal: () => {},
})

export const GeneralContextProvider = (props) => {
  const [modalStatus, setModalStatus] = useState(false)
  const [modalContent, setModalContent] = useState('teacher')

  const showModalHandler = () => {
    setModalStatus(true)
  }

  const hideModalHandler = () => {
    setModalStatus(false)
  }

  const modalContentHandler = (content) => {
    setModalContent(content)
  }

  return (
    <GeneralContext.Provider
      value={{
        modalStatus,
        modalContent,
        showModal: showModalHandler, 
        hideModal: hideModalHandler,
        modalContentHandler,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralContext; 