import React, { useEffect } from 'react';

import useModal from '../../hooks/useModal';
import { IList } from '../../interfaces/IList';
import { useLists } from '../../providers/lists';
import ActionIcon from '../Shared/ActionIcon';
import { FlexWrapper } from '../Shared/FlexWrapper';
import CreateListModal from './CreateListModal';
import List from './List';

const ListGrid = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const { lists, isLoading, getLists } = useLists();

  useEffect(() => {
    getLists(1);
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
