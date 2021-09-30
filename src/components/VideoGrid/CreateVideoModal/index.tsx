import React, { ClipboardEvent } from 'react'

import { styled } from '@material-ui/core/styles'

import {
  MyDialog,
  MyDialogTitle,
  MyDialogContent,
  MyDialogActions
} from '../../../adapters'
import { MyForm, MyFormikField, MyButton } from '../../../adapters'
import { retrieveYoutubeIdFromClipBoard } from '../../../helpers/youtube'
import useMyFormik from '../../../hooks/useMyFormik'
import { IVideoForm } from '../../../interfaces/IVideo'
import { useVideos } from '../../../providers/videos'

interface IProps {
  closeModal: () => void
  listId: number
}

const SubmitButton = styled(MyButton)({
  backgroundColor: '#eee'
})

const CreateVideoModal = ({ closeModal, listId }: IProps) => {
  const { addVideo } = useVideos()

  const sendVideo = async (video: IVideoForm) => {
    const videoPayload = { ...video, list_id: listId }
    await addVideo(videoPayload)
    closeModal()
  }

  const onYoutubeUrlPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const ytId = retrieveYoutubeIdFromClipBoard(e)
    formik.setFieldValue('youtube_id', ytId)
  }

  const formik = useMyFormik({
    initialValues: {
      title: '',
      description: '',
      youtube_id: ''
    },
    onSubmit: sendVideo
  })

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle className="bg-light-gray">Novo vídeo</MyDialogTitle>
      <MyDialogContent>
        <MyForm context={formik}>
          <MyFormikField name="title" label="Título" />
          <MyFormikField
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows="3"
          />
          <MyFormikField
            value={formik?.values?.youtube_id ?? ''}
            onPaste={onYoutubeUrlPaste}
            name="youtube_id"
            label="youtube.com/watch?v="
            helperText="Paste the youtube url"
          />
          <MyDialogActions>
            <SubmitButton type="submit">Criar</SubmitButton>
          </MyDialogActions>
        </MyForm>
      </MyDialogContent>
    </MyDialog>
  )
}

export default CreateVideoModal
