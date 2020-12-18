import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  useGlobalOnCursorContext,
} from "../../context/globalContext"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, cursor,...other }) => {
  const onCursor = useGlobalOnCursorContext()
  
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        onMouseEnter={() => onCursor(cursor)}
        onMouseLeave={onCursor}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      href={to}
      {...other}
      onMouseEnter={() => onCursor(cursor)}
      onMouseLeave={onCursor}
    >
      {children}
    </a>
  )
}

export default Link
