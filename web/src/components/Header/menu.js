import {
  AiFillHome,
  AiOutlineHome,
  AiFillMessage,
  AiOutlineMessage,
  AiFillPlusSquare,
  AiOutlinePlusSquare,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';

import { TiLocationOutline, TiLocation } from 'react-icons/ti';

const BACKGROUND_ICONS = '#E77F76';

export const menu = [
  {
    id: 0,
    name: 'Home',
    selected: true,
    icon1: <AiFillHome size={30} color={BACKGROUND_ICONS} />,
    icon2: <AiOutlineHome size={30} color={BACKGROUND_ICONS} />,
  },
  {
    id: 1,
    name: 'Message',
    selected: false,
    icon1: <AiFillMessage size={30} color={BACKGROUND_ICONS} />,
    icon2: <AiOutlineMessage size={30} color={BACKGROUND_ICONS} />,
  },
  {
    id: 2,
    name: 'Plus',
    selected: false,
    icon1: <AiFillPlusSquare size={30} color={BACKGROUND_ICONS} />,
    icon2: <AiOutlinePlusSquare size={30} color={BACKGROUND_ICONS} />,
  },
  {
    id: 3,
    name: 'Location',
    selected: false,
    icon1: <TiLocation size={30} color={BACKGROUND_ICONS} />,
    icon2: <TiLocationOutline size={30} color={BACKGROUND_ICONS} />,
  },
  {
    id: 4,
    name: 'Heart',
    selected: false,
    icon1: <AiFillHeart size={30} color={BACKGROUND_ICONS} />,
    icon2: <AiOutlineHeart size={30} color={BACKGROUND_ICONS} />,
  },
];
