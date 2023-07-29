import css from "./modal.module.css";
export const Modal = ({onClose, component}) => {
    const closeModal=()=>onClose();
    const clickHandler=e=>{
        e.stopPropagation()
    }
  return (
    <div className={css.wrapper} onClick={closeModal}>
      <div className={css.component}onClick={clickHandler}>{component}</div>
    </div>
  );
};
