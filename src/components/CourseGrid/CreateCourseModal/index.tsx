import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useModalState } from '../../../providers/modal/';
import { useModalDispatch } from '../../../providers/modal/';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import TextFormField from '../../Shared/TextFormField/';
import { styled } from '@material-ui/core/styles';

const SubmitButton = styled(Button)({
  backgroundColor: '#eee',
});

const CreateCourseModal = () => {
  const { isOpen } = useModalState();
  const [uploaded, setUploaded] = useState(false);
  const dispatch = useModalDispatch();


  const handleFileUpload = () => {
    setUploaded(true);
  }

  return(
    <Dialog
      maxWidth='xs'
      fullWidth={true}
      open={isOpen}
      onClose={() => dispatch({type: 'CLOSE_CREATE_COURSE'})}
    >
        <DialogTitle className="bg-light-gray" >Nova lista</DialogTitle>
        <DialogContent>
          <Formik initialValues={{}} onSubmit={data => console.log(data)}>
            <Form>
                <Field
                size='small'
                fullWidth
                margin='normal'
                name='title'
                label='Título'
                type='text'
                variant="outlined"
                component={TextFormField} />

                <Field
                size='small'
                fullWidth
                margin='normal'
                name='description'
                label='Descrição'
                type='text'
                variant="outlined"
                multiline={true}
                rows='3'
                helperText='Uma descrição do que seria o seu curso'
                component={TextFormField} />

                <Field
                size='small'
                fullWidth
                margin='normal'
                helperText='Escolha sua melhor foto de apresentação'
                name='image'
                type='file'
                rows='3'
                onClick={() => handleFileUpload()}
                variant="outlined"
                inputProps={{
                  style: {
                    cursor: 'pointer',
                    backgroundImage: "url('../../img/vectorpaint.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    caretColor: 'transparent',
                   },
                }}
                component={TextFormField}
                />

                <DialogActions>
                  <SubmitButton type='submit'>
                    Criar
                  </SubmitButton>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
    </Dialog>

  );
}

export default CreateCourseModal;