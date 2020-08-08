import React, {createContext, useContext, useState, } from 'react';
import { get } from '../../utils/agent';
import { listsPath } from '../../constants/endpoint';
import { IList } from '../../interfaces/IList';

export interface IListsContext {
  lists: Array<IList>
  isLoading: boolean
  error: any
  getLists: () => void;
}

function Lists(user: number): IListsContext {
  const [lists, setLists] = useState(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getLists = async () => {
    setError(undefined);
    setLists(undefined!);
    setIsLoading(true);
    try {
      const lists = await get(`${listsPath}/user/${user}`);
      setLists(lists);
    } catch (e) {
      setError(e);
      setLists(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { lists, isLoading, error, getLists };
}

const ListsContext = createContext<IListsContext>({} as IListsContext)
export const useLists = () => useContext(ListsContext)

type IProviderProps = {
  children: React.ReactNode
};

const ListsProvider = ({children}: IProviderProps) => {
  return (
    <ListsContext.Provider value={Lists(10)}>
        {children}
    </ListsContext.Provider>
  )
}

export default ListsProvider;