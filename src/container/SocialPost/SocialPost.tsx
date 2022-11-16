import Post from '../../components/Post'
import useStyles from './SocialPostStyle'
const Example = () => {
  const classes = useStyles()
  return (
    <div className={classes.containerSocialPost}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  )
}

export default Example