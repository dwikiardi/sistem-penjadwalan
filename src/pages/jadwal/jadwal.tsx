import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { getPageTitle, appTitle } from '../../config'
import SectionMain from '../../components/SectionMain'
import SectionTitle from '../../components/SectionTitle'
import Image from 'next/image'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { mdiAccount, mdiGithub, mdiMail, mdiReceiptTextClock, mdiTableBorder } from '@mdi/js'
import BaseButton from '../../components/BaseButton'
import CardBox from '../../components/CardBox'
import TableJadwal from '../../components/TableJadwal'
import CardBoxModal from '../../components/CardBoxModal'
import { Field, Form, Formik } from 'formik'
import FormField from '../../components/FormField'
import BaseDivider from '../../components/BaseDivider'
import BaseButtons from '../../components/BaseButtons'

const jadwal = () => {
  const [isModalAddJadwal, setIsModalAddJadwalActive] = useState(false)

  const handleModalAction = () => {
    setIsModalAddJadwalActive(false)
  }


  return (
    <>
      <Head>
        <title>{getPageTitle('Responsive')}</title>
      </Head>

      <CardBoxModal
        title="Buat Jadwal"
        buttonColor="info"
        buttonLabel="Done"
        isActive={isModalAddJadwal}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <div>
          <Formik
            initialValues={{
              fullname: 'John Doe',
              email: 'john.doe@example.com',
              phone: '',
              color: 'green',
              textarea: 'Hello',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Grouped with icons" icons={[mdiAccount, mdiMail]}>
                <Field name="fullname" placeholder="Full name" />
                <Field type="email" name="email" placeholder="Email" />
              </FormField>

              <FormField
                label="With help line and labelFor"
                labelFor="phone"
                help="Help line comes here"
              >
                <Field name="phone" placeholder="Phone" id="phone" />
              </FormField>

              <FormField label="Dropdown" labelFor="color">
                <Field name="color" id="color" component="select">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </FormField>

              <BaseDivider />

              <FormField label="Textarea" hasTextareaHeight>
                <Field name="textarea" as="textarea" placeholder="Your text here" />
              </FormField>

              <BaseDivider />

              {/* <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
                <BaseButton type="reset" color="info" outline label="Reset" />
              </BaseButtons> */}
            </Form>
          </Formik>
        </div>
      </CardBoxModal>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiReceiptTextClock} title="Jadwal" main>
          <BaseButton
              target="_blank"
              label="Buat Jadwal"
              color="contrast"
              className='rounded-lg text-center justify-center font-bold'
              small
              onClick={() => setIsModalAddJadwalActive(true)}
            />
        </SectionTitleLineWithButton>
        <CardBox className="mb-6" hasTable>
          <TableJadwal />
        </CardBox>
      </SectionMain>
    </>
  )
}

jadwal.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default jadwal