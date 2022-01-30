import React from 'react'

import { useSelector } from 'react-redux'

import useApiCall from '../../hooks/apiCall'
import useModal from '../../hooks/useModal'
import { IList } from '../../interfaces/IList'
import listsActions from '../../services/lists/actions'
import { listsSelector } from '../../services/lists/slice'
import ActionIcon from '../Shared/ActionIcon'
import CreateListModal from './CreateListModal'
import List from './List'
import authStorage from 'helpers/authStorage'

const ListGrid = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const lists = useSelector(listsSelector)

  const [loading] = useApiCall(
    () => listsActions.getLists(authStorage.getUserId()),
    []
  )

  return (
    <div className="w_100">
      <div className="flex_wrap">
        {loading && <div>Loading...</div>}
        {!loading &&
          lists?.map((list: IList) => <List key={list.id} list={list} />)}
        <ActionIcon
          description="Add new list"
          callback={openModal}
          icon="videocam"
        />
        {isOpen && <CreateListModal closeModal={closeModal} />}
      </div>
    </div>
  )
}

export default ListGrid
