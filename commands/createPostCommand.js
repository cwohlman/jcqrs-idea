export default class CreatePostCommand {
  constructor(dependencyResolver) {
    this.PostsRepository = dependencyResolver.get('repository', 'postRepository');
    this.PostCreated = dependencyResolver.get('event', 'createPostEvent');
  }
  static type() {
    return 'command';
  }
  static name() {
    return 'createPost';
  }
  execute({ title, author }) {
    var createPostEvent = new this.PostCreated({ title, author });

    this.PostsRepository.applyEvent(null, createPostEvent);
  }
}