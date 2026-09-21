import './page.js';
import { initCollapsible, mountLearningResource } from './lr-kit.js';
import { config } from './config.js';

initCollapsible();
mountLearningResource(config);
