import { Button, Card, Elevation, FormGroup, Icon, InputGroup, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import { SecurityService } from '../../services/SecurityService';
import { AppToaster } from '../../App';
import { useHistory } from 'react-router-dom';


export const Login = () => {
  const history = useHistory();
  const schema = Yup.object().shape({
    email: Yup.string().email('Email no es válido').required('Ingrese su email'),
    password: Yup.string().required('Ingrese su contraseña')
  });
  return (
      <>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <Card elevation={Elevation.THREE}>
            <div className="text-center">
              <Icon icon={IconNames.LOCK} iconSize={80}/>
            </div>
            <Formik initialValues={{email: '', password: ''}}
                    validationSchema={schema}
                    onSubmit={
                      async (values, {setSubmitting}) => {
                        try {
                          const loggedIn = await SecurityService.login(values.email, values.password);
                          if (loggedIn) {
                            history.push('/');
                          }
                          setSubmitting(false);
                        } catch (e) {
                          setSubmitting(false);
                          AppToaster.show({
                            message: 'Wrong credentials',
                            intent: Intent.DANGER,
                            icon: IconNames.DELETE
                          });
                        }
                      }
                    }>
              {
                ({isSubmitting, errors, touched}) => (
                    <Form>
                      <FormGroup labelFor="email" label="Email" helperText={touched.email && errors.email}
                                 intent={errors.email && touched.email ? Intent.DANGER : Intent.NONE}
                                 disabled={isSubmitting}>
                        <Field name="email" id="email" placeholder="Enter your email"
                               intent={errors.email && touched.email ? Intent.DANGER : Intent.NONE}
                               leftIcon={IconNames.USER}
                               disabled={isSubmitting} as={InputGroup}/>
                      </FormGroup>
                      <FormGroup labelFor="password" label="Password" disabled={isSubmitting}
                                 helperText={touched.password && errors.password}
                                 intent={errors.password && touched.password ? Intent.DANGER : Intent.NONE}>
                        <Field id="password" name="password" type="password" placeholder="Enter your password"
                               intent={errors.password && touched.password ? Intent.DANGER : Intent.NONE}
                               leftIcon={IconNames.LOCK}
                               disabled={isSubmitting} as={InputGroup}/>
                      </FormGroup>
                      <Button type="submit" intent={Intent.PRIMARY} fill loading={isSubmitting}>Sign in</Button>
                    </Form>
                )
              }
            </Formik>
          </Card>
        </div>
      </>
  )
}
