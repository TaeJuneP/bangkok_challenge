import React from 'react';
import CardButtons from "./index"

export default {
    title: 'molecules',
    component: CardButtons,
};



let selfLike = false
const putLike = () => {
    selfLike = !selfLike
}

export const cardButtons = () => < CardButtons selfLike={selfLike} putLike={putLike} />
