import React, { useEffect } from 'react';
import List from './List';
import { IList } from '../../interfaces/IList'
import CreateListModal from './CreateListModal';
import ActionIcon from '../Shared/ActionIcon';
import { useLists } from '../../providers/lists';
import useModal from '../../hooks/useModal';

const ListGrid = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const { lists, isLoading, getLists } = useLists();

  useEffect(()=> {
    getLists(10);
  }, [])

  return (
    <div className="w-100 bg-white">
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {lists?.map((list: IList, i: number) =>
          <List key={i} list={list} />)}
        <ActionIcon
          description='Adicionar nova lista'
          callback={() => openModal()}
          icon='videocam'
        />
        {isOpen && <CreateListModal closeModal={() => closeModal()}/>}
      </div>
    </div>
  );
};

export default ListGrid;