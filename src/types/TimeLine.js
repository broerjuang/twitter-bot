// @flow
import type {Status} from './Status';
import type {User} from './User';

export type Timeline = Status & {user: User};
