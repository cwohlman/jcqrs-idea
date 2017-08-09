export default class CreatePostCommand {
  constructor(dependencyResolver) {
    this.Post = dependencyResolver.get('entity', 'post');
  }
  static type() {
    return 'command';
  }
  static name() {
    return 'createPost';
  }
  execute(original, { title, author }) {
    var post = new this.Post();

    post.title = title;
    post.author = author;

    return post;
  }
}