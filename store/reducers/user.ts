import { ArticleProp } from '../../components/ListItem';

const initialState = {
  clips: []
}
export type ReducerProps = {
  type: string
  clip: ArticleProp
}

const reducer = (state = initialState, action: ReducerProps) => {

  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip]
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter((clip: ArticleProp) => clip.url !== action.clip.url)
      }
    default:
      return state
  }

}

export default reducer;
