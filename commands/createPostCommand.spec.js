import dependencyResolver from '../test-setup.js';
import CreatePostCommand from './createPostCommand.js';

describe('createPostCommand', function () {
  it('should have a dependency on postCreatedEvent', function () {
    const createPostCommand = new CreatePostCommand(dependencyResolver);

    expect(createPostCommand.postCreatedEvent).to.exist();
  });
});
