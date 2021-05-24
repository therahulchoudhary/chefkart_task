import React from 'react';
import '../css/HomeContainerStyle.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TagsInputComponent from '../components/TagsInputComponent';
import { formValue } from '../constant';

const styles = {
    errorMessage: {
        color: 'red',
        fontSize: 13
    }
}

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is required'),
    description: Yup.string()
        .max(500, 'Description should be less than 500 characters')
        .required('Description is required'),
    location: Yup.string().required('Please add atleast one target location'),
    categories: Yup.string().required('Please add atleast one category'),
    average_response: Yup.string().required('Please select a average response time'),
    minbudget: Yup.string().matches(/^[0-9]*$/, 'Invalid Input: Please enter a valid number').required('Min value is required'),
    maxbudget: Yup.string().matches(/^[0-9]*$/, 'Invalid Input: Please enter a valid number').required('Max value is required'),
    rate: Yup.string().required('').test('len', 'Must be exactly 5 characters', val => val <= 100),
    brand_collab: Yup.string().required('Please add atleast one brand'),
    working: Yup.string().required("Please select atleast one option")
});


const FormContainer = () => {
    return (
        <>
            <div className="container-fluid py-5 mt-5 px-sm-0" style={{ background: '#F5F7FC', color: '#201d5e' }}>
                <div className="container mx-auto mt-4 p-5" style={{ background: 'white', borderRadius: 5 }}>
                    <h2 className="font-weight-bold h3">Create Campaign</h2>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <Formik
                                initialValues={formValue}
                                validationSchema={FormSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="my-4">
                                            <label className="font-weight-bold">Name of Campaign</label>
                                            <Field name="name" className="form_field w-100 p-3" />
                                            {errors.name && touched.name ? (
                                                <div style={styles.errorMessage}>{errors.name}</div>
                                            ) : null}
                                        </div>
                                        <div className="my-4">
                                            <label className="font-weight-bold">Description</label>
                                            <Field name="description" className="form_field w-100 p-3" as="textarea" rows={3} />
                                            {errors.description && touched.description ? (
                                                <div style={styles.errorMessage}>{errors.description}</div>
                                            ) : null}
                                        </div>
                                        <div className="my-4">
                                            <label className="font-weight-bold">Target location of your campaign</label>
                                            <Field name="location" as={TagsInputComponent} />
                                            {errors.location && touched.location ? <div style={styles.errorMessage}>{errors.location}</div> : null}
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">Category(s) for your campain</label>
                                            <Field name="categories" as={TagsInputComponent} />
                                            {errors.categories && touched.categories ? <div style={styles.errorMessage}>{errors.categories}</div> : null}
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">Average response time of the Influencers</label>
                                            <Field name="color" as="select" className="form_field w-100 p-3">
                                                <option value="" selected disabled>Please Select</option>
                                                <option value="1Day">&#60; 1 Day</option>
                                                <option value="15Days">&#60; 15 Days</option>
                                                <option value="30Days">&#60; 30 Days</option>
                                            </Field>
                                            {errors.average_response && touched.average_response ? (
                                                <div style={styles.errorMessage}>{errors.average_response}</div>
                                            ) : null}
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">What is your budget for this campaign?</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Field name="minbudget" placeholder="Min" className="form_field w-100 p-3" />
                                                    {errors.minbudget && touched.minbudget ? (
                                                        <div style={styles.errorMessage}>{errors.minbudget}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <Field name="maxbudget" placeholder="Max" className="form_field w-100 p-3" />
                                                    {errors.maxbudget && touched.maxbudget ? (
                                                        <div style={styles.errorMessage}>{errors.maxbudget}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">Post Engagement rate of the Influencers</label>
                                            <Field name="rate" className="form_field w-100 p-3" />
                                            {errors.rate && touched.rate ? (
                                                <div style={styles.errorMessage}>{errors.rate}</div>
                                            ) : null}
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">Kind of brand collab</label>
                                            <Field name="brand_collab" as={TagsInputComponent} className="mb-4" />
                                            {errors.brand_collab && touched.brand_collab ? <div style={styles.errorMessage}>{errors.brand_collab}</div> : null}
                                        </div><div className="my-4">
                                            <label className="font-weight-bold">Have you worked with any brand?</label>
                                            <div role="group" aria-labelledby="my-radio-group">
                                                <label className="mr-4">
                                                    <Field type="radio" name="picked" value="Yes" className="mr-2" />
                                                Yes
                                            </label>
                                                <label>
                                                    <Field type="radio" name="picked" value="No" className="mr-2" />
                                                No
                                            </label>
                                                {errors.working && touched.working ? <div style={styles.errorMessage}>{errors.working}</div> : null}
                                            </div>
                                        </div>
                                        <button className="primary_button py-2 px-5 mt-3" type="submit">Create</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormContainer;