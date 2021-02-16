import { Classes, Dialog, Text } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Post } from '../../models';

interface Props {
  post: Post;

  onClose(): void;
}

export const ShowPostDialog = ({post, onClose}: Props) => {
  return <Dialog icon={IconNames.EYE_ON} title={post.title} isOpen={!!post} onClose={() => onClose()}>
    <div className={Classes.DIALOG_BODY}>
      <p>
        <Text tagName="strong">{post.user?.username}</Text> (<Text tagName="em">{post.user?.email}</Text>)
      </p>
      <Text tagName="p">{post.body}</Text>
    </div>
  </Dialog>
}
