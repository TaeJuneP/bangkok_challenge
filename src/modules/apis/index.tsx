import axios from "axios";

const baseUrl = "https://api.promissu.com";

export const loginApi = async (id: string, pw: string) => {
  const subUrl = "/group/login";
  let data: any;
  await axios
    .post(
      baseUrl + subUrl,
      {
        code: id,
        passwd: pw
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response: any) => {
      data = response.data.payload;
    });
  return data;
};

