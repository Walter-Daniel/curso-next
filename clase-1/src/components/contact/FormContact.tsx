import { Grid, TextField, Button} from '@mui/material';
import { useNotification } from '../../context/NotificationProdiver';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const FormContact = () => {
    
  const { getSuccess } = useNotification();

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema: Yup.Schema<FormValues> = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: any) => {
    console.log(values)
    setTimeout(() => {
      getSuccess( 'Message sent successfully' );
      resetForm();
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        {({ isSubmitting }) => (
            <Form>
            <Grid container spacing={2} direction="column">
                <Grid item>
                <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Name"
                    variant="outlined"
                    helperText={<ErrorMessage name="name" />}
                />
                </Grid>
                <Grid item>
                <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Email"
                    variant="outlined"
                    helperText={<ErrorMessage name="email" />}
                />
                </Grid>
                <Grid item>
                <Field
                    as={TextField}
                    fullWidth
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    helperText={<ErrorMessage name="message" />}
                />
                </Grid>
                <Grid item>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                >
                    Send
                </Button>
                </Grid>
            </Grid>
            </Form>
        )}
    </Formik>
  )
}
