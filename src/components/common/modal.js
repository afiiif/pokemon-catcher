import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

const DEFAULT_MODAL_PROPS = {
  contentLabel: 'App Modal',
  closeTimeoutMS: 150,
};

export default function Modal({
  children, ...props
}) {
  return (
    <ReactModal
      {...DEFAULT_MODAL_PROPS}
      {...props}
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
