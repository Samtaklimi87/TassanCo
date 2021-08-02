import React from "react";
import { Button } from "../ButtonElemts";

import {
  InfoContainer,
  InfoWapper,
  InfoRow,
  Coulmn1,
  Coulmn2,
  TextWrapper,
  TopTitile,
  Title,
  Description,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topTitle,
  lightText,
  title,
  darkText,
  decsription,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWapper>
          <InfoRow imgStart={imgStart}>
            <Coulmn1>
              <TextWrapper>
                <TopTitile>{topTitle}</TopTitile>
                <Title lightText={lightText}>{title}</Title>
                <Description darkText={darkText}>{decsription}</Description>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duartion={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Coulmn1>
            <Coulmn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Coulmn2>
          </InfoRow>
        </InfoWapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
