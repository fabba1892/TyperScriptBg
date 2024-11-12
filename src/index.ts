let posts: string[] = [];
type post = {
    userId: number;
    postId: number;
    title: string;
    body: { topic: any, explanation: string };
};

const myPost: post = {
    userId: 100,
    postId: 1234,
    title: "Luca die 🦚",
    body: {
        topic: undefined,
        explanation: "Add functionality"
    }
}

posts.push(myPost.body.topic ?? "No Topic");
console.log(posts);


