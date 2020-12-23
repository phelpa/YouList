import React from 'react';
import { Field, Form, Formik } from 'formik';
import TextFormField from '../../Shared/TextFormField';
import { useLists } from '../../../providers/lists';
import { ICreateList } from '../../../interfaces/IList';
import { SubmitButton } from './styles';
import {
  MyDialog,
  MyDialogTitle,
  MyDialogContent,
  MyDialogActions
} from '../../../adapters';

interface IProps {
  closeModal: () => void;
}

const CreateListModal = ({ closeModal }: IProps) => {
  const { addList } = useLists();

  const sendList = async (list: ICreateList) => {
    await addList({ ...list, user_id: 10 });
    closeModal();
  };

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle>Nova lista</MyDialogTitle>
      <MyDialogContent>
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

            <MyDialogActions>
              <SubmitButton type="submit">Criar</SubmitButton>
            </MyDialogActions>
          </Form>
        </Formik>
      </MyDialogContent>
    </MyDialog>
  );
};

export default CreateListModal;
