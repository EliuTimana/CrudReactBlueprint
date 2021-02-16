import { useEffect, useState } from 'react';
import { Post } from '../models';
import { PostsService } from '../services/PostsService';
import { UsersService } from '../services/UsersService';
import { Cell, Column, RenderMode, SelectionModes, Table, TableLoadingOption } from '@blueprintjs/table';
import { Button, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>();
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

  return <>
    <div className="container-fluid">
      <div>Home</div>
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
                  <Button text="View" minimal icon={IconNames.EYE_OPEN} small/>
                  <Button text="Edit" minimal icon={IconNames.EDIT} small intent={Intent.PRIMARY}/>
                  <Button text="Delete" minimal icon={IconNames.DELETE} small intent={Intent.DANGER}/>
                </Cell>}/>
      </Table>
    </div>
  </>
}
