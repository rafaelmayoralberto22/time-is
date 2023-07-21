import { type FetchBaseService } from "../../../share/domain/FetchBaseService";

export class BaseService {
  fetch({ url = "", params }: FetchBaseService): Promise<any> {
    return fetch(url, {
      ...params,
      headers: {
        ...params?.headers,
        "content-type": "application/json",
      },
    });
  }
}
