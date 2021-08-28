import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import useModal from '../../hooks/use-modal';
import Modal from '../common/modal';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const modal = useModal();
  const { open, data, close } = modal;

  const success = (header, content, newProps) => open({
    type: 'success',
    header,
    content,
    props: newProps,
  });

  const info = (header, content, newProps) => open({
    type: 'info',
    header,
    content,
    props: newProps,
  });

  return (
    <ModalContext.Provider
      value={{
        success,
        info,
        close,
      }}
    >
      {children}
      <Modal {...modal.props} {...data.props}>
        <div className="text-center">
          {data.type === 'success'
            ? <FaCheckCircle className="text-7xl mx-auto my-4 text-gray-400" />
            : <FaInfoCircle className="text-7xl mx-auto my-4 text-gray-400" />}
          <h2 className="font-bold text-gray-900 text-lg">{data.header}</h2>
          <div className="pb-1 text-sm text-gray-700">{data.content}</div>
        </div>
      </Modal>
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node,
};
