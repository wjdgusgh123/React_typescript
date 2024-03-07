class Post{
    constructor(public id: number = 0, protected title: string = ''){
        this.id = id;
        this.title = title;
    }

    getPost(){
        return `postID ${this.id}, postTitle: ${this.title}`;
    }
}
class PostB extends Post{
    getPost(){
        return this.title;
    }
}

const post: Post = new Post(1, "title 1");

console.log(post.id); // 1
console.log(post.title); // title 1