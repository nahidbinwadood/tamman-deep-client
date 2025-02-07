/* eslint-disable react/prop-types */
import { Dialog } from '@/Components/ui/dialog';
const Modal = ({ open, setOpen, children, setActiveTab }) => {
  if (setActiveTab) {
    if (!open) {
      setActiveTab('My Cards');
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
    </Dialog>
  );
};

export default Modal;
