import { useState } from "react";

interface ScreenshotProps {
  src: string;
  alt: string;
}

interface ImageModalProps {
  handleCloseModal: () => void;
  src: string;
  alt: string;
}

const ImageModal = ({ alt, handleCloseModal, src }: ImageModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-screen w-screen cursor-pointer items-center justify-center bg-neutral-500 bg-opacity-90"
      onClick={handleCloseModal}
    >
      <div className="flex h-auto max-w-full items-center justify-center p-4">
        <img src={src} alt={alt} className="rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

const Screenshot = ({ src, alt }: ScreenshotProps) => {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const handleOpenModal = () => {
    setModalIsShowing(true);
  };

  const handleCloseModal = () => {
    setModalIsShowing(false);
  };

  return (
    <div className="flex items-center justify-center">
      {modalIsShowing ? (
        <ImageModal alt={alt} handleCloseModal={handleCloseModal} src={src} />
      ) : null}
      <div
        className="flex max-w-xl cursor-pointer items-center justify-center border border-neutral-500 bg-neutral-700 p-4 hover:bg-neutral-600"
        onClick={handleOpenModal}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Screenshot;
