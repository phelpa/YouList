import React, { useEffect } from 'react';
import List from './List';
import { IList } from '../../interfaces/IList';
import CreateListModal from './CreateListModal';
import ActionIcon from '../Shared/ActionIcon';
import { useLists } from '../../providers/lists';
import useModal from '../../hooks/useModal';
import { FlexWrapper } from '../Shared/FlexWrapper';

const ListGrid = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const { lists, isLoading, getLists } = useLists();

  useEffect(() => {
    getLists(10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-100">
      <FlexWrapper>
        {isLoading && <div>Carregando...</div>}
        {lists?.map((list: IList, i: number) => (
          <List key={i} list={list} />
        ))}
        <ActionIcon
          description="Adicionar nova lista"
          callback={openModal}
          icon="videocam"
        />
        {isOpen && <CreateListModal closeModal={closeModal} />}
      </FlexWrapper>
    </div>
  );
};

export default ListGrid;
