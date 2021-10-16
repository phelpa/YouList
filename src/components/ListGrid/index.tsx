import React, { useEffect } from 'react'

import useModal from '../../hooks/useModal'
import { IList } from '../../interfaces/IList'
import { useLists } from '../../providers/lists'
import ActionIcon from '../Shared/ActionIcon'
import CreateListModal from './CreateListModal'
import List from './List'

const ListGrid = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const { lists, isLoading, getLists } = useLists()

  useEffect(() => {
    getLists(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w_100">
      <div className="flex_wrap">
        {isLoading && <div>Loading...</div>}
        {lists?.map((list: IList) => (
          <List key={list.id} list={list} />
        ))}
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
