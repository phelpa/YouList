import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import TextFormField from '../../Shared/TextFormField';
import { styled } from '@material-ui/core/styles';
import { useLists } from '../../../providers/lists';
import { ICreateList } from '../../../interfaces/IList';

interface IProps {
  closeModal: () => void;
}

const SubmitButton = styled(Button)({
  backgroundColor: '#eee'
});

const CreateListModal = ({ closeModal }: IProps) => {
  const { addList } = useLists();

  const sendList = async (list: ICreateList) => {
    await addList({ ...list, user_id: 10 });
    closeModal();
  };

  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={true}
      onClose={() => closeModal()}
    >
      <DialogTitle className="bg-light-gray">Nova lista</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{} as ICreateList}
          onSubmit={data => sendList(data)}
        >
          <Form>
            <Field
              size="small"
              fullWidth
              margin="normal"
              name="title"
              label="Título"
              type="text"
              variant="outlined"
              component={TextFormField}
            />

            <Field
              size="small"
              fullWidth
              margin="normal"
              name="description"
              label="Descrição"
              type="text"
              variant="outlined"
              multiline={true}
              rows="3"
              helperText="Uma descrição do que seria a sua lista"
              component={TextFormField}
            />

            <Field
              size="small"
              fullWidth
              margin="normal"
              name="list_image"
              label="https:\\"
              type="text"
              variant="outlined"
              helperText="Digite o endereço da imagem pra usar como capa da lista"
              component={TextFormField}
            />

            <DialogActions>
              <SubmitButton type="submit">Criar</SubmitButton>
            </DialogActions>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListModal;

{
  /* TODO COLOCAR UPLOAD DE ARQUIVO
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
                /> */
}
