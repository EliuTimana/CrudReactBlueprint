import { Post, User } from '../../models';
import { Button, Classes, Dialog, FormGroup, InputGroup, MenuItem, TextArea } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react';
import { Select } from '@blueprintjs/select';

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
    <div className={Classes.DIALOG_BODY}>
      <Formik
          initialValues={{
            title: post.title,
            body: post.body,
            userId: post.userId
          }}
          validationSchema={schema}
          onSubmit={
            (values) => {
              console.log(values)
            }
          }>
        {
          ({isSubmitting, touched, errors, values, setFieldValue}) => (
              <Form>
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
                <Button type="submit">Save changes</Button>
              </Form>
          )
        }
      </Formik>
    </div>
  </Dialog>
}
