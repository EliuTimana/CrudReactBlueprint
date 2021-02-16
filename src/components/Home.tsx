import { useEffect, useState } from 'react';
import { Post } from '../models';
import { PostsService } from '../services/PostsService';
import { UsersService } from '../services/UsersService';
import { Cell, Column, RenderMode, SelectionModes, Table, TableLoadingOption } from '@blueprintjs/table';
import { Alert, Button, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { ShowPostDialog } from './posts/ShowPostDialog';
import { AppToaster } from '../App';

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [postToShow, setPostToShow] = useState<Post | null>();
  const [postToDelete, setPostToDelete] = useState<Post | null>();
  const [deletingPost, setDeletingPost] = useState(false);

  const loadData = async () => {
    try {
      const data = await Promise.all([PostsService.getAll(), UsersService.getAll()]);
      setPosts(PostsService.mergeWithUsers(data[0], data[1]));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const showPost = (post: Post | null) => {
    setPostToShow(post);
  }

  const deletePost = async () => {
    if (postToDelete != null) {
      try {
        setDeletingPost(true);

        await PostsService.delete(postToDelete.id);

        setPosts(p => p?.filter(x => x.id !== postToDelete.id));

        setDeletingPost(false);
        setPostToDelete(null);

        AppToaster.show({message: 'Post successfully deleted', intent: Intent.SUCCESS});
      } catch (e) {
        console.error(e)
        AppToaster.show({message: e, intent: Intent.DANGER});
      }
    }
  }

  return <>
    <div className="container-fluid">
      <div>Home</div>
      {postToShow && <ShowPostDialog post={postToShow} onClose={() => setPostToShow(null)}/>}
      {
        postToDelete &&
        <Alert icon={IconNames.TRASH} intent={Intent.DANGER} isOpen={!!postToDelete} onConfirm={() => deletePost()}
               cancelButtonText="Cancel"
               loading={deletingPost}
               onCancel={() => setPostToDelete(null)}
               confirmButtonText="Delete">
            <p>Are you sure to delete this post?</p>
        </Alert>
      }
      <Table numRows={posts ? posts.length : 100} enableRowResizing={false} defaultRowHeight={30}
             renderMode={RenderMode.BATCH}
             selectionModes={SelectionModes.NONE} loadingOptions={[TableLoadingOption.CELLS]}
             columnWidths={[250, 200, 150, 240]}>
        <Column name="Title"
                cellRenderer={(rowIndex) => <Cell loading={!posts} tooltip={posts && posts[rowIndex].title}
                                                  wrapText={false}>{posts && posts[rowIndex].title}</Cell>}/>
        <Column name="Body"
                cellRenderer={(rowIndex) => <Cell loading={!posts} tooltip={posts && posts[rowIndex].body}
                                                  truncated={true}>{posts && posts[rowIndex].body}</Cell>}/>
        <Column name="User"
                cellRenderer={(rowIndex) => <Cell loading={!posts} tooltip={posts && posts[rowIndex].user?.username}
                                                  truncated={true}>{posts && posts[rowIndex].user?.username}</Cell>}/>
        <Column name="Actions"
                cellRenderer={(rowIndex) => <Cell loading={!posts}
                                                  className="d-flex align-items-center justify-content-between">
                  <Button text="View" minimal icon={IconNames.EYE_OPEN} small
                          onClick={() => showPost(posts ? posts[rowIndex] : null)}/>
                  <Button text="Edit" minimal icon={IconNames.EDIT} small intent={Intent.PRIMARY}/>
                  <Button text="Delete" minimal icon={IconNames.DELETE} small intent={Intent.DANGER}
                          onClick={() => setPostToDelete(posts ? posts[rowIndex] : null)}/>
                </Cell>}/>
      </Table>
    </div>
  </>
}
