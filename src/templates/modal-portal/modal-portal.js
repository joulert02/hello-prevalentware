import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal-portal.scss';

export default function ModalPortal({ children, isActive }) {

  const modalRoot =
    typeof document !== `undefined`
      ? document.getElementById('modal-root')
      : null;

  useEffect(() => {
    if (!modalRoot) return
  }, [modalRoot])

  if (modalRoot) {
    modalRoot.setAttribute("class", "f-modal-root");
    if(isActive) modalRoot.setAttribute("class", "f-modal-root--active");
    
    return createPortal(children, modalRoot);
  }
  return null
}
