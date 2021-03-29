import { createAction, props } from '@ngrx/store';
import ToDo from './todo.model';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<ToDo>()
);

export const BeginGetToDoAction = createAction(
    '[ToDo] - BeginGetToDoAction'
)

export const SuccessGetToDoAction = createAction(
    '[ToDo] - SuccessGetToDoAction',
    props<{ payload: ToDo[] }>()
)

export const BeginCreateToDoAction = createAction(
    '[ToDo] - BeginCreateToDoAction',
    props<{ payload: ToDo }>()
)

export const SuccessCreateToDoAction = createAction(
    '[ToDo] - SuccessCreateToDoAction',
    props<{ payload: ToDo }>()
)

export const ErrorToDoAction = createAction(
    '[ToDo] - ErrorToDoAction',
    props<Error>()
)