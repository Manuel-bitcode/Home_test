import useStyles from './PostStyle'

interface PostProps {
  postDate: string
  authorName: string
  message: string
}
const Post = (props: PostProps) => {
  const { postDate, authorName, message } = props
  const classes = useStyles()
  return (
    <div className={classes.containerPost}>
      <div className={classes.containerBody}>
        <p className={classes.bodyFont}>
          {message}
        </p>
        <h3 className={classes.authorFont}>- {authorName}</h3>
      </div>
      <p className={classes.datePostFont}> Posted: {postDate}</p>
    </div>
  )
}

export default Post