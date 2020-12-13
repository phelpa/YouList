import React from 'react';
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
import { useVideos } from '../../../providers/videos';
import { ICreateVideo } from '../../../interfaces/IVideo';

interface IProps {
  closeModal: () => void;
  listId: number;
}

const SubmitButton = styled(Button)({
  backgroundColor: '#eee'
});

const CreateVideoModal = ({ closeModal, listId }: IProps) => {
  const { addVideo } = useVideos();

  const sendVideo = async (video: ICreateVideo) => {
    const videoPayload = { ...video, list_id: listId, user_id: 10 };
    await addVideo(videoPayload);
    closeModal();
  };

  const handlePaste = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    const clipboardData = e.clipboardData || window['clipboardData'];
    const pastedData = clipboardData.getData('Text');

    return pastedData;
  };

  const getYoutubeId = (url: string) => {
    if (!url) return;
    const myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

    if (myregexp) {
      const youtubeUrl = url.match(myregexp);
      if (youtubeUrl) {
        const youtubeUrlString = youtubeUrl![0];
        const youtubeId = youtubeUrlString?.slice(-11);
        return youtubeId;
      }
    }
    return url;
  };

  return (
    <Dialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <DialogTitle className="bg-light-gray">Novo vídeo</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{} as ICreateVideo}
          onSubmit={data => sendVideo(data)}
        >
          {({ setFieldValue, values }) => (
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
                helperText="Uma descrição do seu vídeo"
                component={TextFormField}
              />

              <Field
                size="small"
                fullWidth
                value={values?.youtube_id ?? ''}
                onPaste={(e: any) => {
                  const pastedData = handlePaste(e);
                  const ytId = getYoutubeId(pastedData);
                  setFieldValue('youtube_id', ytId);
                }}
                margin="normal"
                name="youtube_id"
                label="youtube.com/watch?v="
                type="text"
                variant="outlined"
                helperText="Digite o id do vídeo do youtube"
                component={TextFormField}
              />

              <DialogActions>
                <SubmitButton type="submit">Criar</SubmitButton>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateVideoModal;
