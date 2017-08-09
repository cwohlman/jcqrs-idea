import JQRS from 'jqrs';

import * as Commands from './commands';
import * as Events from './events';
import * as Types from './types';

JQRS.registerAll(Commands);
JQRS.registerAll(Events);
JQRS.registerAll(Types);

JQRS.autoCreateRepositoriesForTypes(
  // XXX mongo url
);

JQRS.autoCreateEndpointsForCommands(
  // XXX node endpoint, e.g. connect or express
);

JQRS.autoCreateGraphQLEndpointForQueries(
  // XXX node endpoint, e.g. connect or express
);
