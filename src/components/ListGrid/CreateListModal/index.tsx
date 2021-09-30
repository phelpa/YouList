import React, { ClipboardEvent } from 'react'

import {
  MyDialog,
  MyDialogTitle,
  MyDialogContent,
  MyDialogActions
} from '../../../adapters'
import { MyForm, MyFormikField, MyButton } from '../../../adapters'
import { retrieveYoutubeIdFromClipBoard } from '../../../helpers/youtube'
import useMyFormik from '../../../hooks/useMyFormik'
import { IListForm } from '../../../interfaces/IList'
import { useLists } from '../../../providers/lists'

interface IProps {
  closeModal: () => void
}

const CreateListModal = ({ closeModal }: IProps) => {
  const { addList } = useLists()

  const sendList = async (list: IListForm) => {
    await addList({ ...list, user_id: 3 })
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
    onSubmit: sendList
  })

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <MyDialogTitle>New List</MyDialogTitle>
      <MyDialogContent>
        <MyForm context={formik}>
          <MyFormikField name="title" label="Title" />
          <MyFormikField
            name="description"
            label="Description"
            multiline
            rows="3"
            helperText="A description of what your list is about"
          />
          <MyFormikField
            name="youtube_id"
            label="https://www.youtube.com/watch?v="
            helperText="Paste the youtube url to use its thumbnail"
            onPaste={onYoutubeUrlPaste}
            value={formik?.values?.youtube_id ?? ''}
          />
          <MyDialogActions>
            <MyButton type="submit">Submit</MyButton>
          </MyDialogActions>
        </MyForm>
      </MyDialogContent>
    </MyDialog>
  )
}

export default CreateListModal
