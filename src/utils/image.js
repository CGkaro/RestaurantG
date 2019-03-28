import React from "react"
import Img from "gatsby-image"

export default function SimpleImage({ data }) {
  const { fixed } = data.companyLogo
  return (
    <div>
      <Img fixed={fixed} className="img" />
    </div>
  )
}
