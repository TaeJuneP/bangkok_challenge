import axios from "axios";

const baseUrl = "http://54.180.180.121:8080";
const baseUrl1 = "http://f46f4821.ngrok.io";
export const kakaoLogin = async (token: string) => {
  const subUrl = "/api/account/login";
  let data: any;
  await axios
    .post(
      baseUrl + subUrl,
      {
        key: token,
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response: any) => {
      console.log(response);
      data = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getNotices = async (token: string, page: string) => {
  const subUrl = `/api/post/?page=${page}&size=10`;
  let data;
  await axios
    .get(baseUrl + subUrl, { headers: { Authorization: "Bearer " + token } })
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const postNotice = async (token: string, formData: any) => {
  const subUrl = "/api/post/upload";
  await axios({
    method: "post",
    url: baseUrl + subUrl,
    data: formData,
    headers: {
      "Content-Type":
        "multipart/form-data, boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm, charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const getCommentList = async (id: string, token: string) => {
  const subUrl = `/api/post/${id}/comment`;
  let data;
  await axios
    .get(baseUrl + subUrl, { headers: { Authorization: "Bearer " + token } })
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const postComment = async (
  id: string,
  token: string,
  content: string
) => {
  const subUrl = `/api/post/${id}/comment`;
  let data;
  await axios({
    method: "post",
    url: baseUrl + subUrl,
    data: { content },
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(async () => {
    await getCommentList(id, token).then((response: any) => {
      data = response.data;
    });
  });
  return data;
};

export const putLikeStatus = async (id: string, token: string) => {
  const subUrl = `/api/like/${id}`;
  let data;
  await axios({
    method: "put",
    url: baseUrl + subUrl,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    data = response;
  });
  return data;
};

export const checkLoginToken = async (token: string) => {
  const subUrl = `/oauth/check_token?token=${token}`;
  let data;
  await axios({
    method: "get",
    url: baseUrl + subUrl,
  }).then((response) => {
    data = response;
  });
  return data;
};
