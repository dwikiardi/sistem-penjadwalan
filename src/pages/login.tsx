import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/SectionFullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/FormField'
import FormCheckRadio from '../components/FormCheckRadio'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import { signIn } from 'next-auth/react'
import * as Yup from "yup";

export default function Error() {
  const router = useRouter()

  const handleSubmit = async (values) => {
    const res = await signIn('credentials',{
        username: values.login,
        password: values.password,
        redirect: false,
        callbackUrl: '/'
    })
    console.log(res)
  }

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required().min(7),
  });

  // const { errors, touched, values, handleChange } = formik;

  // interface FormValues {
  //   login: string;
  //   password: string;
  //   remember: boolean;
  // }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik
            initialValues={{ login: '', password: '', remember: true }}
            onSubmit={(values) => handleSubmit(values)} 
            // validationSchema={schema}
          >
              <Form>
              <FormField label="Login" help="Please enter your login">
                <Field name="login" />
                  {/* {errors.login && touched.login ? (
                  <div>{errors.login}</div>
                  ) : null} */}
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
                {/* {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null} */}
              </FormField>

              <FormCheckRadio type="checkbox" label="Remember">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Login" color="info" />
                {/* <BaseButton href="/dashboard" label="Home" color="info" outline /> */}
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
