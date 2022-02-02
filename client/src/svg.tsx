import TeslaSVG from './components/svg/TeslaSVG';
import MicrosoftSVG from './components/svg/MicrosoftSVG';
import HpSVG from './components/svg/HpSVG';
import OracleSVG from './components/svg/OracleSVG';
import GoogleSVG from './components/svg/GoogleSVG';
import NvidiaSVG from './components/svg/NvidiaSVG';
import LogoSVG from './components/svg/LogoSVG';

const white = '#fbfcfe';
const green = '#36536b';

export const svgArrayWhite = [
  <TeslaSVG color={white} />,
  <MicrosoftSVG color={white} />,
  <HpSVG color={white} />,
  <OracleSVG color={white} />,
  <GoogleSVG color={white} />,
  <NvidiaSVG color={white} />,
];

export const svgArrayGreen = [
  <TeslaSVG color={green} />,
  <MicrosoftSVG color={green} />,
  <HpSVG color={green} />,
  <OracleSVG color={green} />,
  <GoogleSVG color={green} />,
  <NvidiaSVG color={green} />,
];

export const logoWhite = <LogoSVG color={white} />;
export const logoGreen = <LogoSVG color={green} />;
