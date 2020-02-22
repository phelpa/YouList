import React, {createContext , useReducer, useContext } from 'react';

const initialState = {
  isOpen: false,
};

function modalReducer(state: any, action: IAction) {
  switch (action.type) {
    case 'OPEN_CREATE_COURSE': {
      return { isOpen: true }
    }
    default:
      return;
  }
}

type IAction = {
  type: 'OPEN_CREATE_COURSE'
};
type IDispatch = (action: IAction) => void
type IState = {
  isOpen: boolean
};
type IProviderProps = {
  children: React.ReactNode
};

function ModalProvider({children}: IProviderProps) {
  const [state, dispatch] = useReducer(modalReducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const StateContext = createContext<IState | undefined>(undefined)
const DispatchContext = createContext<IDispatch | undefined>(undefined);

export function useModalState() {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider')
  }
  return context
}

export function useModalDispatch() {
  const context = useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider')
  }
  return context
}

export default ModalProvider;