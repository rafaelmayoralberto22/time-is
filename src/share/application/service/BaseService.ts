export class BaseService {
  async fetch({ url = "", params }: { url: string; params?: RequestInit }) {
    try {
      return fetch(url, {
        ...params,
        headers: {
          ...params?.headers,
          "content-type": "application/json",
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
