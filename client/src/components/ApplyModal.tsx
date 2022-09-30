import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import {
  BtnGroup,
  ModalBackDrop,
  ModalView,
  SendBtn,
  SendCancelBtn,
} from './MessageModal';

export const CheckMessage = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
`;

interface ApplyModalProps {
  setIsApplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  programId: number | undefined;
}

function ApplyModal({ setIsApplyOpen, programId }: ApplyModalProps) {
  const DEV_URL = process.env.REACT_APP_DEV_URL;

  const postApply = async () => {
    await axios
      .post(
        `${DEV_URL}/api/applies`,
        { programId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setIsApplyOpen(false);
      })
      .catch((err) => {
        setIsApplyOpen(false);
      });
  };

  return (
    <ModalBackDrop>
      <ModalView>
        <CheckMessage>신청을 완료하시겠습니까?</CheckMessage>
        <BtnGroup>
          <SendCancelBtn
            onClick={() => {
              setIsApplyOpen(false);
            }}
          >
            취소
          </SendCancelBtn>
          <SendBtn onClick={postApply}>확인</SendBtn>
        </BtnGroup>
      </ModalView>
    </ModalBackDrop>
  );
}

export default ApplyModal;