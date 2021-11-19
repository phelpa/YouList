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
import videoActions from '../../../redux/video/actions'
import videosActions from '../../../redux/videos/actions'

interface IProps {
  closeModal: () => void
  listId: number
}

const CreateVideoModal = ({ closeModal, listId }: IProps) => {
  const onYoutubeUrlPaste = async (e: ClipboardEvent<HTMLInputElement>) => {
    const ytId = retrieveYoutubeIdFromClipBoard(e)
    formik.setFieldValue('youtube_id', ytId)
    if (ytId) {
      const youtubeInfo = await videoActions.getVideoYoutubeInfo(ytId)
      formik.setFieldValue('title', youtubeInfo.title?.slice(0, 100))
      formik.setFieldValue(
        'description',
        youtubeInfo.description?.slice(0, 254)
      )
    }
  }

  const sendVideo = async (values: IVideoForm) => {
    const videoPayload = { ...values, list_id: listId }
    await videosActions.addVideo(videoPayload)
    closeModal()
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
          <MyFormikField
            value={formik?.values?.youtube_id ?? ''}
            onPaste={onYoutubeUrlPaste}
            name="youtube_id"
            label="youtube.com/watch?v="
            helperText="Paste the youtube url"
          />
          <MyFormikField
            value={formik?.values?.title ?? ''}
            name="title"
            label="Title"
            inputProps={{ maxLength: 100 }}
          />
          <MyFormikField
            value={formik?.values?.description ?? ''}
            name="description"
            label="Description"
            variant="outlined"
            multiline
            inputProps={{ maxLength: 255 }}
          />

          <MyDialogActions>
            <MyButton type="submit" loading={formik.isSubmitting}>
              Submit
            </MyButton>
          </MyDialogActions>
        </MyForm>
      </MyDialogContent>
    </MyDialog>
  )
}

export default CreateVideoModal
