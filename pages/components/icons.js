import styled from "@emotion/styled";
import React, { useState } from "react";
import Tooltip from "@/components/common/Tooltip";
import QrCodeSvg from "@/components/svg/QrCodeSvg";
import TestLayout from "@/layouts/ComponentsLayout";
import ModalUtils from "@/utils/ModalUtils";
import AlarmOffSvg from "@/svg/AlarmOffSvg";
import AlarmOnSvg from "@/svg/AlarmOnSvg";
import BalanceSvg from "@/svg/BalanceSvg";
import BookmarkSvg from "@/svg/BookmarkSvg";
import BuyAndSellSvg from "@/svg/BuyAndSellSvg";
import CallSvg from "@/svg/CallSvg";
import CameraSvg from "@/svg/CameraSvg";
import CardListSvg from "@/svg/CardListSvg";
import CheckSvg from "@/svg/CheckSvg";
import ChevronSvg from "@/svg/ChevronSvg";
import ClipSvg from "@/svg/ClipSvg";
import CloseSvg from "@/svg/CloseSvg";
import CopySvg from "@/svg/CopySvg";
import DeleteNumSvg from "@/svg/DeleteNumSvg";
import DeleteSvg from "@/svg/DeleteSvg";
import DepositSvg from "@/svg/DepositSvg";
import EditSvg from "@/svg/EditSvg";
import EmailSvg from "@/svg/EmailSvg";
import EyeCloseSvg from "@/svg/EyeCloseSvg";
import EyeOpenSvg from "@/svg/EyeOpenSvg";
import FileSvg from "@/svg/FileSvg";
import FilterOnSvg from "@/svg/FilterOnSvg";
import FilterSvg from "@/svg/FilterSvg";
import GallerySvg from "@/svg/GallerySvg";
import HomeSvg from "@/svg/HomeSvg";
import InfoSvg from "@/svg/InfoSvg";
import LaptopSvg from "@/svg/LaptopSvg";
import ListSvg from "@/svg/ListSvg";
import LoginSvg from "@/svg/LoginSvg";
import MinusSvg from "@/svg/MinusSvg";
import NoTransferSvg from "@/svg/NoTransferSvg";
import OnlyBuySvg from "@/svg/OnlyBuySvg";
import OnlySellSvg from "@/svg/OnlySellSvg";
import PhoneSvg from "@/svg/PhoneSvg";
import PlusSvg from "@/svg/PlusSvg";
import PrivacySvg from "@/svg/PrivacySvg";
import ProfileRoundSvg from "@/svg/ProfileRoundSvg";
import ProfileSvg from "@/svg/ProfileSvg";
import ProfileTargetSvg from "@/svg/ProfileTargetSvg";
import ProhibitedSvg from "@/svg/ProhibitedSvg";
import ProtectSvg from "@/svg/ProtectSvg";
import SearchSvg from "@/svg/SearchSvg";
import SettingSvg from "@/svg/SettingSvg";
import SpeakerSvg from "@/svg/SpeakerSvg";
import StarSvg from "@/svg/StarSvg";
import SuccessSvg from "@/svg/SuccessSvg";
import SwitchSvg from "@/svg/SwitchSvg";
import TradeHistorySvg from "@/svg/TradeHistorySvg";
import TradeSvg from "@/svg/TradeSvg";
import TrashCanSvg from "@/svg/TrashCanSvg";
import ViewMoreSvg from "@/svg/ViewMoreSvg";
import WalletListSvg from "@/svg/WalletListSvg";
import WarningSvg from "@/svg/WarningSvg";
import WithdrawalSvg from "@/svg/WithdrawalSvg";
import WonSvg from "@/svg/WonSvg";

