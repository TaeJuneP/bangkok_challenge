import React from 'react';
import HashTag from "./index"

export default {
    title: 'atom',
    component: HashTag,
};

const hashTags=[{id:0,content:"#test"},{id:0,content:"#test1"}]

export const hashTag = () => < HashTag hashtag={hashTags}
/>