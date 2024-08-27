import Modal from "./Modal";

const NoticeModal = ({ title, contents, showMessage, close }) => {
  return (
    <div>
      {showMessage && (
        <Modal onClose={close}>
          <div className="w-full h-full flex flex-col justify-center items-center px-10 gap-5">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{contents}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NoticeModal;
