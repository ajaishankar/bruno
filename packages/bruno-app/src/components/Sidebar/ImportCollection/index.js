import React from 'react';
import importBrunoCollection from 'utils/importers/bruno-collection';
import importPostmanCollection from 'utils/importers/postman-collection';
import { toastError } from 'utils/common/error';
import Modal from 'components/Modal';

const ImportCollection = ({ onClose, handleSubmit }) => {
  const handleImportBrunoCollection = () => {
    importBrunoCollection()
      .then((collection) => {
        handleSubmit(collection);
      })
      .catch((err) => toastError(err, 'Import collection failed'));
  };

  const handleImportPostmanCollection = () => {
    importPostmanCollection()
      .then((collection) => {
        handleSubmit(collection);
      })
      .catch((err) => toastError(err, 'Postman Import collection failed'));
  };

  return (
    <Modal size="sm" title="Import Collection" hideFooter={true} handleConfirm={onClose} handleCancel={onClose}>
      <div>
        <div
          className='text-link hover:underline cursor-pointer'
          onClick={handleImportBrunoCollection}
        >
          Bruno Collection
        </div>
        <div
          className='text-link hover:underline cursor-pointer mt-2'
          onClick={handleImportPostmanCollection}
        >
          Postman Collection
        </div>
      </div>
    </Modal>
  );
};

export default ImportCollection;
