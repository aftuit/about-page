import { usefulllinks } from "../utils/mock";

export const UsefullLinks = () => {
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`) as HTMLElement;
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  return (
    <div className="w-full bg-white">
      <div className="container-wrapper">
        <h1 className="font-bold text-[35px] text-center uppercase">Foydali havolalar</h1>
        <div className="mt-14 border bg-[#F4F6F9FF] rounded-[20px] p-[49px]">
          <p className="text-[22px] font-bold">Eng so'nggi yangiliklardan xabardor bo'ling</p>

          <div className="mt-9">
            {usefulllinks.map((link: any, index: number) => (
              <div className="w-full rounded-xl bg-white mb-6" key={link.title}>
                <button onClick={() => toggleAccordion(index)} className="w-full flex-between py-4 px-6">
                  <span className="text-[25px] font-bold">{link.title}</span>
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.72539 10.2634C6.04017 9.92762 6.56754 9.91062 6.90329 10.2254L13 15.9411L19.0967 10.2254C19.4325 9.91062 19.9598 9.92762 20.2747 10.2634C20.5893 10.5992 20.5723 11.1265 20.2367 11.4413L13.57 17.6913C13.2494 17.9918 12.7506 17.9918 12.4301 17.6913L5.76339 11.4413C5.42762 11.1265 5.41062 10.5992 5.72539 10.2634Z"
                      fill="#64748B"
                    />
                  </svg>
                </button>
                <div id={`content-${index}`} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out mb-6">
                  <div className="pb-5 text-sm py-4 px-6 border-t-2 border-gray-300 grid grid-cols-5 gap-x-14 gap-y-7">
                    {link.children.map((child: any, i: number) => (
                      <div key={i}>
                        <h3 className="text-xl text-primary font-bold mb-0">{child.name}</h3>
                        <p className="mt-2 font-medium text-base">{child.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
