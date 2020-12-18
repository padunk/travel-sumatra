import React from "react"

import { Flex } from "../../styles/globalStyles"
import { FooterContent, FooterSocial } from "../../styles/footerStyles"
import Link from "../Link/Link"
import { LockedWrapper } from "../LockedWrapper/LockedWrapper"
import { socialMedia } from "../../constants/constants"

const FooterContents = () => {
  return (
    <Flex spaceBetween>
      <FooterContent>
        <p>+62.821.6987.9998</p>
        <Link href="mailto:travel.sumatra@gmail.com" cursor="pointer">
          travel.sumatra@gmail.com
        </Link>
      </FooterContent>
      <FooterContent wider>
        <p>Padang</p>
        <p>West Sumatra</p>
      </FooterContent>
      <FooterSocial>
        {socialMedia.map(socmed => (
          <LockedWrapper key={socmed.href}>
            <Link href={socmed.href} cursor="locked">
              {socmed.component}
            </Link>
          </LockedWrapper>
        ))}
      </FooterSocial>
    </Flex>
  )
}

export default FooterContents
