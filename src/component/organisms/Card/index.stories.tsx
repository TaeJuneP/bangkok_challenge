import React from 'react';
import Card from "./index"

export default {
    title: 'organisms',
    component: Card,
};

const notice = {
    "createdAt": "2020-06-05 17:08:53",
    "modifiedAt": "2020-06-05 17:08:53",
    "accountId": "1363605261",
    "id": 45,
    "article": "test",
    "nickname": "박태준",
    "profile_photo": "http://k.kakaocdn.net/dn/jAifn/btqBpY1gzJl/XpCUZvd9kV19OCq9AsZ5J0/img_640x640.jpg",
    "selfLike": false,
    "commentCount": 0,
    "likeCount": 0,
    "filePath": "https://jayass3cloud.s3.ap-northeast-2.amazonaws.com/10-Golden-Gate-Bridge.jpg",
    "hashTags": [{ "id": 39, "content": "#HashTag" }]
}

const loginInfo = {
    login: true,
    token: "a6e9997a-253b-4223-80ca-fcc40227b9a4",
    user: { id: "1330180091", nickname: "박태준", img: "http://k.kakaocdn.net/dn/jAifn/btqBpY1gzJl/XpCUZvd9kV19OCq9AsZ5J0/img_640x640.jpg" }
}
export const card = () => < Card notice={notice} loginInfo={loginInfo} />