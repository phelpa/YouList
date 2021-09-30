import React, { createContext, useContext, useState } from 'react'

import { listsPath } from '../../constants/endpoint'
import httpClient from '../../infra/http/axios-http-client/axios-http-client'
import { IList, IListResponse, ICreateList } from '../../interfaces/IList'

export interface IListsContext {
  lists: Array<IList>
  isLoading: boolean
  error: any
  getLists: (user_id: number) => void
  isAdding: boolean
  errorAddList: any
  addList: (list: ICreateList) => void
}

function Lists(): IListsContext {
  const [lists, setLists] = useState<IList[]>(undefined!)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  const getLists = async (user_id: number) => {
    setError(undefined)
    setLists(undefined!)
    setIsLoading(true)
    try {
      const { lists } = await httpClient.get<IListResponse>(
        `${listsPath}/get_lists`,
        {
          user_id
        }
      )
      setLists(lists)
    } catch (e) {
      setError(e)
      setLists(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  const [isAdding, setIsAdding] = useState(false)
  const [errorAddList, setErrorAddList] = useState(undefined)

  const addList = async (listPayload: ICreateList) => {
    setErrorAddList(undefined)
    setIsAdding(true)
    try {
      const { list }: any = await httpClient.post(
        `${listsPath}/add_list`,
        listPayload
      )
      setLists([...lists, list])
    } catch (e) {
      setError(e)
      setLists(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  return { lists, isLoading, error, getLists, isAdding, errorAddList, addList }
}

const ListsContext = createContext<IListsContext>({} as IListsContext)

type IProviderProps = {
  children: React.ReactNode
}

const ListsProvider = ({ children }: IProviderProps) => {
  return (
    <ListsContext.Provider value={Lists()}>{children}</ListsContext.Provider>
  )
}

export const useLists = () => useContext(ListsContext)

export default ListsProvider
