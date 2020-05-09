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
  const subUrl = "/api/post/?page=0&size=10&sort=createAt,desc";
  let data;
  await axios
    .get(baseUrl + subUrl, { headers: { Authorization: "Bearer " + token } })
    .then((response) => {
      data = response
    });
  return data;
}

export const postNotice = async (token: string, formData: any) => {
  const subUrl = "/api/post/upload"
  await axios({
    method: "post",
    url: baseUrl + subUrl,
    data: formData,
    headers: { "Content-Type": "multipart/form-data, boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm, charset=UTF-8", Authorization: "Bearer " + token }
  })
}

