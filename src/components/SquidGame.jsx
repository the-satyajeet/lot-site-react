import React from "react";
import { registration, squidGame } from "../assets";

const SquidGame = () => {
  return (
    <section className="flex justify-center mt-5 mb-20">
      <div className="w-[785px] h-[405px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600">
        <img src={squidGame} className="z-20 w-[357.75px] h-[159px] left-[20px] top-[21px] absolute bg-white rounded" />
          
          <div className="w-[2541px] h-[1403.35px] left-[389.87px] top-[-439.17px] absolute bg-zinc-950 blur-[456.52px]" />
          <div className="w-[2541px] h-[1403.35px] left-[-2331px] top-[-432.78px] absolute bg-zinc-950 blur-[456.52px]" />
          <div className="w-[188.29px] h-[188.29px] left-[335.86px] top-[-28.03px] absolute bg-indigo-700 rounded-full blur-[119.78px]" />
          <div className="w-[115.75px] h-[39.09px] left-[220px] top-[79px] absolute">
            <div className="w-[115.75px] h-[39.09px] left-0 top-0 absolute blur-[4.60px] justify-start items-center gap-[2.77px] inline-flex">
              <div className="flex-col justify-center items-center gap-[2.77px] inline-flex" />
            </div>
            <div className="w-[115.75px] h-[39.09px] left-0 top-0 absolute opacity-50 blur-[30.64px] justify-start items-center gap-[2.77px] inline-flex">
              <div className="flex-col justify-center items-center gap-[2.77px] inline-flex" />
            </div>
            <div className="w-[115.75px] h-[39.09px] left-0 top-0 absolute shadow justify-start items-center gap-[2.77px] inline-flex">
              <div className="flex-col justify-center items-center gap-[2.77px] inline-flex" />
            </div>
            <div className="w-[115.75px] h-[39.09px] left-0 top-0 absolute blur-[76.59px] justify-start items-center gap-[2.77px] inline-flex">
              <div className="flex-col justify-center items-center gap-[2.77px] inline-flex" />
            </div>
          </div>
        <div className="left-[20px] mt-2 top-[189px] absolute text-white text-[40px] font-bold">
          Dare To Play 2024
        </div>
        <div className="left-[20px] top-[235px] absolute text-white text-2xl font-normal">
          Theme: Squid Game
        </div>
        <button className="px-[11.47px] py-[5.74px] left-[685px] top-[357px] absolute bg-white rounded-[19.12px] border-b justify-start items-center gap-[5.74px] inline-flex text-orange-600 text-xs font-bold">
        Go Back
        </button>
        <div className="left-[20px] top-[264px] absolute justify-start items-start gap-2.5 inline-flex">
          <div className="px-4 py-3 rounded-[10px] justify-center items-center gap-4 flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-[5.06px] py-[2.53px] bg-neutral-800 rounded-tl-sm rounded-tr-sm justify-center items-center gap-[12.65px] inline-flex">
                <div className="text-white text-[6.96px] font-bold">
                  AUG
                </div>
              </div>
              <div className="px-[5.57px] py-[5.06px] rounded-bl-[3.20px] rounded-br-[3.20px] border-l border-r border-b border-neutral-800 justify-center items-center gap-5 inline-flex" />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-white text-base font-bold">
                Baldev Raj Mittal Unipolis
              </div>
              <div className="text-white text-xs font-normal">
                Lovely Professional University, Punjab
              </div>
            </div>
          </div>
        </div>
        <div className="left-[25px] top-[329px] absolute justify-start items-start gap-6 inline-flex">
          <div className="h-[52px] px-4 py-3 bg-zinc-800 rounded-[10px] justify-start items-center gap-4 flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-[5.06px] py-[2.53px] bg-neutral-800 rounded-tl-sm rounded-tr-sm justify-center items-center gap-[12.65px] inline-flex">
                <div className="text-white text-[6.96px] font-bold">
                  AUG
                </div>
              </div>
              <div className="px-[5.57px] py-[5.06px] rounded-bl-[3.20px] rounded-br-[3.20px] border-l border-r border-b border-neutral-800 justify-center items-center gap-5 inline-flex" />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div>
                <span className="text-white text-base font-bold">
                  Friday,
                </span>
                <span className="text-white text-base font-normal">
                  {" "}
                  August 19
                </span>
              </div>
              <div className="text-white text-xs font-normal">
                4:00 PM - 7:00 PM
              </div>
            </div>
          </div>
          <div className="h-[52px] px-4 py-3 rounded-[10px] border border-zinc-800 justify-start items-center gap-4 flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-[5.06px] py-[2.53px] bg-neutral-800 rounded-tl-sm rounded-tr-sm justify-center items-center gap-[12.65px] inline-flex">
                <div className="text-white text-[6.96px] font-bold">
                  AUG
                </div>
              </div>
              <div className="px-[5.57px] py-[5.06px] rounded-bl-[3.20px] rounded-br-[3.20px] border-l border-r border-b border-neutral-800 justify-center items-center gap-5 inline-flex" />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div>
                <span className="text-white text-base font-bold font-['Arial']">
                  Saturday,
                </span>
                <span className="text-white text-base font-normal font-['Arial']">
                  {" "}
                  August 20
                </span>
              </div>
              <div className="text-white text-xs font-normal font-['Arial']">
                10:00 AM - 7:00 PM
              </div>
            </div>
          </div>
        </div>
        <div className="w-[349px] left-[408px] top-[21px] absolute flex-col justify-between items-center inline-flex">
          <div className="h-[69.22px] w-[349px] left-[408px] p-[23.07px] bg-blue-500 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-[9.61px] flex">
            <div className="justify-center items-center gap-[9.61px] inline-flex">
              <img src={registration} className="w-[23.07px] h-[23.07px]" />
              <div className="flex-col justify-start items-start gap-[15.38px] inline-flex">
                <div className="flex-col justify-start items-start gap-[11.54px] flex">
                  <div className="text-white text-xl font-normal font-['Arial']">
                    Registration
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[23.07px] bg-gradient-to-b from-blue-100 to-slate-500 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-[9.61px] flex">
            <div className="flex-col justify-start items-start gap-[15.38px] flex">
              <div className="flex-col justify-start items-start gap-[11.54px] flex">
                <div className="w-[302.85px] text-zinc-950 text-sm font-normal font-['Arial']">
                  Ticket Price
                </div>
                <div className="w-[302.85px] text-orange-600 text-3xl font-normal font-['Arial']">
                  ₹20.00
                </div>
              </div>
              <div className="self-stretch h-[96.30px] flex-col justify-start items-start gap-[11.54px] flex">
                <div className="w-[302.85px] text-zinc-950 text-base font-normal font-['Arial']">
                  Welcome! To join the event, please register below.
                </div>
                <button className="self-stretch px-[30.77px] py-[15.38px] bg-blue-700 rounded-lg justify-center items-center gap-[9.61px] inline-flex text-white text-base font-bold">
                    Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidGame;
