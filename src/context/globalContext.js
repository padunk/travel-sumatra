import * as React from "react"

const GlobalStateContext = React.createContext()
const GlobalDispatchContext = React.createContext()
const GlobalCursorContext = React.createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, currentTheme: action.theme }
    case "CURSOR_TYPE":
      return { ...state, cursorType: action.cursorType }
    case "MENU_HOVER":
      return { ...state, mousePosition: action.mousePosition.current }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  let localStorageTheme

  if (typeof window !== undefined) {
    localStorageTheme =
      window.localStorage.getItem("theme") === "null"
        ? "dark"
        : window.localStorage.getItem("theme")
  }

  const initialState = {
    currentTheme: localStorageTheme,
    cursorType: false,
    cursorStyle: ["pointer", "hovered", "locked", "change-theme"],
    mousePosition: [0, 0],
  }

  const [state, dispatch] = React.useReducer(globalReducer, initialState)
  const onCursor = cType => {
    let cursorType =
      (initialState.cursorStyle.includes(cType) && cType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType })
  }

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        <GlobalCursorContext.Provider value={onCursor}>
          {children}
        </GlobalCursorContext.Provider>
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// custom hooks
export const useGlobalStateContext = () => React.useContext(GlobalStateContext)
export const useGlobalDispatchContext = () =>
  React.useContext(GlobalDispatchContext)
export const useGlobalOnCursorContext = () =>
  React.useContext(GlobalCursorContext)
