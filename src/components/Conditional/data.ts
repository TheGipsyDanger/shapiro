import { withChildren } from '../../utils';

export interface IConditional extends withChildren {
  render: boolean;
}

export interface IConditionalLayout extends IConditional {}
