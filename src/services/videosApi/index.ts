import { get } from '../../utils/agent';
import { coursePath } from '../../constants/endpoint';

export class VideosApi {
  async list(courseId: number) {
    try {
      const result = await get(`${coursePath}/${courseId}/videos`);
      return result
    } catch (err) {
      throw err;
    }
  }
}
const videosApi = new VideosApi();

export default videosApi;
