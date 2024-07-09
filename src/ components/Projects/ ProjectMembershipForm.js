import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProjectMembershipForm = () => {
  const initialValues = {
    projectId: '',
    userId: '',
    role: '',
  };

  const validationSchema = Yup.object().shape({
    projectId: Yup.string().required('Project ID is required'),
    userId: Yup.string().required('User ID is required'),
    role: Yup.string().required('Role is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <h2 className="my-4">Create Project Membership</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="projectId" className="form-label">Project ID</label>
            <Field type="text" id="projectId" name="projectId" className="form-control" />
            <ErrorMessage name="projectId" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">User ID</label>
            <Field type="text" id="userId" name="userId" className="form-control" />
            <ErrorMessage name="userId" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <Field type="text" id="role" name="role" className="form-control" />
            <ErrorMessage name="role" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProjectMembershipForm;
