import React, { ClipboardEvent } from 'react'

import {
  MyDialog,
  MyDialogTitle,
  MyDialogContent,
  MyDialogActions,
} from '../../../adapters'
import { MyForm, MyFormikField, MyButton } from '../../../adapters'
import { retrieveYoutubeIdFromClipBoard } from '../../../helpers/youtube'
import useMyFormik from '../../../hooks/useMyFormik'
import { IVideoForm } from '../../../interfaces/IVideo'
import videosService from '../../../services/videos'

interface IProps {
  closeModal: () => void
  listId: number
}

const CreateVideoModal = ({ closeModal, listId }: IProps) => {
  const sendVideo = async (video: IVideoForm) => {
    const videoPayload = { ...video, list_id: listId }
    await videosService.addVideo(videoPayload)
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
      youtube_id: '',
    },
    onSubmit: sendVideo,
  })

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle>New Video</MyDialogTitle>
      <MyDialogContent>
        <MyForm context={formik}>
          <MyFormikField name="title" label="Title" />
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
            <MyButton type="submit">Submit</MyButton>
          </MyDialogActions>
        </MyForm>
      </MyDialogContent>
    </MyDialog>
  )
}

export default CreateVideoModal
