import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import List from './List';
import { IList } from '../../interfaces/IList'
import CreateListModal from './CreateListModal';
import ActionIcon from '../Shared/ActionIcon';
import { useModalDispatch } from '../../providers/modal';
import { useLists } from '../../providers/lists';


interface ILists {
  lists: Array<IList>
}

const ListGrid = () => {
  const dispatch = useModalDispatch();
  const { lists, isLoading, getLists } = useLists();

  useEffect(()=> {
    getLists();
  }, [])

  return (
    <div className="w-100 bg-white ">
      <Nav/>
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {lists && lists.map((list: IList, i: number) =>
        <List key={i} list={list} />)}
        <ActionIcon
          description='Criar uma lista'
          callback={() => dispatch({type: 'OPEN_CREATE_COURSE'})}
          icon='videocam'
        />
        <CreateListModal/>
      </div>
    </div>
  );
};

export default ListGrid;