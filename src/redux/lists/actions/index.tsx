import { baseService } from '../../../constants/endpoint'
import httpClient from '../../../infra/http/axios-http-client/axios-http-client'
import {
  ICreateList,
  IListGetResponse,
  IListPostResponse,
} from '../../../interfaces/IList'
import { store } from '../../store'
import { listsSlice } from '../slice'

export class ListsActions {
  public async getLists(user_id: number): Promise<void> {
    const { lists } = await httpClient.get<IListGetResponse>(
      `${baseService}/get_lists`,
      {
        user_id,
      }
    )
    store.dispatch(listsSlice.actions.set(lists))
  }

  public async addList(listPayload: ICreateList): Promise<void> {
    const { list } = await httpClient.post<IListPostResponse>(
      `${baseService}/add_list`,
      listPayload
    )
    store.dispatch(listsSlice.actions.add(list))
  }
}

const listsActions = new ListsActions()
export default listsActions
