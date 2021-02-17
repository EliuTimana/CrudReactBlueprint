import { useEffect, useState } from 'react';
import { Post, User } from '../models';
import { PostsService } from '../services/PostsService';
import { UsersService } from '../services/UsersService';
import { Cell, Column, RenderMode, SelectionModes, Table, TableLoadingOption } from '@blueprintjs/table';
import { Alert, Button, Intent, Text } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { ShowPostDialog } from './posts/ShowPostDialog';
import { AppToaster } from '../App';
import { EditPostDialog } from './posts/EditPostDialog';

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [users, setUsers] = useState<User[]>();
  const [postToShow, setPostToShow] = useState<Post | null>();
  const [postToDelete, setPostToDelete] = useState<Post | null>();
  const [postToEdit, setPostToEdit] = useState<Post | null>();
  const [deletingPost, setDeletingPost] = useState(false);

  const loadData = async () => {
    try {
      const data = await Promise.all([PostsService.getAll(), UsersService.getAll()]);
      setUsers(data[1]);
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
      {postToEdit && <EditPostDialog post={postToEdit} users={users || []} onClose={() => setPostToEdit(null)}/>}
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
             columnWidths={[250, 200, 350, 240]}>
        <Column name="Title"
                cellRenderer={(rowIndex) => <Cell loading={!posts} tooltip={posts && posts[rowIndex].title}
                                                  wrapText={false}>{posts && posts[rowIndex].title}</Cell>}/>
        <Column name="Body"
                cellRenderer={(rowIndex) => <Cell loading={!posts} tooltip={posts && posts[rowIndex].body}
                                                  truncated={true}>{posts && posts[rowIndex].body}</Cell>}/>
        <Column name="User"
                cellRenderer={
                  (rowIndex) => {
                    const value = posts && posts[rowIndex].user?.name;
                    const email = posts && posts[rowIndex].user?.email;

                    return <Cell loading={!posts}
                                 tooltip={value}
                                 truncated={true}>
                      <Text tagName="span">{value}</Text> <Text tagName="small"
                                                                className="bp3-text-muted">({email})</Text>
                    </Cell>
                  }
                }
        />
        <Column name="Actions"
                cellRenderer={(rowIndex) => {
                  const post = posts ? posts[rowIndex] : null;
                  return <Cell loading={!posts}
                               className="d-flex align-items-center justify-content-between">
                    <Button text="View" minimal icon={IconNames.EYE_OPEN} small
                            onClick={() => showPost(post)}/>
                    <Button text="Edit" minimal icon={IconNames.EDIT} small intent={Intent.PRIMARY}
                            onClick={() => setPostToEdit(post)}/>
                    <Button text="Delete" minimal icon={IconNames.DELETE} small intent={Intent.DANGER}
                            onClick={() => setPostToDelete(post)}/>
                  </Cell>
                }}/>
      </Table>
    </div>
  </>
}
