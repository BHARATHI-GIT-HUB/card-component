import * as actionTypes from "./cardTypes";
import Direction from "../../Assets/Images/Direction.webp";
import Jomapi from "../../Assets/Images/Jomapi.webp";
import Logo from "../../Assets/Images/Logo.webp";
import Yippa from "../../Assets/Images/Yippa.webp";

const InitialState = {
  items: [
    {
      id: 1,
      days: 2,
      image: Logo,
      heading: "larcus",
      subHeading: "3D design at larcus",
      roles_1: "Mobile Design",
      roles_2: "3D Design",
      weeks: "1-4 weeks",
      money: "$110-$110",
      project_deivery_1: " 3d design help for augmented reality app",
      project_deivery_2:
        "We're looking for some 3d design help for an augmented reality app!",
      discription:
        "We're looking for some 3d design help for an augmented reality app!",
      company_discription: "We Create Web3 PlatForm",
    },
    {
      id: 2,
      days: 2,
      image: Direction,
      heading: "1st Direction",
      subHeading: "No-code / Webflow at 1st Direction",
      roles_1: "No-code / Webflow",
      roles_2: "",
      weeks: "Longer than 6 months • 10 hours/wk",
      money: "$25 - $50/hr",
      project_deivery_1: " 3d design help for augmented reality app",
      project_deivery_2:
        "We're looking for some 3d design help for an augmented reality app!",
      discription:
        "We're looking for some 3d design help for an augmented reality app!",
      company_discription: "We Create Web3 PlatForm",
    },
    {
      id: 3,
      days: 2,
      image: Jomapi,
      heading: "Jomapi",
      subHeading: "Brand Design at Jomapi",
      roles_1: "Brand Design",
      roles_2: "",
      weeks: "1-4 weeks",
      money: "$250 - $1,000",
      project_deivery_1: " 3d design help for augmented reality app",
      project_deivery_2:
        "We're looking for some 3d design help for an augmented reality app!",
      discription:
        "We're looking for some 3d design help for an augmented reality app!",
      company_discription: "We Create Web3 PlatForm",
    },
    {
      id: 4,
      days: 4,
      image: Yippa,
      heading: "Yippa",
      subHeading:
        "Social Content Creation and Community Management / Content at Anise Health",
      roles_1: "UX Design",
      roles_2: "Community Management / Content",
      weeks: "Longer than 6 months • 20 hours/wk",
      money: "$110-$110",
      project_deivery_1: " 3d design help for augmented reality app",
      project_deivery_2:
        "We're looking for some 3d design help for an augmented reality app!",
      discription:
        "We're looking for some 3d design help for an augmented reality app!",
      company_discription: "We Create Web3 PlatForm",
    },
  ],
  currentItem: null,
};

const cardReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
