import * as React from "react"
import Layout from '../../components/organism/layout/layout'
import CompanyApproval from '../../components/organism/company-approval/company-approval'
import "../../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <CompanyApproval />
    </Layout>
  )
}

export default IndexPage
