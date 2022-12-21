import Axios from "axios";

export default async function handler(req, res) {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const headers = {
          "x-apisecret": "fe5183cc3dea12bd0ce299cf110a75a2",
          "x-apikey": "iphoneap",
        };

        const result = await Axios.get(
          "https://www.yogiyo.co.kr/api/v1/restaurants-geo/?items=60&lat=37.5455334&lng=127.07801016&order=rank&page=0&search=",
          { headers: headers }
        ).then((res) => {
          console.log(res.data);
          return res.data;
        });

        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
