import GovernmentIcon from "../../assets/icons/government.svg?react";
import JudgeIcon from "../../assets/icons/judge.svg?react";
import ListIcon from "../../assets/icons/list.svg?react";
import MailVoiceIcon from "../../assets/icons/mail-voice.svg?react";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";

export const HeadGallery = () => {
  const data = [
    {},
    {
      color: "#227B9C99",
    },
    {
      color: "#0C3A8D",
    },
    {
      color: "#6683B799",
    },
    {},
    {},

    {
      color: "#0C3A8D",
    },
    {},
    {
      color: "#3D62A4",
    },
    {
      color: "#227B9C",
      content: GovernmentIcon,
    },
    {
      color: "#194593",
    },
    {},

    {},
    {},
    {},
    {
      color: "#19459380",
    },
    {
      color: "#194593",
      content: JudgeIcon,
    },
    {
      color: "#0C3A8D",
    },
  ];

  const data2 = [
    {},
    {},
    {},
    {
      color: "#227B9C99",
    },
    {
      color: "#0C3A8D",
    },
    {},

    {},
    {},
    { color: "#227B9C99", content: ListIcon },
    {
      color: "#227B9C99",
    },
    {
      img: img1,
    },
    {},

    {
      color: "#227B9C99",
    },
    { color: "#227B9C99", content: JudgeIcon },
    { img: img2 },
    {
      color: "#227B9C99",
    },
    {},
    {
      color: "#227B9C99",
    },

    {
      color: "#227B9C99",
    },
    {
      color: "#227B9C99",
    },
    {
      color: "#227B9C99",
    },
    {
      color: "#227B9C99",
    },
    { color: "#227B9C99", content: MailVoiceIcon },

    {},
  ];

  return (
    <div className="w-full h-full relative bg-red-100">
      <div className="grid grid-cols-6 grid-rows-3 gap-1 w-[692px] h-[344px]">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className={`rounded-[5px] flex-center`}
            style={{ backgroundColor: item.color }}
          >
            {item.content ? <item.content /> : <></>}
          </div>
        ))}
      </div>

      <div className="absolute -right-[112px] bg-green-50 w-[692px] h-[576px] -bottom-5">
        <div className="grid grid-cols-6 grid-rows-3 gap-1"></div>
      </div>
    </div>
  );
};
