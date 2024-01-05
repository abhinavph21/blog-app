const posts = [
    {
        id: 1,
        title: "post1",
        body: "body1",
        userId: 1
    },
    {
        id: 2,
        title: "post2",
        body: "body2",
        userId: 1
    },
    {
        id: 3,
        title: "post3",
        body: "body3",
        userId: 2
    },
    {
        id: 4,
        title: "post4",
        body: "body4",
        userId: 2
    }
]
export const getPosts = async () => {
    return posts
}