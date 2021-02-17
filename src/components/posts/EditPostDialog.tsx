import { Post, User } from '../../models';
import { Button, Classes, Dialog, FormGroup, InputGroup, Intent, MenuItem, TextArea } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react';
import { Select } from '@blueprintjs/select';
import { PostsService } from '../../services/PostsService';
import { AppToaster } from '../../App';

interface Props {
  post: Post;
  users: User[];

  onClose(): void;
}

export const EditPostDialog = ({post, users, onClose}: Props) => {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
    body: Yup.string().required(),
    userId: Yup.number().required()
  })

  const UsersSelect = Select.ofType<User>();
  const [selected, setSelected] = useState<User>(users[0])

  return <Dialog icon={IconNames.EDIT} title="Edit post" onClose={() => onClose()} isOpen={!!post}>
    <Formik
        initialValues={{
          title: post.title,
          body: post.body,
          userId: post.userId
        }}
        validationSchema={schema}
        onSubmit={
          async (values, {setSubmitting}) => {
            try {
              await PostsService.update({...values, id: post.id});

              AppToaster.show({message: 'Post successfully updated', intent: Intent.SUCCESS});
              setSubmitting(false)
              onClose()
            } catch (e) {
              setSubmitting(false)
              console.error(e)
            }
          }
        }>
      {
        ({isSubmitting, touched, errors, values, setFieldValue}) => (
            <Form>
              <div className={Classes.DIALOG_BODY}>
                <FormGroup labelFor="title" label="Title" helperText={touched.title && errors.title}>
                  <Field id="title" name="title" as={InputGroup}/>
                </FormGroup>
                <FormGroup labelFor="userId" label="User" helperText={touched.userId && errors.userId}>
                  <Field id="userId" name="userId" as={UsersSelect} items={users}
                         activeItem={selected}
                         onItemSelect={() => {
                         }}

                         itemRenderer={(user: User) => <MenuItem key={user.id} text={user.name} onClick={() => {
                           setSelected(user)
                           setFieldValue('userId', user.id)
                         }}/>}>
                    <Button text={selected.name} fill={true} rightIcon="double-caret-vertical"/>
                  </Field>
                </FormGroup>

                <FormGroup labelFor="body" label="Body" helperText={touched.body && errors.body}>
                  <Field id="body" name="body" fill={true} growVertically={true} as={TextArea}/>
                </FormGroup>
              </div>
              <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <Button loading={isSubmitting} type="submit" intent={Intent.PRIMARY}>Save changes</Button>
                </div>
              </div>
            </Form>
        )
      }
    </Formik>
  </Dialog>
}
