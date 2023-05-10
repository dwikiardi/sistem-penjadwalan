import React, { useState } from 'react'
import CardBoxModal from '../../components/CardBoxModal'
import { Field, Form, Formik } from 'formik'
import FormField from '../../components/FormField'
import { mdiAccount, mdiMail } from '@mdi/js'
import BaseDivider from '../../components/BaseDivider'


const CreateJadwal = () => {
    const [isModalAddJadwal, setIsModalAddJadwalActive] = useState(false)
    const handleModalAction = () => {
        setIsModalAddJadwalActive(false)
      }

    return (
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
    )
}

export default CreateJadwal