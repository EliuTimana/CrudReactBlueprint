import { Classes, Dialog, Divider, Tab, Tabs, Text } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Comment, Post } from '../../models';
import { useEffect, useState } from 'react';
import { PostsService } from '../../services/PostsService';

interface Props {
  post: Post;

  onClose(): void;
}

export const ShowPostDialog = ({post, onClose}: Props) => {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const loadComments = async () => {
    try {
      const data = await PostsService.getComments(post.id);
      setComments(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadComments();
  }, []);


  const PostPanel = ({post}: { post: Post }) => {
    return <Text tagName="p">{post.body}</Text>;
  }

  const UserPanel = ({post}: { post: Post }) => {
    return <p>
      <Text tagName="strong">{post.user?.name}</Text> (<Text tagName="em">{post.user?.email}</Text>)
      <dl>
        <dt>qweqe</dt>
        <dd>wqeqw</dd>
      </dl>
    </p>;
  }

  const CommentsPanel = ({comments}: { comments: Comment[]|null }) => {
    return <>
      <ul>
        {comments?.map(c => <li key={c.id}>{c.body}</li>)}
      </ul>
    </>;
  }

  return <Dialog canOutsideClickClose={false} icon={IconNames.EYE_ON} title={post.title} isOpen={!!post} onClose={() => onClose()}>
    <div className={Classes.DIALOG_BODY}>
      <Tabs id="tabs" defaultSelectedTabId="post">
        <Tab id="post" title="Post" panel={<PostPanel post={post}/>}/>
        <Tab id="author" title="Author" panel={<UserPanel post={post}/>}/>
        <Tab id="comments" title="Comments" panel={<CommentsPanel comments={comments}/>}/>
      </Tabs>
    </div>
  </Dialog>
}
