import { useGlobalContext } from "../Context";

const Modal = () => {

    const {closeModal, selectedMeal } = useGlobalContext();

    const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;
    
    return(
        <aside className="modal-overlay" onClick={() => closeModal()}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <img src={image} alt={title} className="img modal-img" />
                <div className="modal-content">
                    <h4>{title}</h4>
                    <p>Cooking Instructions</p>
                    <p>{text}</p>
                    <a href={source} target="_blank" rel="noopener noreferrer">Original Source</a>
                    <button className="btn btn-hipster " onClick={closeModal}>Close</button>
                </div>
            </div>
        </aside>
    );

}

export default Modal;

/**
 function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
}

function App() {
  const [modalShown, toggleModal] = React.useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>modalShown: {modalShown.toString()}</p>
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        Toggle Modal
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <h1>Look! I'm inside the modal!</h1>
      </Modal>
    </div>
  );
}
 */