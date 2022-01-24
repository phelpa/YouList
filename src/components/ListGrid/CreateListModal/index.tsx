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
import { IListForm } from '../../../interfaces/IList'
import listsActions from '../../../services/lists/actions'
import videoActions from '../../../services/video/actions'
import authStorage from 'helpers/authStorage'

interface IProps {
  closeModal: () => void
}

const CreateListModal = ({ closeModal }: IProps) => {
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

  const sendList = async (list: IListForm) => {
    await listsActions.addList({ ...list, user_id: authStorage.getUserId() })
    closeModal()
  }

  const formik = useMyFormik({
    initialValues: {
      title: '',
      description: '',
      youtube_id: '',
    },
    onSubmit: sendList,
  })

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle>New List</MyDialogTitle>
      <MyDialogContent>
        <MyForm context={formik}>
          <MyFormikField
            name="youtube_id"
            label="https://www.youtube.com/watch?v="
            helperText="Paste the youtube url for the first video of your list"
            onPaste={onYoutubeUrlPaste}
            value={formik?.values?.youtube_id ?? ''}
          />
          <MyFormikField
            name="title"
            label="Title"
            value={formik?.values?.title ?? ''}
            inputProps={{ maxLength: 100 }}
          />
          <MyFormikField
            name="description"
            label="Description"
            multiline
            helperText="A description of what your list is about"
            value={formik?.values?.description ?? ''}
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

export default CreateListModal
