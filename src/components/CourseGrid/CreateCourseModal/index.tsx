import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useModalState } from '../../../providers/modal/';
import { useModalDispatch } from '../../../providers/modal/';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Field, Form, Formik } from 'formik';
import TextFormField from '../../Shared/TextFormField/';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';



const CreateCourseModal = () => {
  const { isOpen } = useModalState();
  const dispatch = useModalDispatch();

  return(
    <Dialog
      maxWidth='sm'
      fullWidth={true}
      open={isOpen}
      onClose={() => dispatch({type: 'CLOSE_CREATE_COURSE'})}
    >
        <DialogTitle className="bg-light-gray" >Novo Curso</DialogTitle>
        <DialogContent>
          <Formik initialValues={{}} onSubmit={data => console.log(data)}>
            <Form>

                <TextField 
                fullWidth
                margin='normal'
                name='title' 
                label='Título' 
                type='text' 
               />

                <Field 
                fullWidth
                margin='normal'
                name='title' 
                label='Título' 
                type='text' 
                component={TextFormField} />
            
                <Field 
                fullWidth
                margin='normal'
                name='description' 
                label='Descrição' 
                type='text' 
                component={TextFormField} />
          
                <Field 
                fullWidth
                margin='normal'
                name='image' 
                label='Imagem' 
                type='text' 
                component={TextFormField} />
                 
                <DialogActions>
                  <Button>
                    Criar
                  </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
    </Dialog>

  );
}

export default CreateCourseModal;