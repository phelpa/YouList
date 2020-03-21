import { get, post } from '../utils/agent';
//import { ICourse } from '../interfaces/ICourse';
import { coursesPath } from '../constants/endpoint';

export class CoursesApi {
  async list(user) {
    try {
      const result = await get(`${coursesPath}/user/${user}`);
      return result
    } catch (err) {
      throw err;
    }
  }

  async create() {


  }

}
const coursesApi = new CoursesApi();

export default coursesApi;
