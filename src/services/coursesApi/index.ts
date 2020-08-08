import { get, post } from '../../utils/agent';
import { ICourse, ICreateCourse, ICreateCourseResponse } from '../../interfaces/ICourse';
import { coursesPath } from '../../constants/endpoint';

export class CoursesApi {
  async list(user: number) {
    try {
      const result = await get(`${coursesPath}/user/${user}`);
      return result
    } catch (err) {
      throw err;
    }
  }

  async create(data: ICreateCourse): Promise<ICreateCourseResponse> {
    try {
      const result = await post(coursesPath, data);
      return result;

    } catch (err) {
      throw err
    }

  }

}
const coursesApi = new CoursesApi();

export default coursesApi;
