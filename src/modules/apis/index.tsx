import axios from "axios";

const baseUrl = "http://54.180.180.121:8080";

export const kakaoLogin = async (token: string, ) => {
  const subUrl = "/api/account/login";
  let data: any;
  await axios
    .post(
      baseUrl + subUrl,
      {
        "key": token
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response: any) => {
      console.log(response);
      data = response.data;
    }).catch(err => {
      console.log(err)
    });
  return data;
};

export const getNotices = async (token: string) => {
  const subUrl = "/api/post/";
  let data;
  await axios
    .get(baseUrl + subUrl, { headers: { Authorization: "Bearer " + token } })
    .then((response) => {
      data = response
    });
  return data;
}

export const postNotice = async (token: string, data: any) => {
  const subUrl = "/api/post/upload"
  console.log(data.get("file"))
  await axios
    .post(
      baseUrl + subUrl,
      {
        "Content-Disposition": data
      },
      { headers: { "Content-Type": "multipart/form-data, boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm, charset=UTF-8", Authorization: "Bearer " + token } }
    )
    .then((response: any) => {
      console.log(response);
      data = response;
    }).catch(err => {
      console.log(err)
    });

}

