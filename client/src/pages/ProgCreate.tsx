import AreaFilter from 'components/AreaFilter';
import Layout from 'components/Layout';
import { useEffect } from 'react';
import { ReactElement } from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const CreateContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 10rem;
`;

const CreateForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgramInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RecruitInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProgramInfoTitle = styled.div`
  display: flex;
`;

const Redstar = styled.div`
  color: red;
  margin-right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-size: 20px;
  margin-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleInput = styled.input`
  border: 1px solid #e2e6e8;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
  height: 30px;
`;

const ContentsInput = styled.textarea`
  border: 1px solid #e2e6e8;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 90%;
  height: 600px;
  resize: none;
`;

const RecruitInfoTitle = styled.div`
  display: flex;
  height: 30px;
  margin-bottom: 10px;
`;

const RecruitContents = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
`;

const RecruitName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  font-size: 15px;
  margin-right: 20px;
`;

const RecruitInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 5px;
  border: 1px solid #e2e6e8;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KindInputWrap = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 5px;
  border: 1px solid #e2e6e8;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KindInput = styled.input`
  width: 80%;
  height: 3px;
  margin: 1rem;
  background: #ff5924;
`;

const KindValue = styled.div`
  width: 20%;
  font-size: 1.1rem;
`;

const ImageAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-right: 30px;
`;

const ImageRule = styled.div`
  color: #9d9d9d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-right: 30px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  height: 200px;
  width: 100%;
  border: 1px solid #e2e6e8;
  color: #9d9d9d;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #9d9d9d;
  }
`;

const CreateBtn = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ff5924;
  color: white;
  font-size: 20px;
`;

const AreaInputWrap = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
`;

function ProgCreate() {
  // const [image, setImage] = useState();
  const [kind, setKind] = useState('00');

  const firstRef = useRef<any>(null);
  const secondRef = useRef<any>(null); //focus 처리시 에러

  //처음 렌더링 될 때 제목인풋에 포커즈
  useEffect(() => {
    firstRef.current.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //제목인풋에서 엔터누를시 프로그램 설명 인풋으로 포커즈
  const handleInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (event.target === firstRef.current) {
        secondRef.current.focus();
      } else {
        return;
      }
    }
  };

  const handleKindValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKind(e.target.value);
  };

  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setImage((e.target as any).files);
  // };

  return (
    <Layout>
      <CreateContainer>
        <CreateForm onSubmit={handleSubmit}>
          <ProgramInfo>
            <ProgramInfoTitle>
              <Redstar>*</Redstar>
              <Label>제목</Label>
            </ProgramInfoTitle>
            {/* 제목 인풋입니다 */}
            <TitleInput
              type="text"
              placeholder="제목을 입력해주세요."
              name="title"
              ref={firstRef}
              onKeyUp={handleInput}
              required
            ></TitleInput>
            <ProgramInfoTitle>
              <Redstar>*</Redstar>
              <Label>프로그램 설명</Label>
            </ProgramInfoTitle>
            {/* 프로그램 설명 인풋입니다 */}
            <ContentsInput
              name="contents"
              placeholder="프로그램 설명을 입력해주세요."
              ref={secondRef}
              required
            ></ContentsInput>
          </ProgramInfo>
          <RecruitInfo>
            <RecruitInfoTitle>
              <Label>모집정보</Label>
              <Redstar>* 필수 입력</Redstar>
            </RecruitInfoTitle>
            <RecruitContents>
              <Redstar>*</Redstar>
              <RecruitName>모집인원</RecruitName>
              {/* 모집인원 인풋입니다 */}
              <RecruitInput
                type="number"
                min="2"
                name="people"
                required
              ></RecruitInput>
            </RecruitContents>
            <RecruitContents>
              <Redstar>*</Redstar>
              <RecruitName>진행날짜</RecruitName>
              {/* 진행날짜 인풋입니다 */}
              <RecruitInput type="date" name="date" required></RecruitInput>
            </RecruitContents>
            <RecruitContents>
              <Redstar>*</Redstar>
              <RecruitName>모집지역</RecruitName>
              <AreaInputWrap>
                <AreaFilter></AreaFilter>
              </AreaInputWrap>
            </RecruitContents>
            <RecruitContents>
              <Redstar>*</Redstar>
              <RecruitName>친절도</RecruitName>
              {/* 친절도 인풋입니다 */}
              <KindInputWrap>
                <KindInput
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="kind"
                  onChange={handleKindValue}
                  required
                ></KindInput>
                <KindValue>{kind}%</KindValue>
              </KindInputWrap>
            </RecruitContents>
            <RecruitContents>
              <ImageAdd>이미지 첨부</ImageAdd>
              <ImageRule>
                저작권에 위배되지 않는 파일을 업로드 해주세요.
              </ImageRule>
            </RecruitContents>
            <ImageLabel htmlFor="file">
              우리 모임을 소개할 이미지를 첨부해주세요.
            </ImageLabel>
            <ImageInput
              id="file"
              type="file"
              name="avatar"
              accept="image/*"
              // onChange={handleImage}
            ></ImageInput>
            <CreateBtn type="submit">등록하기</CreateBtn>
          </RecruitInfo>
        </CreateForm>
        {/* {image ? <img src={image}></img> : null} */}
      </CreateContainer>
    </Layout>
  );
}

export default ProgCreate;