import { get } from '../utils/agent';
//import { ICourse } from '../interfaces/ICourse';
import { coursesPath } from '../constants/endpoint';

export class CoursesApi {
  async list(user) {
    try {
      const result = await get(`${coursesPath}/user/${user}`);
      console.log(result, 'olha o result');
      return result
    } catch (err) {
      throw err;
    }
  }

}
const coursesApi = new CoursesApi();

export default coursesApi;
