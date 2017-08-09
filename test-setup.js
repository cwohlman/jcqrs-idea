import JQRS from 'jqrs-testing';

import * as Commands from './commands';
import * as Events from './events';
import * as Types from './types';

var modules = new JQRS();

modules.registerAll(Commands);
modules.registerAll(Events);
modules.registerAll(Types);

modules.autoCreateRepositoriesForTypes(
  // XXX mongo url
  // other options
);

// Creates a wrapper around each type which permits test doubles, etc.
modules.mockAll();

export default modules;
