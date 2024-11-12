"use strict";
var _a;
let posts = [];
const myPost = {
    userId: 100,
    postId: 1234,
    title: "Luca die 🦚",
    body: {
        topic: undefined,
        explanation: "Add functionality"
    }
};
posts.push((_a = myPost.body.topic) !== null && _a !== void 0 ? _a : "No Topic");
console.log(posts);
