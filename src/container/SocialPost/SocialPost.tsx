import { getPostData } from './../../actions/SocialPostActions'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import Post from '../../components/Post'
import useStyles from './SocialPostStyle'
import { Post as IPost } from './../../constants/SocialPostInterface'
import { applyFormatDateStringLocal } from './../../lib/format'

interface SocialPostProps {
  feedUrl: string
  postToDisplay: number
  intervalTime: number
  children: JSX.Element
}

const SocialPost = ({
  feedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json',
  postToDisplay = 3,
  intervalTime = 15000
}: SocialPostProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const { data, status }: { data: Array<IPost>, status: string } = useSelector((state: RootState) => state.socialPost)

  useEffect(() => {
    dispatch(getPostData({ url: feedUrl, limit: postToDisplay }))
  }, [])

  useEffect(() => {
    setPosts(data)
  }, [data])

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'success') dispatch(getPostData({ url: feedUrl, limit: postToDisplay }))
    }, intervalTime);
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className={classes.containerSocialPost}>
      {
        (posts && posts.length) && posts.map((item: IPost) => {
          return (<Post key={item.id} message={item.text} postDate={applyFormatDateStringLocal(item.created_at)} authorName={item.user?.name} />)
        })
      }
    </div>
  )
}

export default SocialPost