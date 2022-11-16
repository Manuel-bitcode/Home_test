import useStyles from './PostStyle'

const Post = () => {
  const classes = useStyles()
  return (
    <div className={classes.containerPost}>
      <div className={classes.containerBody}>
        <p className={classes.bodyFont}>
          Sunt aute et ipsum in enim sunt cillum. Nisi cupidatat labore non sint fugiat velit dolore elit dolore veniam aute. Mollit enim voluptate incididunt cupidatat occaecat dolore ut labore est culpa tempor incididunt.
          Labore pariatur quis nisi nulla mollit ipsum pariatur. Tempor irure ea ad fugiat ipsum adipisicing est aliqua culpa sunt eu sunt incididunt adipisicing. Excepteur excepteur sint elit amet amet exercitation nulla occaecat tempor aliqua. Sit cillum ipsum pariatur et quis proident Lorem aute sunt labore tempor aliquip ut in. Irure quis culpa nostrud est in labore consectetur consectetur adipisicing deserunt nostrud quis tempor.
        </p>
        <h3 className={classes.authorFont}>- Author Name</h3>
      </div>
      <p className={classes.datePostFont}> Posted: Fri Dec 29 19:15:04</p>
    </div>
  )
}

export default Post