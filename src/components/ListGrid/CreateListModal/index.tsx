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
import useMyFormik from '../../../hooks/useMyFormik';
import MyFormikField from '../../../adapters/MyFormikField';
import MyForm from '../../../adapters/MyForm/';
interface IProps {
  closeModal: () => void;
}

const CreateListModal = ({ closeModal }: IProps) => {
  const { addList } = useLists();

  const formik = useMyFormik({
    initialValues: {
      aldair: ''
    },
    onSubmit: values => console.log(values)
  });

  console.log(formik, 'oia o formik');
  const sendList = async (list: ICreateList) => {
    await addList({ ...list, user_id: 10 });
    closeModal();
  };

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle>Nova lista</MyDialogTitle>
      <MyDialogContent>
        <MyForm context={formik}>
          <MyFormikField
            size="small"
            fullWidth
            margin="normal"
            name="aldair"
            label="Título"
            type="text"
            variant="outlined"
          />
          <MyFormikField
            size="small"
            fullWidth
            margin="normal"
            name="pereira"
            label="Título"
            type="text"
          />
        </MyForm>
        <Formik
          initialValues={{} as ICreateList}
          onSubmit={(data: ICreateList) => sendList(data)}
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
