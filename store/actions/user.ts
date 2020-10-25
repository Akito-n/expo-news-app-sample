import { ArticleProp } from '../../components/ListItem';
const initialState: ArticleProp =
{
  title: '',
  author: '',
  urlToImage: '',
  publishedAt: '',
  url: ''
}
export const addClip = ({clip = initialState}) => {
  return({ type: 'ADD_CLIP', clip})
}
export const deleteClip = ({clip = initialState}) => {
  return({ type: 'DELETE_CLIP', clip})
}