function Components() {
  const [clipboard, setClipboard] = useState("");

  const copySvgPath = (SvgName) => {
    const path = `import ${SvgName} from "@/svg/${SvgName}";`;
    setClipboard(path);
    navigator.clipboard.writeText(path);
    ModalUtils.openToastPopup({
      type: "success",
      message: "경로가 클립보드에 복사되었습니다.",
    });
  };

  return (
    <Wrapper>
      <Description>
        사용하실 Svg를 클릭시 path가 클립보드로 복사됩니다.
      </Description>
      <TextBox>{clipboard}</TextBox>

      <SvgContainer>
        <Title>Main Color Icons</Title>
        <Grid>
          <ChevronSvg onClick={() => copySvgPath("ChevronSvg")}></ChevronSvg>
          <ChevronSvg
            type="right"
            onClick={() => copySvgPath("ChevronSvg")}
          ></ChevronSvg>
          <ChevronSvg
            type="down"
            onClick={() => copySvgPath("ChevronSvg")}
          ></ChevronSvg>
          <ChevronSvg
            type="left"
            onClick={() => copySvgPath("ChevronSvg")}
          ></ChevronSvg>
          <CloseSvg onClick={() => copySvgPath("CloseSvg")}></CloseSvg>
          <DeleteNumSvg
            onClick={() => copySvgPath("DeleteNumSvg")}
          ></DeleteNumSvg>
        </Grid>
      </SvgContainer>

      <SvgContainer>
        <Title>Navigation</Title>
        <Grid>
          <HomeSvg onClick={() => copySvgPath("HomeSvg")}></HomeSvg>
          <TradeSvg onClick={() => copySvgPath("TradeSvg")}></TradeSvg>
          <BalanceSvg onClick={() => copySvgPath("BalanceSvg")}></BalanceSvg>
          <TradeHistorySvg
            onClick={() => copySvgPath("TradeHistorySvg")}
          ></TradeHistorySvg>
          <ViewMoreSvg onClick={() => copySvgPath("ViewMoreSvg")}></ViewMoreSvg>
        </Grid>
      </SvgContainer>

      <SvgContainer>
        <Title>Sub Color Icons</Title>
        <Grid>
          <AlarmOffSvg onClick={() => copySvgPath("AlarmOffSvg")}></AlarmOffSvg>
          <AlarmOnSvg onClick={() => copySvgPath("AlarmOnSvg")}></AlarmOnSvg>
          <BookmarkSvg onClick={() => copySvgPath("ViewMoreSvg")}></BookmarkSvg>
          <BuyAndSellSvg
            onClick={() => copySvgPath("BuyAndSellSvg")}
          ></BuyAndSellSvg>
          <CallSvg onClick={() => copySvgPath("CallSvg")}></CallSvg>
          <CameraSvg onClick={() => copySvgPath("CameraSvg")}></CameraSvg>
          <CardListSvg onClick={() => copySvgPath("CardListSvg")}></CardListSvg>
          <CheckSvg onClick={() => copySvgPath("CheckSvg")}></CheckSvg>
          <ClipSvg onClick={() => copySvgPath("ClipSvg")}></ClipSvg>
          <CopySvg onClick={() => copySvgPath("CopySvg")}></CopySvg>

          <DeleteSvg onClick={() => copySvgPath("DeleteSvg")}></DeleteSvg>
          <DepositSvg onClick={() => copySvgPath("DepositSvg")}></DepositSvg>
          <EditSvg onClick={() => copySvgPath("EditSvg")}></EditSvg>
          <EmailSvg onClick={() => copySvgPath("EmailSvg")}></EmailSvg>
          <EyeCloseSvg onClick={() => copySvgPath("EyeCloseSvg")}></EyeCloseSvg>
          <EyeOpenSvg onClick={() => copySvgPath("EyeOpenSvg")}></EyeOpenSvg>
          <FileSvg onClick={() => copySvgPath("FileSvg")}></FileSvg>
          <FilterOnSvg onClick={() => copySvgPath("FilterOnSvg")}></FilterOnSvg>
          <FilterSvg onClick={() => copySvgPath("FilterSvg")}></FilterSvg>
          <GallerySvg onClick={() => copySvgPath("GallerySvg")}></GallerySvg>
          <InfoSvg onClick={() => copySvgPath("InfoSvg")}></InfoSvg>
          <LaptopSvg onClick={() => copySvgPath("LaptopSvg")}></LaptopSvg>
          <ListSvg onClick={() => copySvgPath("ListSvg")}></ListSvg>
          <LoginSvg onClick={() => copySvgPath("LoginSvg")}></LoginSvg>
          <MinusSvg onClick={() => copySvgPath("MinusSvg")}></MinusSvg>
          <NoTransferSvg
            onClick={() => copySvgPath("NoTransferSvg")}
          ></NoTransferSvg>
          <OnlyBuySvg onClick={() => copySvgPath("OnlyBuySvg")}></OnlyBuySvg>
          <OnlySellSvg onClick={() => copySvgPath("OnlySellSvg")}></OnlySellSvg>
          <PhoneSvg onClick={() => copySvgPath("PhoneSvg")}></PhoneSvg>
          <PlusSvg onClick={() => copySvgPath("PlusSvg")}></PlusSvg>
          <PrivacySvg onClick={() => copySvgPath("PrivacySvg")}></PrivacySvg>
          <ProfileSvg onClick={() => copySvgPath("ProfileSvg")}></ProfileSvg>
          <ProfileTargetSvg
            onClick={() => copySvgPath("ProfileTargetSvg")}
          ></ProfileTargetSvg>
          <ProfileRoundSvg
            onClick={() => copySvgPath("ProfileRoundSvg")}
          ></ProfileRoundSvg>
          <ProhibitedSvg
            onClick={() => copySvgPath("ProhibitedSvg")}
          ></ProhibitedSvg>
          <ProtectSvg onClick={() => copySvgPath("ProtectSvg")}></ProtectSvg>
          <QrCodeSvg onClick={() => copySvgPath("QrCodeSvg")}></QrCodeSvg>
          <SearchSvg onClick={() => copySvgPath("SearchSvg")}></SearchSvg>
          <SettingSvg onClick={() => copySvgPath("SettingSvg")}></SettingSvg>
          <SpeakerSvg onClick={() => copySvgPath("SpeakerSvg")}></SpeakerSvg>
          <StarSvg onClick={() => copySvgPath("StarSvg")}></StarSvg>
          <SuccessSvg onClick={() => copySvgPath("SuccessSvg")}></SuccessSvg>
          <SwitchSvg onClick={() => copySvgPath("SwitchSvg")}></SwitchSvg>
          <TrashCanSvg onClick={() => copySvgPath("TrashCanSvg")}></TrashCanSvg>
          <WalletListSvg
            onClick={() => copySvgPath("WalletListSvg")}
          ></WalletListSvg>
          <WarningSvg onClick={() => copySvgPath("WarningSvg")}></WarningSvg>
          <WithdrawalSvg
            onClick={() => copySvgPath("WithdrawalSvg")}
          ></WithdrawalSvg>
          <WonSvg onClick={() => copySvgPath("WonSvg")}></WonSvg>
        </Grid>
      </SvgContainer>

      <SvgContainer>
        <Title>Change color</Title>
        <Grid>
          <InfoSvg
            color="var(--yellow500)"
            onClick={() => copySvgPath("InfoSvg")}
          ></InfoSvg>
          <SuccessSvg
            color="var(--green500)"
            onClick={() => copySvgPath("SuccessSvg")}
          ></SuccessSvg>
          <ProhibitedSvg
            color="var(--red500)"
            onClick={() => copySvgPath("ProhibitedSvg")}
          ></ProhibitedSvg>
          <WarningSvg
            color="var(--red500)"
            onClick={() => copySvgPath("WarningSvg")}
          ></WarningSvg>
        </Grid>
      </SvgContainer>

      <SvgContainer>
        <Title>Change size</Title>
        <InfoSvg
          width="60px"
          height="60px"
          onClick={() => copySvgPath("InfoSvg")}
        ></InfoSvg>
        <SuccessSvg
          width="60px"
          height="60px"
          onClick={() => copySvgPath("SuccessSvg")}
        ></SuccessSvg>
        <ProhibitedSvg
          width="60px"
          height="60px"
          onClick={() => copySvgPath("ProhibitedSvg")}
        ></ProhibitedSvg>
        <WarningSvg
          width="60px"
          height="60px"
          onClick={() => copySvgPath("WarningSvg")}
        ></WarningSvg>
      </SvgContainer>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const SvgContainer = styled.div`
  margin-bottom: 24px;
`;
const Title = styled.p`
  font: var(--headline18);
  margin-bottom: 16px;
`;
const Description = styled.p`
  font: var(--body14);
  margin-bottom: 16px;
`;
const TextBox = styled.p`
  font: var(--caption10);
  display: flex;
  align-items: center;
  padding: 0px 16px;
  border-radius: 15px;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  gap: 16px;
`;
