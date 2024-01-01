import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <div>
        <h1>This will be shown in every blog subroutes</h1>
        {children}
    </div>
  )
}
export default BlogLayout