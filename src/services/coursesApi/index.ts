import { get, post } from '../../utils/agent';
import { IList, ICreateList, ICreateListResponse } from '../../interfaces/IList';
import { listsPath } from '../../constants/endpoint';

export class ListsApi {
  async list(user: number) {
    try {
      const result = await get(`${listsPath}/user/${user}`);
      return result
    } catch (err) {
      throw err;
    }
  }

  async create(data: ICreateList): Promise<ICreateListResponse> {
    try {
      const result = await post(listsPath, data);
      return result;

    } catch (err) {
      throw err
    }

  }

}
const coursesApi = new ListsApi();

export default coursesApi;
