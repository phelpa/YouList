import React, { createContext, useContext, useState } from 'react';
import { get, post } from '../../utils/agent';
import { listsPath } from '../../constants/endpoint';
import { IList, ICreateList } from '../../interfaces/IList';

export interface IListsContext {
  lists: Array<IList>;
  isLoading: boolean;
  error: any;
  getLists: (user_id: number) => void;
  isAdding: boolean;
  errorAddList: any;
  addList: (list: ICreateList) => void;
}

function Lists(): IListsContext {
  const [lists, setLists] = useState<IList[]>(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getLists = async (user_id: number) => {
    setError(undefined);
    setLists(undefined!);
    setIsLoading(true);
    try {
      const lists = await get(`${listsPath}/user/${user_id}`);
      setLists(lists);
    } catch (e) {
      setError(e);
      setLists(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  const [isAdding, setIsAdding] = useState(false);
  const [errorAddList, setErrorAddList] = useState(undefined);

  const addList = async (list: ICreateList) => {
    setErrorAddList(undefined);
    setIsAdding(true);
    try {
      const { data }: any = await post(`${listsPath}`, list);
      setLists([...lists, data]);
    } catch (e) {
      setError(e);
      setLists(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { lists, isLoading, error, getLists, isAdding, errorAddList, addList };
}

const ListsContext = createContext<IListsContext>({} as IListsContext);

type IProviderProps = {
  children: React.ReactNode;
};

const ListsProvider = ({ children }: IProviderProps) => {
  return (
    <ListsContext.Provider value={Lists()}>{children}</ListsContext.Provider>
  );
};

export const useLists = () => useContext(ListsContext);

export default ListsProvider;
